
import { regulatoryContent } from '@/data/regulatoryContent';
import { notFound } from 'next/navigation';
import RegulatoryServiceClient from './RegulatoryServiceClient';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const stage = decodeSlug(resolvedParams.stage);
  const department = decodeSlug(resolvedParams.department);
  const regulatoryService = decodeSlug(resolvedParams.regulatoryService);
  const key = regulatoryServiceKeyMap[regulatoryService] || null;
  const content = key ? regulatoryContent[key] : undefined;
  
  if (!content) {
    return {
      title: 'Service Not Found - Doctor Promoter',
      description: 'The requested regulatory service was not found.',
    };
  }
  
  return {
    title: `${content.hero.title} - Doctor Promoter`,
    description: content.hero.subtitle,
  };
}

function toTitleCase(str) {
  return decodeURIComponent(str)
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}


const regulatoryServiceKeyMap = {
  // Accreditations
  "NABH Accreditation": "nabhAccreditation",
  "NABL Accreditation": "nablAccreditation",
  "JCI Accreditation": "jciAccreditation",
  "NABH Safe-I Certification": "nabhSafeICertification",
  "ISO 9001:2015 Certification": "iso9001Certification",
  "Green Building Certification": "greenBuildingCertification",
  
  // Clinic Compliance
  "Clinic Registration": "clinicRegistration",
  "Biomedical Waste Authorization": "biomedicalWasteAuthorization",
  "PCPNDT Act Compliance": "pcpndtActCompliance",
  "Bio-Medical Waste Management Rules Compliance": "bioMedicalWasteManagementRulesCompliance",
  "Narcotics and Psychotropic Substances Act Compliance": "narcoticsPsychotropicSubstancesActCompliance",
  "Clinical Establishment Act Registration": "clinicalEstablishmentActRegistration",
  "Fire Safety Regulations": "fireSafetyRegulations",
  "AERB Decommissioning": "aerbDecommissioning",
  "Data Privacy and HIPAA Compliance": "dataPrivacyHipaaCompliance",
  
  // Safety & Environment
  "Fire N.O.C. (Hospital/Clinic)": "fireNocClinic",
  "AERB Radiation Safety Audit": "aerbRadiationSafetyAudit",
  "CGWANOC": "cgwanoc",
  
  // Laboratory Compliance
  "Laboratory Equipment Calibration": "laboratoryEquipmentCalibration",
  "Quality Control Protocols": "qualityControlProtocols",
  "Testing Protocol Compliance": "testingProtocolCompliance",
  
  // Pharmacy Compliance
  "Drug Inventory Management": "drugInventoryManagement",
  "Expiry Date Management": "expiryDateManagement",
  "Drug Dispensing Laws Compliance": "drugDispensingLawsCompliance",
  
  // Clinic Licenses
  "Drug License": "drugLicense",
  "AERB Registration (Radiology)": "aerbRegistrationRadiology",
  "Trade License (Clinic)": "tradeLicenseClinic",
};

function decodeSlug(slug) {
  // Handle double-encoded URLs by decoding twice if needed
  let decoded = decodeURIComponent(slug);
  // If it still contains encoded characters, decode again
  if (decoded.includes('%')) {
    decoded = decodeURIComponent(decoded);
  }
  return decoded;
}

