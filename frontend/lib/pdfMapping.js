/**
 * PDF Mapping Configuration
 * Maps regulatory service keys to their corresponding PDF filenames
 * Generated automatically - do not edit manually
 */

export const pdfMapping = {
  "nabhAccreditation": "NABH-Accreditation-Checklist.pdf",
  "nablAccreditation": "NABL-Accreditation-Checklist.pdf",
  "clinicRegistration": "Clinic-Registration-Checklist.pdf",
  "biomedicalWasteAuthorization": "Biomedical-Waste-Authorization-Checklist.pdf",
  "drugLicense": "Drug-License-Checklist.pdf",
  "aerbRegistrationRadiology": "AERB-Registration-Radiology-Checklist.pdf",
  "fireNocClinic": "Fire-N.O.C.-Hospital/Clinic-Checklist.pdf",
  "tradeLicenseClinic": "Trade-License-Clinic-Checklist.pdf",
  "jciAccreditation": "JCI-Accreditation-Checklist.pdf",
  "nabhSafeICertification": "NABH-Safe-I-Certification-Checklist.pdf",
  "iso9001Certification": "ISO-9001:2015-Certification-Checklist.pdf",
  "greenBuildingCertification": "Green-Building-Certification-Checklist.pdf",
  "pcpndtActCompliance": "PCPNDT-Act-Compliance-Checklist.pdf",
  "bioMedicalWasteManagementRulesCompliance": "Bio-Medical-Waste-Management-Rules-Compliance-Checklist.pdf",
  "narcoticsPsychotropicSubstancesActCompliance": "Narcotics-and-Psychotropic-Substances-Act-Compliance-Checklist.pdf",
  "clinicalEstablishmentActRegistration": "Clinical-Establishment-Act-Registration-Checklist.pdf",
  "fireSafetyRegulations": "Fire-Safety-Regulations-Checklist.pdf",
  "aerbDecommissioning": "AERB-Decommissioning-Checklist.pdf",
  "dataPrivacyHipaaCompliance": "Data-Privacy-and-HIPAA-Compliance-Checklist.pdf",
  "aerbRadiationSafetyAudit": "AERB-Radiation-Safety-Audit-Checklist.pdf",
  "cgwanoc": "CGWANOC-Checklist.pdf",
  "laboratoryEquipmentCalibration": "Laboratory-Equipment-Calibration-Checklist.pdf",
  "qualityControlProtocols": "Quality-Control-Protocols-Checklist.pdf",
  "testingProtocolCompliance": "Testing-Protocol-Compliance-Checklist.pdf",
  "drugInventoryManagement": "Drug-Inventory-Management-Checklist.pdf",
  "expiryDateManagement": "Expiry-Date-Management-Checklist.pdf",
  "drugDispensingLawsCompliance": "Drug-Dispensing-Laws-Compliance-Checklist.pdf"
};

/**
 * Get PDF filename for a given regulatory service key
 * @param {string} serviceKey - The regulatory service key
 * @returns {string|null} - The PDF filename or null if not found
 */
export function getPdfFilename(serviceKey) {
  return pdfMapping[serviceKey] || null;
}

/**
 * Get PDF download URL for a given regulatory service key
 * @param {string} serviceKey - The regulatory service key
 * @returns {string|null} - The PDF download URL or null if not found
 */
export function getPdfDownloadUrl(serviceKey) {
  const filename = getPdfFilename(serviceKey);
  return filename ? `/pdfs/${filename}` : null;
}

/**
 * Check if a PDF exists for a given regulatory service key
 * @param {string} serviceKey - The regulatory service key
 * @returns {boolean} - True if PDF exists, false otherwise
 */
export function hasPdf(serviceKey) {
  return serviceKey in pdfMapping;
}