export function generateStaticParams() {
  const params = [];

  // Use URL-encoded values to match the live site URLs and avoid Windows file system issues
  const urlMappings = {
    // Accreditations
    "NABH Accreditation": { stage: "Accreditations", department: "NABH", service: "NABH%20Accreditation" },
    "NABL Accreditation": { stage: "Accreditations", department: "NABL", service: "NABL%20Accreditation" },
    "JCI Accreditation": { stage: "Accreditations", department: "JCI", service: "JCI%20Accreditation" },
    "NABH Safe-I Certification": { stage: "Accreditations", department: "NABH", service: "NABH%20Safe-I%20Certification" },
    "ISO 9001:2015 Certification": { stage: "Accreditations", department: "ISO", service: "ISO%209001-2015%20Certification" },
    "Green Building Certification": { stage: "Accreditations", department: "Green", service: "Green%20Building%20Certification" },
    
    // Clinic Compliance
    "Clinic Registration": { stage: "Clinic%20Compliance", department: "Health%20Dept.", service: "Clinic%20Registration" },
    "Biomedical Waste Authorization": { stage: "Clinic%20Compliance", department: "Pollution%20Control%20Board", service: "Biomedical%20Waste%20Authorization" },
    "PCPNDT Act Compliance": { stage: "Clinic%20Compliance", department: "Health%20Dept.", service: "PCPNDT%20Act%20Compliance" },
    "Bio-Medical Waste Management Rules Compliance": { stage: "Clinic%20Compliance", department: "Pollution%20Control%20Board", service: "Bio-Medical%20Waste%20Management%20Rules%20Compliance" },
    "Narcotics and Psychotropic Substances Act Compliance": { stage: "Clinic%20Compliance", department: "Drugs%20Control", service: "Narcotics%20and%20Psychotropic%20Substances%20Act%20Compliance" },
    "Clinical Establishment Act Registration": { stage: "Clinic%20Compliance", department: "Health%20Dept.", service: "Clinical%20Establishment%20Act%20Registration" },
    "Fire Safety Regulations": { stage: "Clinic%20Compliance", department: "Fire%20Dept.", service: "Fire%20Safety%20Regulations" },
    "AERB Decommissioning": { stage: "Clinic%20Compliance", department: "AERB", service: "AERB%20Decommissioning" },
    "Data Privacy and HIPAA Compliance": { stage: "Clinic%20Compliance", department: "IT%20Compliance", service: "Data%20Privacy%20and%20HIPAA%20Compliance" },
    
    // Safety & Environment
    "Fire N.O.C. (Hospital/Clinic)": { stage: "Safety%20%26%20Environment", department: "Fire%20Dept.", service: "Fire%20N.O.C.%20(Hospital%2FClinic)" },
    "AERB Radiation Safety Audit": { stage: "Safety%20%26%20Environment", department: "AERB", service: "AERB%20Radiation%20Safety%20Audit" },
    "CGWANOC": { stage: "Safety%20%26%20Environment", department: "Pollution%20Control%20Board", service: "CGWANOC" },
    
    // Laboratory Compliance
    "Laboratory Equipment Calibration": { stage: "Laboratory%20Compliance", department: "Equipment", service: "Laboratory%20Equipment%20Calibration" },
    "Quality Control Protocols": { stage: "Laboratory%20Compliance", department: "Quality", service: "Quality%20Control%20Protocols" },
    "Testing Protocol Compliance": { stage: "Laboratory%20Compliance", department: "Protocols", service: "Testing%20Protocol%20Compliance" },
    
    // Pharmacy Compliance
    "Drug Inventory Management": { stage: "Pharmacy%20Compliance", department: "Inventory", service: "Drug%20Inventory%20Management" },
    "Expiry Date Management": { stage: "Pharmacy%20Compliance", department: "Inventory", service: "Expiry%20Date%20Management" },
    "Drug Dispensing Laws Compliance": { stage: "Pharmacy%20Compliance", department: "Legal", service: "Drug%20Dispensing%20Laws%20Compliance" },
    
    // Clinic Licenses
    "Drug License": { stage: "Clinic%20Licenses", department: "Drugs%20Control", service: "Drug%20License" },
    "AERB Registration (Radiology)": { stage: "Clinic%20Licenses", department: "AERB", service: "AERB%20Registration%20(Radiology)" },
    "Trade License (Clinic)": { stage: "Clinic%20Licenses", department: "Municipal%20Authority", service: "Trade%20License%20(Clinic)" },
  };

  for (const displayName of Object.keys(regulatoryServiceKeyMap)) {
    const key = regulatoryServiceKeyMap[displayName];
    if (!regulatoryContent[key]) continue;
    const mapping = urlMappings[displayName];
    if (mapping) {
      params.push({
        stage: mapping.stage,
        department: mapping.department,
        regulatoryService: mapping.service,
      });
    }
  }
  return params;
}


export default async function Page({ params }) {
  const resolvedParams = await params;
  const stage = decodeSlug(resolvedParams.stage);
  const department = decodeSlug(resolvedParams.department);
  const regulatoryService = decodeSlug(resolvedParams.regulatoryService);
  
  // Debug logging for production
  console.log('Regulatory Service Page Debug:', {
    rawParams: resolvedParams,
    decoded: { stage, department, regulatoryService },
    availableKeys: Object.keys(regulatoryServiceKeyMap),
    allContentKeys: Object.keys(regulatoryContent)
  });
  
  // Debug logging (development only)
  if (process.env.NODE_ENV === 'development') {
    console.log('Regulatory Service Page Debug:', {
      rawParams: resolvedParams,
      decoded: { stage, department, regulatoryService },
      availableKeys: Object.keys(regulatoryServiceKeyMap),
      allContentKeys: Object.keys(regulatoryContent)
    });
  }
  
  // First try direct mapping
  let key = regulatoryServiceKeyMap[regulatoryService] || null;
  let content = key ? regulatoryContent[key] : undefined;
  
  // If no content found, try with trimmed service name (handle trailing slashes)
  if (!content && regulatoryService) {
    const trimmedService = regulatoryService.trim();
    key = regulatoryServiceKeyMap[trimmedService] || null;
    content = key ? regulatoryContent[key] : undefined;
  }
  
  // Debug direct mapping (development only)
  if (process.env.NODE_ENV === 'development') {
    console.log('Direct mapping debug:', {
      regulatoryService,
      key,
      contentExists: !!content,
      contentTitle: content?.hero?.title
    });
  }
  
  // If no content found, try multiple matching strategies
  if (!content && regulatoryService) {
    console.log('Direct mapping failed, trying alternative matches...');
    console.log('Looking for service:', regulatoryService);
    console.log('Available services:', Object.keys(regulatoryServiceKeyMap));
    
    // Strategy 1: Exact match with different spacing
    const exactMatch = Object.keys(regulatoryServiceKeyMap).find(displayName => 
      displayName === regulatoryService
    );
    
    // Strategy 2: Case-insensitive match
    const caseInsensitiveMatch = Object.keys(regulatoryServiceKeyMap).find(displayName => 
      displayName.toLowerCase() === regulatoryService.toLowerCase()
    );
    
    // Strategy 3: Match with normalized spacing
    const normalizedMatch = Object.keys(regulatoryServiceKeyMap).find(displayName => 
      displayName.replace(/\s+/g, ' ').trim() === regulatoryService.replace(/\s+/g, ' ').trim()
    );
    
    // Strategy 4: URL decode and match
    const urlDecodedMatch = Object.keys(regulatoryServiceKeyMap).find(displayName => 
      displayName === decodeURIComponent(regulatoryService)
    );
    
    // Strategy 5: Partial match (for cases where URL encoding might have changed)
    const partialMatch = Object.keys(regulatoryServiceKeyMap).find(displayName => 
      displayName.toLowerCase().includes(regulatoryService.toLowerCase()) ||
      regulatoryService.toLowerCase().includes(displayName.toLowerCase())
    );
    
    const matchingKey = exactMatch || caseInsensitiveMatch || normalizedMatch || urlDecodedMatch || partialMatch;
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Alternative matching results:', {
        exactMatch,
        caseInsensitiveMatch,
        normalizedMatch,
        urlDecodedMatch,
        partialMatch,
        finalMatchingKey: matchingKey
      });
    }
    
    if (matchingKey) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Found matching key:', matchingKey);
      }
      key = regulatoryServiceKeyMap[matchingKey];
      content = regulatoryContent[key];
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Alternative mapping result:', {
          key,
          contentExists: !!content,
          contentTitle: content?.hero?.title
        });
      }
      
      if (content) {
        return (
          <RegulatoryServiceClient
            stage={stage}
            department={department}
            regulatoryService={matchingKey}
            serviceKey={key}
            content={content}
          />
        );
      }
    }
  }
  
  // If content was found, render it
  if (content) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Rendering content for:', regulatoryService, 'with key:', key);
    }
    return (
      <RegulatoryServiceClient
        stage={stage}
        department={department}
        regulatoryService={regulatoryService}
        serviceKey={key}
        content={content}
      />
    );
  }
  
  // If still no content found, log detailed error and return 404 (development only)
  if (process.env.NODE_ENV === 'development') {
    console.error('No content found for regulatory service:', {
      regulatoryService,
      stage,
      department,
      availableServices: Object.keys(regulatoryServiceKeyMap),
      availableContent: Object.keys(regulatoryContent)
    });
  }
  
  notFound();
}