
export const regulatoryContent = {
  // Doctor Promoter – Clinic Compliance & Accreditations
  nabhAccreditation: {
    hero: {
      title: 'NABH Accreditation',
      subtitle: 'Gap assessment, SOPs, staff training and documentation to achieve and maintain NABH standards for hospitals/clinics.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Quality manual and SOPs',
      'Clinical protocols and consent formats',
      'HR records, training and credentialing',
      'Patient safety and infection control records',
      'Equipment maintenance and calibration logs',
    ]},
    applicationProcess: { steps: [
      { title: 'Gap Assessment', description: 'Baseline assessment against NABH standards', duration: '3-5 days' },
      { title: 'Implementation', description: 'SOPs, documentation and staff trainings', duration: '2-8 weeks' },
      { title: 'Internal Audit', description: 'Mock audit and corrective actions', duration: '3-7 days' },
      { title: 'Final Assessment', description: 'Support during pre-assessment and assessment', duration: 'As scheduled' },
    ]},
    importantNotes: { notes: [
      'Maintain version control and regular training logs',
      'Track corrective actions and outcomes',
    ]},
    relatedServices: { services: [
      { title: 'NABL Accreditation', description: 'Quality systems and documentation for labs', link: '/regulatory/Accreditations/NABL/NABL%20Accreditation' },
      { title: 'Biomedical Waste Authorization', description: 'Clinic waste handling compliance', link: '/regulatory/Clinic%20Compliance/Pollution%20Control%20Board/Biomedical%20Waste%20Authorization' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for tailored accreditation support fees', link: { label: 'View Fee Details', href: '#'} },
  },
  nablAccreditation: {
    hero: {
      title: 'NABL Accreditation',
      subtitle: 'Implement quality systems, documentation and competency for laboratory accreditation.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Quality manual and procedures', 'Method validation/verification records', 'Proficiency testing', 'Equipment calibration/maintenance', 'Staff competency records'
    ]},
    applicationProcess: { steps: [
      { title: 'Gap Assessment', description: 'Baseline against NABL criteria', duration: '3-5 days' },
      { title: 'Implementation', description: 'QMS documents and records', duration: '2-8 weeks' },
      { title: 'Internal Audit', description: 'Corrective actions and readiness', duration: '3-7 days' },
      { title: 'Assessment Support', description: 'On-call support during assessment', duration: 'As scheduled' },
    ]},
    importantNotes: { notes: ['Ensure traceability and equipment calibration', 'Participate in proficiency testing']},
    relatedServices: { services: [
      { title: 'NABH Accreditation', description: 'Hospital/clinic quality accreditation', link: '/regulatory/Accreditations/NABH/NABH%20Accreditation' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Request a proposal based on lab scope and size', link: { label: 'View Fee Details', href: '#'} },
  },
  clinicRegistration: {
    hero: { title: 'Clinic Registration', subtitle: 'Registration under applicable clinical establishment rules for your state.', backgroundImage: '/imgs/factory-license-bg.jpg' },
    requiredDocs: { documents: ['ID/address proof', 'Ownership/lease documents', 'Doctor registrations', 'Floor plan', 'Equipment list'] },
    applicationProcess: { steps: [
      { title: 'Document Prep', description: 'Collect required proofs', duration: '2-3 days' },
      { title: 'Application Filing', description: 'Online/offline submission', duration: '1 day' },
      { title: 'Inspection', description: 'Authority verification', duration: 'As scheduled' },
      { title: 'Certificate Issuance', description: 'Registration grant', duration: '1-3 days' },
    ]},
    importantNotes: { notes: ['Renew as per local rules', 'Display registration conspicuously'] },
    relatedServices: { services: [
      { title: 'Fire N.O.C. (Hospital/Clinic)', description: 'Facility fire safety compliance', link: '/regulatory/Safety%20%26%20Environment/Fire%20Dept./Fire%20N.O.C.%20(Hospital%2FClinic)' },
      { title: 'Trade License (Clinic)', description: 'Municipal trade license for clinic operation', link: '/regulatory/Clinic%20Licenses/Municipal%20Authority/Trade%20License%20(Clinic)' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Fees depend on locality and bed/specialty configuration', link: { label: 'View Fee Details', href: '#'} },
  },
  biomedicalWasteAuthorization: {
    hero: { title: 'Biomedical Waste Authorization', subtitle: 'Authorization for collection, storage and disposal of biomedical waste.', backgroundImage: '/imgs/factory-license-bg.jpg' },
    requiredDocs: { documents: ['Clinic registration', 'Waste segregation SOPs', 'Vendor tie-up/agreements', 'Storage area details'] },
    applicationProcess: { steps: [
      { title: 'Document Prep', description: 'Gather required forms and SOPs', duration: '2-3 days' },
      { title: 'Application Submission', description: 'Online portal/local PCB submission', duration: '1 day' },
      { title: 'Inspection', description: 'Facility verification', duration: 'As scheduled' },
      { title: 'Authorization Grant', description: 'Certificate issuance', duration: '1-3 days' },
    ]},
    importantNotes: { notes: ['Maintain records and manifests', 'Train staff for segregation and safety'] },
    relatedServices: { services: [
      { title: 'Clinic Registration', description: 'Clinical establishment compliance', link: '/regulatory/Clinic%20Compliance/Health%20Dept./Clinic%20Registration' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Fees as per state PCB norms and clinic scale', link: { label: 'View Fee Details', href: '#'} },
  },
  drugLicense: {
    hero: { title: 'Drug License', subtitle: 'License for storage/dispensing of drugs/consumables within clinic/pharmacy.', backgroundImage: '/imgs/factory-license-bg.jpg' },
    requiredDocs: { documents: ['Pharmacist registration', 'Premises documents', 'Refrigeration and storage details', 'Purchase records SOPs'] },
    applicationProcess: { steps: [
      { title: 'Document Prep', description: 'Gather pharmacist and premises documents', duration: '2-3 days' },
      { title: 'Application Filing', description: 'Portal submission and fee payment', duration: '1 day' },
      { title: 'Inspection', description: 'Facility and records verification', duration: 'As scheduled' },
      { title: 'License Issuance', description: 'Grant of drug license', duration: '1-3 days' },
    ]},
    importantNotes: { notes: ['Maintain purchase/dispense records', 'Comply with temperature and storage norms'] },
    relatedServices: { services: [
      { title: 'Clinic Registration', description: 'Clinical establishment compliance', link: '/regulatory/Clinic%20Compliance/Health%20Dept./Clinic%20Registration' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Varies by state and license scope', link: { label: 'View Fee Details', href: '#'} },
  },
  aerbRegistrationRadiology: {
    hero: { title: 'AERB Registration (Radiology)', subtitle: 'Radiology equipment and facility registration with AERB.', backgroundImage: '/imgs/factory-license-bg.jpg' },
    requiredDocs: { documents: ['Equipment details and QA', 'Room layout and shielding plan', 'Qualified RSO details', 'Installers’ certificates'] },
    applicationProcess: { steps: [
      { title: 'Facility Prep', description: 'Shielding design and documentation', duration: '1-2 weeks' },
      { title: 'Application Submission', description: 'eLORA portal submission', duration: '1 day' },
      { title: 'Verification', description: 'AERB review/inspection', duration: 'As scheduled' },
      { title: 'Approval', description: 'Registration/consent grant', duration: '1-3 days' },
    ]},
    importantNotes: { notes: ['Maintain QA, safety training and RSO records', 'Comply with signage and PPE'] },
    relatedServices: { services: [ { title: 'Clinic Registration', description: 'Clinical establishment compliance', link: '/regulatory/Clinic%20Compliance/Health%20Dept./Clinic%20Registration' } ]},
    quickActions: { actions: [ { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' }, { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' }, { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' } ]},
    feesStructure: { message: 'As per AERB and state norms', link: { label: 'View Fee Details', href: '#'} },
  },
  fireNocClinic: {
    hero: { title: 'Fire N.O.C. (Hospital/Clinic)', subtitle: 'Fire safety compliance and NOC for clinics and hospitals.', backgroundImage: '/imgs/factory-license-bg.jpg' },
    requiredDocs: { documents: ['Building plans', 'Fire safety layout', 'Ownership/occupancy proof', 'Equipment inspection records'] },
    applicationProcess: { steps: [
      { title: 'Assessment', description: 'Evaluate current safety readiness', duration: '2-3 days' },
      { title: 'Upgrades', description: 'Install/maintain safety equipment', duration: 'As required' },
      { title: 'Application', description: 'Submit to Fire Dept', duration: '1 day' },
      { title: 'Inspection & NOC', description: 'Obtain fire clearance', duration: 'As scheduled' },
    ]},
    importantNotes: { notes: ['Maintain AMC and logs', 'Conduct mock drills and training'] },
    relatedServices: { services: [ { title: 'Clinic Registration', description: 'Clinical establishment compliance', link: '/regulatory/Clinic%20Compliance/Health%20Dept./Clinic%20Registration' } ]},
    quickActions: { actions: [ { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' }, { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' }, { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' } ]},
    feesStructure: { message: 'As per local Fire Dept norms', link: { label: 'View Fee Details', href: '#'} },
  },
  tradeLicenseClinic: {
    hero: { title: 'Trade License (Clinic)', subtitle: 'Municipal trade license for operating a clinic.', backgroundImage: '/imgs/factory-license-bg.jpg' },
    requiredDocs: { documents: ['ID/address proof', 'Ownership/lease documents', 'Clinic registration', 'NOC as applicable'] },
    applicationProcess: { steps: [
      { title: 'Document Prep', description: 'Collect documents', duration: '2-3 days' },
      { title: 'Submission', description: 'Application and fees', duration: '1 day' },
      { title: 'Inspection', description: 'Municipal inspection', duration: 'As scheduled' },
      { title: 'License Grant', description: 'License issuance', duration: '1-3 days' },
    ]},
    importantNotes: { notes: ['Renew annually as per local rules'] },
    relatedServices: { services: [ { title: 'Fire N.O.C. (Hospital/Clinic)', description: 'Facility safety compliance', link: '/regulatory/Safety%20%26%20Environment/Fire%20Dept./Fire%20N.O.C.%20(Hospital%2FClinic)' } ]},
    quickActions: { actions: [ { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' }, { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' }, { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' } ]},
    feesStructure: { message: 'Varies by municipality and clinic size', link: { label: 'View Fee Details', href: '#'} },
  },
  // Pre-Establishment Stage
  principalEmployerRegistration: {
    hero: {
      title: 'Principal Employer Registration',
      subtitle: 'Complete guidance and support for obtaining your Principal Employer Registration license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'Establishment PAN card',
        'proof of business address',
        'list of engaged contractors with contact details',
        'details of contract labor employed',
        'and a duly filled application form submitted to the relevant registering authority in concern area office.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'BOCW Registration',
          description: 'Identity proof of the employer (Aadhaar card), establishment address proof (electricity bill or rent agreement), details of the construction site,...',
          link: '/regulatory/pre-establishment-stage/labour-dept/bocw-registration',
        },
        {
          title: 'Site Plan Approval',
          description: 'A detailed site plan with elevations and cross-sections, proof of land ownership (land documents), a questionnaire related to the...',
          link: '/regulatory/pre-establishment-stage/planning-and-building-dept/site-plan-approval',
        },
        {
          title: 'Stability Certificate',
          description: 'A ‘Certificate of Stability’ issued by a qualified structural engineer, along with documents like detailed factory plans, site plans, proof of land...',
          link: '/regulatory/pre-establishment-stage/planning-and-building-dept/stability-certificate',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  bocwRegistration: {
    hero: {
      title: 'BOCW Registration',
      subtitle: 'Complete guidance and support for obtaining your BOCW Registration license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'Identity proof of the employer (Aadhaar card)',
        'establishment address proof (electricity bill or rent agreement)',
        'details of the construction site',
        'number of construction workers employed',
        'bank account details',
        'and a duly filled application form (Form I)',
        'along with proof of the nature of construction work being undertaken.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Principal Employer Registration',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-establishment-stage/labour-dept/principal-employer-registration',
        },
        {
          title: 'Site Plan Approval',
          description: 'A detailed site plan with elevations and cross-sections, proof of land ownership (land documents), a questionnaire related to the...',
          link: '/regulatory/pre-establishment-stage/planning-and-building-dept/site-plan-approval',
        },
        {
          title: 'Stability Certificate',
          description: 'A ‘Certificate of Stability’ issued by a qualified structural engineer, along with documents like detailed factory plans, site plans, proof of land...',
          link: '/regulatory/pre-establishment-stage/planning-and-building-dept/stability-certificate',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  sitePlanApproval: {
    hero: {
      title: 'Site Plan Approval',
      subtitle: 'Complete guidance and support for obtaining your Site Plan Approval license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'A detailed site plan with elevations and cross-sections',
        'proof of land ownership (land documents)',
        'a questionnaire related to the factory',
        'process flow diagram',
        'NOCs from relevant authorities like fire department and pollution control board',
        'stability certificate',
        'and depending on the state',
        'a ‘Form 1’ application detailing the factory structure and operations',
        'along with a brief description of the manufacturing process',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Stability Certificate',
          description: 'A ‘Certificate of Stability’ issued by a qualified structural engineer, along with documents like detailed factory plans, site plans, proof of land...',
          link: '/regulatory/pre-establishment-stage/planning-and-building-dept/stability-certificate',
        },
        {
          title: 'Principal Employer Registration',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-establishment-stage/labour-dept/principal-employer-registration',
        },
        {
          title: 'BOCW Registration',
          description: 'Identity proof of the employer (Aadhaar card), establishment address proof (electricity bill or rent agreement), details of the construction site,...',
          link: '/regulatory/pre-establishment-stage/labour-dept/bocw-registration',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  stabilityCertificate: {
    hero: {
      title: 'Stability Certificate',
      subtitle: 'Complete guidance and support for obtaining your Stability Certificate license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'A ‘Certificate of Stability’ issued by a qualified structural engineer',
        'along with documents like detailed factory plans',
        'site plans',
        'proof of land ownership',
        'a questionnaire regarding the building structure',
        'and a brief description of the manufacturing process taking place in the factory',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Site Plan Approval',
          description: 'A detailed site plan with elevations and cross-sections, proof of land ownership (land documents), a questionnaire related to the...',
          link: '/regulatory/pre-establishment-stage/planning-and-building-dept/site-plan-approval',
        },
        {
          title: 'Principal Employer Registration',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-establishment-stage/labour-dept/principal-employer-registration',
        },
        {
          title: 'BOCW Registration',
          description: 'Identity proof of the employer (Aadhaar card), establishment address proof (electricity bill or rent agreement), details of the construction site,...',
          link: '/regulatory/pre-establishment-stage/labour-dept/bocw-registration',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  consentToEstablish: {
    hero: {
      title: 'Consent to Establish (Under Green/Orange/Red Category)',
      subtitle: 'Complete guidance and and support for obtaining your Consent to Establish (Under Green/Orange/Red Category) license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'To apply for a Consent to Establish (CTE)',
        'you typically need documents like: land ownership proof (lease agreement or land title deed)',
        'detailed project report',
        'site plan',
        'water balance calculations',
        'list of machinery',
        'details of raw materials and finished products',
        'industry registration documents',
        'pollution control measures details',
        'and an authorization letter (if applicable)',
        'along with any specific requirements based on your state\'s pollution control board regulations.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Environment Clearance Certificate (State/Central)',
          description: 'To obtain an Environment Clearance Certificate (ECC) at the state or central level, you typically need documents like: a detailed project...',
          link: '/regulatory/pre-establishment-stage/environment-dept/environment-clearance-certificate',
        },
        {
          title: 'Principal Employer Registration',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-establishment-stage/labour-dept/principal-employer-registration',
        },
        {
          title: 'BOCW Registration',
          description: 'Identity proof of the employer (Aadhaar card), establishment address proof (electricity bill or rent agreement), details of the construction site,...',
          link: '/regulatory/pre-establishment-stage/labour-dept/bocw-registration',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  environmentClearanceCertificate: {
    hero: {
      title: 'Environment Clearance Certificate (State/Central)',
      subtitle: 'Complete guidance and support for obtaining your Environment Clearance Certificate (State/Central) license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'To obtain an Environment Clearance Certificate (ECC) at the state or central level',
        'you typically need documents like: a detailed project description',
        'site layout plan',
        'proof of land ownership',
        'ID proof of signatory',
        'quality test reports (if applicable)',
        'proof of installed machinery',
        'environmental impact assessment (EIA) report',
        'public consultation records',
        'mitigation measures plan',
        'and proof of water and electricity connection.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Consent to Establish (Under Green/Orange/Red Category)',
          description: 'To apply for a Consent to Establish (CTE), you typically need documents like: land ownership proof (lease agreement or land title deed),...',
          link: '/regulatory/pre-establishment-stage/environment-dept/consent-to-establish',
        },
        {
          title: 'Principal Employer Registration',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-establishment-stage/labour-dept/principal-employer-registration',
        },
        {
          title: 'BOCW Registration',
          description: 'Identity proof of the employer (Aadhaar card), establishment address proof (electricity bill or rent agreement), details of the construction site,...',
          link: '/regulatory/pre-establishment-stage/labour-dept/bocw-registration',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  provisionalFireNoc: {
    hero: {
      title: 'Provisional Fire N.O.C.',
      subtitle: 'Complete guidance and support for obtaining your Provisional Fire N.O.C. license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'To obtain a provisional Fire NOC',
        'typically you will need: a completed application form',
        'site plan',
        'building plans (including floor plans',
        'elevations',
        'sections)',
        'ownership documents',
        'a building stability certificate',
        'electrical wiring certificate',
        'details of proposed fire fighting systems',
        'and a self-declaration with photo ID proof; specific requirements may vary based on local regulations.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Principal Employer Registration',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-establishment-stage/labour-dept/principal-employer-registration',
        },
        {
          title: 'BOCW Registration',
          description: 'Identity proof of the employer (Aadhaar card), establishment address proof (electricity bill or rent agreement), details of the construction site,...',
          link: '/regulatory/pre-establishment-stage/labour-dept/bocw-registration',
        },
        {
          title: 'Site Plan Approval',
          description: 'A detailed site plan with elevations and cross-sections, proof of land ownership (land documents), a questionnaire related to the...',
          link: '/regulatory/pre-establishment-stage/planning-and-building-dept/site-plan-approval',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  registrationOfEntrepreneurMemorandum: {
    hero: {
      title: 'Registration of Entrepreneur Memorandum',
      subtitle: 'Complete guidance and support for obtaining your Registration of Entrepreneur Memorandum license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'To register an Entrepreneur Memorandum (EM) under the District Industries Centre (DIC)',
        'you typically need documents like: Aadhaar card',
        'PAN card',
        'business address proof',
        'details of the business activity (NIC code)',
        'investment details in plant and machinery',
        'turnover details',
        'bank account details',
        'a copy of the partnership deed (if applicable)',
        'and a detailed project report outlining the business plan; depending on the specific state regulations',
        'additional documents like NOCs or land ownership documents may be required.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Approval of Mega Project',
          description: 'For approval of mega projects, the required documents typically include: project feasibility study, detailed project report (DPR), land...',
          link: '/regulatory/pre-establishment-stage/industry-dept/approval-of-mega-project',
        },
        {
          title: 'Principal Employer Registration',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-establishment-stage/labour-dept/principal-employer-registration',
        },
        {
          title: 'BOCW Registration',
          description: 'Identity proof of the employer (Aadhaar card), establishment address proof (electricity bill or rent agreement), details of the construction site,...',
          link: '/regulatory/pre-establishment-stage/labour-dept/bocw-registration',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  approvalOfMegaProject: {
    hero: {
      title: 'Approval of Mega Project',
      subtitle: 'Complete guidance and support for obtaining your Approval of Mega Project license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'For approval of mega projects',
        'the required documents typically include: project feasibility study',
        'detailed project report (DPR)',
        'land ownership documents',
        'environmental impact assessment (EIA)',
        'socio-economic impact assessment (SEIA)',
        'NOCs from relevant authorities (like pollution control board',
        'forest department)',
        'site plan',
        'detailed design drawings',
        'financial projections',
        'legal opinions',
        'and government-specific forms depending on the project type and location; all meticulously reviewed and submitted to the appropriate regulatory bodies.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Registration of Entrepreneur Memorandum',
          description: 'To register an Entrepreneur Memorandum (EM) under the District Industries Centre (DIC), you typically need documents like: Aadhaar card, PAN...',
          link: '/regulatory/pre-establishment-stage/industry-dept/registration-of-entrepreneur-memorandum',
        },
        {
          title: 'Principal Employer Registration',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-establishment-stage/labour-dept/principal-employer-registration',
        },
        {
          title: 'BOCW Registration',
          description: 'Identity proof of the employer (Aadhaar card), establishment address proof (electricity bill or rent agreement), details of the construction site,...',
          link: '/regulatory/pre-establishment-stage/labour-dept/bocw-registration',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },

  // Pre-Operational Stage
  tradeLicense: {
    hero: {
      title: 'Trade License',
      subtitle: 'Complete guidance and support for obtaining your Trade License license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'To apply for a trade license',
        'you typically need documents like: identity proof (Aadhaar card)',
        'address proof (lease deed or rent agreement)',
        'property tax receipt',
        'occupancy certificate',
        'business incorporation certificate',
        'and depending on the trade type',
        'a No Objection Certificate (NOC) from relevant authorities like the Pollution Control Board or Fire Department; always check with your local municipal corporation for specific requirements.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Factory License under Factories Act-1948',
          description: 'To apply for a factory license, you typically need documents like: owner ID proof, factory address proof (electricity bill or rental agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/factory-license-under-factories-act-1948',
        },
        {
          title: 'RC under CLRA Act-1970',
          description: 'Required documents: Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/rc-under-clra-act-1970',
        },
        {
          title: 'Consent to Operate (CTO-CCA)',
          description: 'The documents required for a Consent to Operate (CTO) vary by state and the type of business. In general, you\'ll need an application...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/consent-to-operate-cto-cca',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  factoryLicenseUnderFactoriesAct1948: {
    hero: {
      title: 'Factory License under Factories Act-1948',
      subtitle: 'Complete guidance and support for obtaining your Factory License under Factories Act-1948 license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'To apply for a factory license',
        'you typically need documents like: owner ID proof',
        'factory address proof (electricity bill or rental agreement)',
        'pollution control board consent letter',
        'NOC from fire and water departments',
        'business PAN card',
        'factory layout and building plan',
        'list of directors',
        'partnership deed or board resolution',
        'details of equipment and raw materials',
        'and tax receipts if applicable',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Trade License',
          description: 'To apply for a trade license, you typically need documents like: identity proof (Aadhaar card), address proof (lease deed or rent agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/trade-license',
        },
        {
          title: 'RC under CLRA Act-1970',
          description: 'Required documents: Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/rc-under-clra-act-1970',
        },
        {
          title: 'Consent to Operate (CTO-CCA)',
          description: 'The documents required for a Consent to Operate (CTO) vary by state and the type of business. In general, you\'ll need an application...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/consent-to-operate-cto-cca',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  fireNocOperational: {
    hero: {
      title: 'Fire N.O.C. (Operational)',
      subtitle: 'Complete guidance and support for obtaining your Fire N.O.C. (Operational) license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'For Fire NOC: Building plan approval',
        'occupancy certificate',
        'structural stability certificate',
        'electrical installation clearance certificate',
        'fire protection system design and installation certificate',
        'emergency exit plan details',
        'ownership documents',
        'and other documents specified by the local fire department.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'LPG/Solvent Storage License',
          description: 'For explosive license: Application form, detailed site plans, ownership/tenancy proof, premises photographs, NOCs from Fire Department and...',
          link: '/regulatory/pre-operational-stage/fire-dept/lpg-solvent-storage-license',
        },
        {
          title: 'Explosive/HSD Storage License',
          description: 'Similar to LPG/Solvent Storage License requirements with additional technical specifications for HSD storage.',
          link: '/regulatory/pre-operational-stage/fire-dept/explosive-hsd-storage-license',
        },
        {
          title: 'Trade License',
          description: 'To apply for a trade license, you typically need documents like: identity proof (Aadhaar card), address proof (lease deed or rent agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/trade-license',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  lpgSolventStorageLicense: {
    hero: {
      title: 'LPG/Solvent Storage License',
      subtitle: 'Complete guidance and support for obtaining your LPG/Solvent Storage License license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'For explosive license: Application form',
        'detailed site plans',
        'ownership/tenancy proof',
        'premises photographs',
        'NOCs from Fire Department and local police',
        'technical documents for explosives storage and handling facilities',
        'personal identification documents including passport-sized photographs and age proof.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Fire N.O.C. (Operational)',
          description: 'For Fire NOC: Building plan approval, occupancy certificate, structural stability certificate, electrical installation clearance certificate, fire protection...',
          link: '/regulatory/pre-operational-stage/fire-dept/fire-noc-operational',
        },
        {
          title: 'Explosive/HSD Storage License',
          description: 'Similar to LPG/Solvent Storage License requirements with additional technical specifications for HSD storage.',
          link: '/regulatory/pre-operational-stage/fire-dept/explosive-hsd-storage-license',
        },
        {
          title: 'Trade License',
          description: 'To apply for a trade license, you typically need documents like: identity proof (Aadhaar card), address proof (lease deed or rent agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/trade-license',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  explosiveHsdStorageLicense: {
    hero: {
      title: 'Explosive/HSD Storage License',
      subtitle: 'Complete guidance and support for obtaining your Explosive/HSD Storage License license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'Similar to LPG/Solvent Storage License requirements with additional technical specifications for HSD storage.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Fire N.O.C. (Operational)',
          description: 'For Fire NOC: Building plan approval, occupancy certificate, structural stability certificate, electrical installation clearance certificate, fire protection...',
          link: '/regulatory/pre-operational-stage/fire-dept/fire-noc-operational',
        },
        {
          title: 'LPG/Solvent Storage License',
          description: 'For explosive license: Application form, detailed site plans, ownership/tenancy proof, premises photographs, NOCs from Fire Department and...',
          link: '/regulatory/pre-operational-stage/fire-dept/lpg-solvent-storage-license',
        },
        {
          title: 'Trade License',
          description: 'To apply for a trade license, you typically need documents like: identity proof (Aadhaar card), address proof (lease deed or rent agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/trade-license',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  epfCodeRegistration: {
    hero: {
      title: 'EPF Code Registration',
      subtitle: 'Complete guidance and support for obtaining your EPF Code Registration license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'To register for EPF',
        'you’ll need: PAN card of the company/firm/society/trust.',
        'Address proof of registered office',
        'Certificate of incorporation/registration',
        'Cancelled company bank account cheque',
        'Signature copy of directors/authorized signatories',
        'and Consent from majority of employees if registering voluntarily.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'ESIC Code Registration',
          description: 'For ESIC registration: Business documents (Certificate of Incorporation, MOA, AOA, Partnership Deed, GST Registration), Employee...',
          link: '/regulatory/pre-operational-stage/labour-dept/esic-code-registration',
        },
        {
          title: 'Trade License',
          description: 'To apply for a trade license, you typically need documents like: identity proof (Aadhaar card), address proof (lease deed or rent agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/trade-license',
        },
        {
          title: 'Factory License under Factories Act-1948',
          description: 'To apply for a factory license, you typically need documents like: owner ID proof, factory address proof (electricity bill or rental agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/factory-license-under-factories-act-1948',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  esicCodeRegistration: {
    hero: {
      title: 'ESIC Code Registration',
      subtitle: 'Complete guidance and support for obtaining your ESIC Code Registration license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'For ESIC registration: Business documents (Certificate of Incorporation',
        'MOA',
        'AOA',
        'Partnership Deed',
        'GST Registration)',
        'Employee documents (PAN cards',
        'employee details with wage information)',
        'Company documents (Address proof',
        'cancelled cheque',
        'contact details)',
        'Director documents (Digital signature',
        'contact information)',
        'and Other documents (Employee list',
        'Shareholders list',
        'directors list',
        'company purpose document).',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'EPF Code Registration',
          description: 'To register for EPF, you\'ll need: PAN card of the company/firm/society/trust, Address proof of registered office, Certificate of...',
          link: '/regulatory/pre-operational-stage/labour-dept/epf-code-registration',
        },
        {
          title: 'Trade License',
          description: 'To apply for a trade license, you typically need documents like: identity proof (Aadhaar card), address proof (lease deed or rent agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/trade-license',
        },
        {
          title: 'Factory License under Factories Act-1948',
          description: 'To apply for a factory license, you typically need documents like: owner ID proof, factory address proof (electricity bill or rental agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/factory-license-under-factories-act-1948',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  weightAndMeasurementRegistration: {
    hero: {
      title: 'Weight & Measurement Registration',
      subtitle: 'Complete guidance and support for obtaining your Weight & Measurement Registration license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'Required documents: PAN card copy',
        'Business registration proof',
        'Premises documentation',
        'Business constitution documents',
        'Authorized signatory signatures',
        'Partner/Director PAN and Aadhaar cards',
        'and Last Verification Certificate or Original Invoice for imported weighing instruments.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Trade License',
          description: 'To apply for a trade license, you typically need documents like: identity proof (Aadhaar card), address proof (lease deed or rent agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/trade-license',
        },
        {
          title: 'Factory License under Factories Act-1948',
          description: 'To apply for a factory license, you typically need documents like: owner ID proof, factory address proof (electricity bill or rental agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/factory-license-under-factories-act-1948',
        },
        {
          title: 'RC under CLRA Act-1970',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-operational-stage/labour-dept/rc-under-clra-act-1970',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  packSizeApproval: {
    hero: {
      title: 'Pack Size Approval',
      subtitle: 'Complete guidance and support for obtaining your Pack Size Approval license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'Required documents: Company registration details (Certificate of Incorporation)',
        'business address proof',
        'GST registration certificate',
        'PAN card',
        'packaged commodities details',
        'product labels with declarations',
        'packaging materials list',
        'and product samples as per specific regulations and state requirements.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Trade License',
          description: 'To apply for a trade license, you typically need documents like: identity proof (Aadhaar card), address proof (lease deed or rent agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/trade-license',
        },
        {
          title: 'Factory License under Factories Act-1948',
          description: 'To apply for a factory license, you typically need documents like: owner ID proof, factory address proof (electricity bill or rental agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/factory-license-under-factories-act-1948',
        },
        {
          title: 'RC under CLRA Act-1970',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-operational-stage/labour-dept/rc-under-clra-act-1970',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  consentToOperateCtoCca: {
    hero: {
      title: 'Consent to Operate (CTO-CCA)',
      subtitle: 'Complete guidance and support for obtaining your Consent to Operate (CTO-CCA) license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'The documents required for a Consent to Operate (CTO) vary by state and the type of business. In general',
        'you’ll need an application form',
        'proof of registration',
        'and proof of payment. Common documents include: Consent application form',
        'Authorization letter',
        'Industry registration proof',
        'Consent fee payment proof',
        'PAN card or Aadhaar card',
        'Municipal or industry license',
        'Factory/trade/health trade license',
        'FSSAI and GST certificate',
        'Water bill',
        'Power utility bill',
        'Ownership proof',
        'Environmental Impact Assessment Report',
        'and NOC from the local body.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Trade License',
          description: 'To apply for a trade license, you typically need documents like: identity proof (Aadhaar card), address proof (lease deed or rent agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/trade-license',
        },
        {
          title: 'Factory License under Factories Act-1948',
          description: 'To apply for a factory license, you typically need documents like: owner ID proof, factory address proof (electricity bill or rental agreement),...',
          link: '/regulatory/pre-operational-stage/municipal-local-authority/factory-license-under-factories-act-1948',
        },
        {
          title: 'RC under CLRA Act-1970',
          description: 'Establishment PAN card, proof of business address, list of engaged contractors with contact details, details of contract labor employed, and ...',
          link: '/regulatory/pre-operational-stage/labour-dept/rc-under-clra-act-1970',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },

  // Post-Commissioning Stage (Annual Renewal Stage)
  factoryLicenseUnderFactoriesAct: {
    hero: {
      title: 'Factory License under Factories Act',
      subtitle:
        'Complete guidance and support for obtaining your Factory License under Factories Act license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: {
      documents: [
        'Required documents: Owner ID and address proof',
        'Factory premises proof',
        'Pollution department consent',
        'NOCs from fire and water departments',
        'Business PAN card',
        'Factory layout and building plan',
        'Directors list',
        'Partnership deed/board resolution',
        'Equipment and raw materials details',
        'Applicable tax receipts.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'RC under CLRA Act-1970',
          description:
            'Required documents: Establishment PAN card, business address proof, contractor list with contact details, contract labor employment... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/rc-under-clra-act-1970',
        },
        {
          title: 'Boiler Renewal under IBR Act',
          description:
            'Required documents: Forwarding letter, completed application form, trade license copy, lease/tenancy deed copy, photo ID proof... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/boiler-renewal-under-ibr-act',
        },
        {
          title: 'Fire N.O.C. (Annual Clearance)',
          description:
            'Required documents: Original Fire NOC, renewal application form, ownership proof, updated building plans, payment receipt, fire safety... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/fire-noc-annual-clearance',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message:
        'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },

  rcUnderClraAct1970: {
    hero: {
      title: 'RC under CLRA Act-1970',
      subtitle:
        'Complete guidance and support for obtaining your RC under CLRA Act-1970 license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: {
      documents: [
        'Required documents: Establishment PAN card',
        'Business address proof',
        'Contractor list with contact details',
        'Contract labor employment details',
        'And completed application form for the relevant registering authority.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Factory License under Factories Act',
          description:
            'Required documents: Owner ID and address proof, factory premises proof, pollution department consent, NOCs from fire and water departments... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/factory-license-under-factories-act',
        },
        {
          title: 'Boiler Renewal under IBR Act',
          description:
            'Required documents: Forwarding letter, completed application form, trade license copy, lease/tenancy deed copy, photo ID proof... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/boiler-renewal-under-ibr-act',
        },
        {
          title: 'Fire N.O.C. (Annual Clearance)',
          description:
            'Required documents: Original Fire NOC, renewal application form, ownership proof, updated building plans, payment receipt, fire safety... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/fire-noc-annual-clearance',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message:
        'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  boilerRenewalUnderIbrAct: {
    hero: {
      title: 'Boiler Renewal under IBR Act',
      subtitle:
        'Complete guidance and support for obtaining your Boiler Renewal under IBR Act license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: {
      documents: [
        'Required documents: Forwarding letter',
        'Completed application form',
        'Trade license copy',
        'Lease/tenancy deed copy',
        'Photo ID proof',
        'Machinery list',
        'Technical personnel details with experience',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Factory License under Factories Act',
          description:
            'Required documents: Owner ID and address proof, factory premises proof, pollution department consent, NOCs from fire and water departments...',
          link: '/regulatory/post-commissioning-stage/factory-dept/factory-license-under-factories-act',
        },
        {
          title: 'RC under CLRA Act-1970',
          description:
            'Required documents: Establishment PAN card, business address proof, contractor list with contact details, contract labor employment...',
          link: '/regulatory/post-commissioning-stage/factory-dept/rc-under-clra-act-1970',
        },
        {
          title: 'Fire N.O.C. (Annual Clearance)',
          description:
            'Required documents: Original Fire NOC, renewal application form, ownership proof, updated building plans, payment receipt, fire safety...',
          link: '/regulatory/post-commissioning-stage/factory-dept/fire-noc-annual-clearance',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message:
        'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },

  fireNocAnnualClearance: {
    hero: {
      title: 'Fire N.O.C. (Annual Clearance)',
      subtitle:
        'Complete guidance and support for obtaining your Fire N.O.C. (Annual Clearance) license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: {
      documents: [
        'Required documents: Original Fire NOC',
        'Renewal application form',
        'Ownership proof',
        'Updated building plans',
        'Payment receipt',
        'Fire safety equipment maintenance records',
        'Fire safety inspection reports',
        'Any additional documents requested by the fire department',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'LPG/Solvent Storage License',
          description:
            'Required documents for PESO: Form RE-1 (renewal application), original license/certificate, approved plans and schedules, renewal fee ban...',
          link: '/regulatory/post-commissioning-stage/factory-dept/lpg-solvent-storage-license-renewal',
        },
        {
          title: 'Explosive/HSD Storage License',
          description:
            'Similar to LPG/Solvent Storage License renewal requirements with specific documentation for HSD storage.',
          link: '/regulatory/post-commissioning-stage/factory-dept/explosive-hsd-storage-license-renewal',
        },
        {
          title: 'Factory License under Factories Act',
          description:
            'Required documents: Owner ID and address proof, factory premises proof, pollution department consent, NOCs from fire and water...',
          link: '/regulatory/post-commissioning-stage/factory-dept/factory-license-under-factories-act',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message:
        'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },

  lpgSolventStorageLicenseRenewal: {
    hero: {
      title: 'LPG/Solvent Storage License',
      subtitle:
        'Complete guidance and support for obtaining your LPG/Solvent Storage License license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: {
      documents: [
        'Required documents for PESO: Form RE-1 (renewal application)',
        'Original license/certificate',
        'Approved plans and schedules',
        'Renewal fee bank draft',
        'Original test/safety certificates',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Fire N.O.C. (Annual Clearance)',
          description:
            'Required documents: Original Fire NOC, renewal application form, ownership proof, updated building plans, payment receipt, fire safety...',
          link: '/regulatory/post-commissioning-stage/factory-dept/fire-noc-annual-clearance',
        },
        {
          title: 'Explosive/HSD Storage License',
          description:
            'Similar to LPG/Solvent Storage License renewal requirements with specific documentation for HSD storage.',
          link: '/regulatory/post-commissioning-stage/factory-dept/explosive-hsd-storage-license-renewal',
        },
        {
          title: 'Factory License under Factories Act',
          description:
            'Required documents: Owner ID and address proof, factory premises proof, pollution department consent, NOCs from fire and water...',
          link: '/regulatory/post-commissioning-stage/factory-dept/factory-license-under-factories-act',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message:
        'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },

  explosiveHsdStorageLicenseRenewal: {
    hero: {
      title: 'Explosive/HSD Storage License',
      subtitle:
        'Complete guidance and support for obtaining your Explosive/HSD Storage License license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: {
      documents: [
        'Similar to LPG/Solvent Storage License renewal requirements with specific documentation for HSD storage.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Fire N.O.C. (Annual Clearance)',
          description:
            'Required documents: Original Fire NOC, renewal application form, ownership proof, updated building plans, payment receipt, fire safety...',
          link: '/regulatory/post-commissioning-stage/factory-dept/fire-noc-annual-clearance',
        },
        {
          title: 'LPG/Solvent Storage License',
          description:
            'Required documents for PESO: Form RE-1 (renewal application), original license/certificate, approved plans and schedules, renewal fee bank draft...',
          link: '/regulatory/post-commissioning-stage/factory-dept/lpg-solvent-storage-license-renewal',
        },
        {
          title: 'Factory License under Factories Act',
          description:
            'Required documents: Owner ID and address proof, factory premises proof, pollution department consent, NOCs from fire and water...',
          link: '/regulatory/post-commissioning-stage/factory-dept/factory-license-under-factories-act',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message:
        'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },

  consentToOperateCtoCcaRenewal: {
    hero: {
      title: 'Consent to Operate (CTO-CCA)',
      subtitle: 'Complete guidance and support for obtaining your Consent to Operate (CTO-CCA) license, ensuring compliance with all regulatory requirements.'
    },
    requiredDocs: {
      documents: [
        'Required documents: Compliance report',
        'analysis reports (effluent',
        'emissions',
        'stack)',
        'financial documents',
        'production capacity details',
        'management changes documentation',
        'previous CTO copy',
        'consent fee payment proof',
        'CA certificate for fixed assets',
        'and latest partnership deed/MOA',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Factory License under Factories Act',
          description: 'Required documents: Owner ID and address proof, factory premises proof, pollution department consent, NOCs from fire and water departments... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/factory-license-under-factories-act',
        },
        {
          title: 'RC under CLRA Act-1970',
          description: 'Required documents: Establishment PAN card, business address proof, contractor list with contact details, contract labor employment... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/rc-under-clra-act-1970',
        },
        {
          title: 'Boiler Renewal under IBR Act',
          description: 'Required documents: Forwarding letter, completed application form, trade license copy, lease/tenancy deed copy, photo ID proof... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/boiler-renewal-under-ibr-act',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },
  weightAndMeasurementRegistrationRenewal: {
    hero: {
      title: 'Weight & Measurement Registration',
      subtitle: 'Complete guidance and support for obtaining your Weight & Measurement Registration license, ensuring compliance with all regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg', // Assuming a placeholder image
    },
    requiredDocs: {
      documents: [
        'Required documents: Premises proof (sale deed/lease deed)',
        'rent receipt/owner NOC',
        'firm’s constitution documents',
        'sales statement',
        'site plan',
        'sales tax registration',
        'renewal fee receipt',
        'original license',
        'equipment list',
        'financial status proof',
        'worker list',
        'legal possession proof',
        'and stock/sales statement.',
      ],
    },
    applicationProcess: {
      steps: [
        {
          title: 'Document Collection',
          description: 'Gather all required documents and information',
          duration: '1-2 days',
        },
        {
          title: 'Application Submission',
          description: 'Submit application with complete documentation',
          duration: '1 day',
        },
        {
          title: 'Processing Time',
          description: 'Authority review and verification process',
          duration: '15-30 days',
        },
        {
          title: 'License Issuance',
          description: 'Final approval and license generation',
          duration: '2-3 days',
        },
      ],
    },
    importantNotes: {
      notes: [
        'All documents must be self-attested and submitted in the prescribed format',
        'Additional documents may be required based on the nature of business',
        'Processing time may vary depending on the completeness of documentation',
      ],
    },
    relatedServices: {
      services: [
        {
          title: 'Factory License under Factories Act',
          description: 'Required documents: Owner ID and address proof, factory premises proof, pollution department consent, NOCs from fire and water... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/factory-license-under-factories-act',
        },
        {
          title: 'RC under CLRA Act-1970',
          description: 'Required documents: Establishment PAN card, business address proof, contractor list with contact details, contract labor employment... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/rc-under-clra-act-1970',
        },
        {
          title: 'Boiler Renewal under IBR Act',
          description: 'Required documents: Forwarding letter, completed application form, trade license copy, lease/tenancy deed copy, photo ID proof... ',
          link: '/regulatory/post-commissioning-stage/factory-dept/boiler-renewal-under-ibr-act',
        },
      ],
    },
    quickActions: {
      actions: [
        {
          label: 'Schedule Consultation',
          icon: 'Calendar',
          href: '#',
          variant: 'primary',
        },
        {
          label: 'Download Checklist',
          icon: 'Download',
          href: '#',
          variant: 'secondary',
        },
        {
          label: 'Request Callback',
          icon: 'Phone',
          href: '#',
          variant: 'tertiary',
        },
      ],
    },
    feesStructure: {
      message: 'Contact us to get detailed information about our competitive fee structure',
      link: {
        label: 'View Fee Details',
        href: '#',
      },
    },
  },

  // New Accreditations
  jciAccreditation: {
    hero: {
      title: 'JCI (Joint Commission International) Accreditation',
      subtitle: 'Internationally recognized accreditation for patient safety and quality of care standards.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Quality manual and patient safety protocols',
      'Clinical governance and leadership documentation',
      'Patient rights and responsibilities policies',
      'Infection prevention and control procedures',
      'Medication management and safety protocols',
      'Staff competency and training records',
    ]},
    applicationProcess: { steps: [
      { title: 'Gap Assessment', description: 'Comprehensive evaluation against JCI standards', duration: '5-7 days' },
      { title: 'Implementation', description: 'Policy development and staff training programs', duration: '3-6 months' },
      { title: 'Internal Audit', description: 'Mock survey and corrective action planning', duration: '1-2 weeks' },
      { title: 'JCI Survey', description: 'Official JCI survey and accreditation decision', duration: 'As scheduled' },
    ]},
    importantNotes: { notes: [
      'JCI accreditation is valid for 3 years with annual follow-up surveys',
      'Continuous compliance monitoring is essential for maintaining accreditation',
      'International standards require ongoing staff education and training',
    ]},
    relatedServices: { services: [
      { title: 'NABH Accreditation', description: 'National quality standards for healthcare facilities', link: '/regulatory/Accreditations/NABH/NABH%20Accreditation' },
      { title: 'ISO 9001:2015 Certification', description: 'Quality management system certification', link: '/regulatory/Accreditations/ISO/ISO%209001-2015%20Certification' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for JCI accreditation support fees and timeline', link: { label: 'View Fee Details', href: '#'} },
  },

  nabhSafeICertification: {
    hero: {
      title: 'NABH Safe-I Certification',
      subtitle: 'Specialized certification focusing on hospital infection control and patient safety.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Infection control manual and protocols',
      'Hand hygiene compliance documentation',
      'Antimicrobial stewardship policies',
      'Environmental cleaning and disinfection procedures',
      'Staff training records on infection prevention',
      'Surveillance and monitoring reports',
    ]},
    applicationProcess: { steps: [
      { title: 'Infection Control Assessment', description: 'Baseline evaluation of current practices', duration: '3-5 days' },
      { title: 'Protocol Implementation', description: 'Development and implementation of IC protocols', duration: '4-8 weeks' },
      { title: 'Staff Training', description: 'Comprehensive training on infection prevention', duration: '2-3 weeks' },
      { title: 'Certification Survey', description: 'NABH Safe-I assessment and certification', duration: 'As scheduled' },
    ]},
    importantNotes: { notes: [
      'Safe-I certification demonstrates commitment to infection prevention',
      'Regular monitoring and continuous improvement are required',
      'Staff competency in infection control must be maintained',
    ]},
    relatedServices: { services: [
      { title: 'NABH Accreditation', description: 'Comprehensive quality standards accreditation', link: '/regulatory/Accreditations/NABH/NABH%20Accreditation' },
      { title: 'AERB Radiation Safety Audit', description: 'Radiation safety compliance for radiology departments', link: '/regulatory/Safety%20%26%20Environment/AERB/AERB%20Radiation%20Safety%20Audit' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for NABH Safe-I certification support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  iso9001Certification: {
    hero: {
      title: 'ISO 9001:2015 Certification',
      subtitle: 'Quality management system standard demonstrating commitment to quality and continuous improvement.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Quality management system manual',
      'Process documentation and procedures',
      'Management review records',
      'Internal audit reports and corrective actions',
      'Customer satisfaction surveys and feedback',
      'Staff training and competency records',
    ]},
    applicationProcess: { steps: [
      { title: 'QMS Gap Analysis', description: 'Assessment of current quality management practices', duration: '3-5 days' },
      { title: 'System Implementation', description: 'Development and implementation of QMS', duration: '2-4 months' },
      { title: 'Internal Audit', description: 'Internal audit and management review', duration: '1-2 weeks' },
      { title: 'Certification Audit', description: 'ISO 9001:2015 certification audit', duration: 'As scheduled' },
    ]},
    importantNotes: { notes: [
      'ISO 9001:2015 certification is valid for 3 years with annual surveillance audits',
      'Continuous improvement and customer focus are key requirements',
      'Documented processes and procedures must be maintained',
    ]},
    relatedServices: { services: [
      { title: 'NABH Accreditation', description: 'Healthcare-specific quality standards', link: '/regulatory/Accreditations/NABH/NABH%20Accreditation' },
      { title: 'JCI Accreditation', description: 'International healthcare quality standards', link: '/regulatory/Accreditations/JCI/JCI%20Accreditation' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for ISO 9001:2015 certification support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  greenBuildingCertification: {
    hero: {
      title: 'Green Building Certification',
      subtitle: 'Environmental responsibility and sustainability certification for healthcare facilities.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Building design and construction documentation',
      'Energy efficiency and renewable energy plans',
      'Water conservation and management systems',
      'Waste management and recycling programs',
      'Indoor environmental quality assessments',
      'Sustainable material usage documentation',
    ]},
    applicationProcess: { steps: [
      { title: 'Sustainability Assessment', description: 'Evaluation of current environmental practices', duration: '5-7 days' },
      { title: 'Green Design Implementation', description: 'Implementation of sustainable building practices', duration: '3-6 months' },
      { title: 'Performance Monitoring', description: 'Monitoring and optimization of green systems', duration: '2-4 weeks' },
      { title: 'Certification Review', description: 'Green building certification assessment', duration: 'As scheduled' },
    ]},
    importantNotes: { notes: [
      'Green building certification demonstrates environmental commitment',
      'Ongoing monitoring and maintenance of green systems required',
      'Energy and water efficiency must be continuously optimized',
    ]},
    relatedServices: { services: [
      { title: 'CGWANOC', description: 'Groundwater usage compliance certification', link: '/regulatory/Safety%20%26%20Environment/Pollution%20Control%20Board/CGWANOC' },
      { title: 'Bio-Medical Waste Management Rules Compliance', description: 'Healthcare waste management compliance', link: '/regulatory/Clinic%20Compliance/Pollution%20Control%20Board/Bio-Medical%20Waste%20Management%20Rules%20Compliance' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for green building certification support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  // New Clinic Compliance Services
  pcpndtActCompliance: {
    hero: {
      title: 'PCPNDT Act Compliance',
      subtitle: 'Essential compliance for clinics offering prenatal diagnostic services to prevent sex-selective abortions.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'PCPNDT registration certificate',
      'Qualified personnel certificates and training records',
      'Equipment registration and maintenance logs',
      'Patient consent forms and counseling records',
      'Monthly reporting forms and statistics',
      'Inspection and compliance certificates',
    ]},
    applicationProcess: { steps: [
      { title: 'Registration Application', description: 'Submit PCPNDT registration application', duration: '1-2 days' },
      { title: 'Documentation Review', description: 'Health department review of submitted documents', duration: '15-30 days' },
      { title: 'Inspection', description: 'On-site inspection by health authorities', duration: '1-2 days' },
      { title: 'Registration Issuance', description: 'PCPNDT registration certificate issuance', duration: '5-10 days' },
    ]},
    importantNotes: { notes: [
      'PCPNDT registration must be renewed every 3 years',
      'Monthly reporting to health department is mandatory',
      'Strict adherence to counseling and consent procedures required',
    ]},
    relatedServices: { services: [
      { title: 'Clinic Registration', description: 'Basic health department registration', link: '/regulatory/Clinic%20Compliance/Health%20Dept./Clinic%20Registration' },
      { title: 'Clinical Establishment Act Registration', description: 'Comprehensive clinical establishment registration', link: '/regulatory/Clinic%20Compliance/Health%20Dept./Clinical%20Establishment%20Act%20Registration' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for PCPNDT Act compliance support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  bioMedicalWasteManagementRulesCompliance: {
    hero: {
      title: 'Bio-Medical Waste Management Rules Compliance',
      subtitle: 'Comprehensive compliance with biomedical waste management regulations for healthcare facilities.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Biomedical waste management plan',
      'Waste segregation and handling procedures',
      'Staff training records on waste management',
      'Waste collection and disposal contracts',
      'Monitoring and reporting documentation',
      'Pollution control board consent and renewals',
    ]},
    applicationProcess: { steps: [
      { title: 'Waste Management Plan', description: 'Development of comprehensive waste management plan', duration: '1-2 weeks' },
      { title: 'Staff Training', description: 'Training of all staff on waste segregation and handling', duration: '2-3 days' },
      { title: 'System Implementation', description: 'Implementation of waste management systems', duration: '2-4 weeks' },
      { title: 'Compliance Audit', description: 'Internal audit and regulatory compliance verification', duration: '1-2 days' },
    ]},
    importantNotes: { notes: [
      'Regular training of all healthcare staff is mandatory',
      'Waste segregation at source is critical for compliance',
      'Monthly reporting to pollution control board required',
    ]},
    relatedServices: { services: [
      { title: 'Biomedical Waste Authorization', description: 'Basic biomedical waste handling authorization', link: '/regulatory/Clinic%20Compliance/Pollution%20Control%20Board/Biomedical%20Waste%20Authorization' },
      { title: 'Green Building Certification', description: 'Environmental sustainability certification', link: '/regulatory/Accreditations/Green/Green%20Building%20Certification' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for biomedical waste management compliance support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  narcoticsPsychotropicSubstancesActCompliance: {
    hero: {
      title: 'Narcotics and Psychotropic Substances Act Compliance',
      subtitle: 'Essential compliance for facilities that prescribe or dispense controlled substances.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Narcotics license application and supporting documents',
      'Qualified medical practitioner certificates',
      'Secure storage facility documentation',
      'Prescription and dispensing records',
      'Inventory management and reporting systems',
      'Staff training records on controlled substances',
    ]},
    applicationProcess: { steps: [
      { title: 'License Application', description: 'Submit narcotics license application to drugs control', duration: '1-2 days' },
      { title: 'Documentation Review', description: 'Drugs control department review of application', duration: '30-45 days' },
      { title: 'Inspection', description: 'On-site inspection of storage and handling facilities', duration: '1-2 days' },
      { title: 'License Issuance', description: 'Narcotics license issuance and compliance setup', duration: '5-10 days' },
    ]},
    importantNotes: { notes: [
      'Narcotics license must be renewed annually',
      'Strict record-keeping and reporting requirements',
      'Secure storage and handling protocols are mandatory',
    ]},
    relatedServices: { services: [
      { title: 'Drug License', description: 'General drug dispensing license', link: '/regulatory/Clinic%20Licenses/Drugs%20Control/Drug%20License' },
      { title: 'Drug Inventory Management', description: 'Pharmacy inventory management compliance', link: '/regulatory/Pharmacy%20Compliance/Inventory/Drug%20Inventory%20Management' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for narcotics and psychotropic substances compliance support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  clinicalEstablishmentActRegistration: {
    hero: {
      title: 'Clinical Establishment Act Registration',
      subtitle: 'Fundamental registration required for all clinical establishments in many regions.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Clinical establishment registration application',
      'Medical practitioner qualifications and certificates',
      'Infrastructure and facility documentation',
      'Staff qualifications and training records',
      'Equipment and technology specifications',
      'Quality assurance and patient safety protocols',
    ]},
    applicationProcess: { steps: [
      { title: 'Application Submission', description: 'Submit clinical establishment registration application', duration: '1-2 days' },
      { title: 'Documentation Review', description: 'Health department review of submitted documents', duration: '30-45 days' },
      { title: 'Inspection', description: 'On-site inspection of clinical establishment', duration: '1-2 days' },
      { title: 'Registration Issuance', description: 'Clinical establishment registration certificate', duration: '5-10 days' },
    ]},
    importantNotes: { notes: [
      'Clinical establishment registration must be renewed every 5 years',
      'Compliance with minimum standards is mandatory',
      'Regular reporting and quality monitoring required',
    ]},
    relatedServices: { services: [
      { title: 'Clinic Registration', description: 'Basic health department registration', link: '/regulatory/Clinic%20Compliance/Health%20Dept./Clinic%20Registration' },
      { title: 'NABH Accreditation', description: 'Quality standards accreditation', link: '/regulatory/Accreditations/NABH/NABH%20Accreditation' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for clinical establishment act registration support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  fireSafetyRegulations: {
    hero: {
      title: 'Fire Safety Regulations',
      subtitle: 'Comprehensive fire safety compliance and audit services for healthcare facilities.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Fire safety plan and emergency procedures',
      'Fire detection and suppression system documentation',
      'Fire safety equipment maintenance records',
      'Staff training records on fire safety',
      'Emergency evacuation plans and drills',
      'Fire department inspection reports',
    ]},
    applicationProcess: { steps: [
      { title: 'Fire Safety Assessment', description: 'Comprehensive fire safety risk assessment', duration: '2-3 days' },
      { title: 'System Installation', description: 'Installation and testing of fire safety systems', duration: '2-4 weeks' },
      { title: 'Staff Training', description: 'Fire safety training for all staff members', duration: '1-2 days' },
      { title: 'Compliance Certification', description: 'Fire department inspection and certification', duration: '1-2 days' },
    ]},
    importantNotes: { notes: [
      'Regular fire safety drills and training are mandatory',
      'Fire safety equipment must be maintained and tested regularly',
      'Emergency evacuation procedures must be clearly displayed',
    ]},
    relatedServices: { services: [
      { title: 'Fire N.O.C. (Hospital/Clinic)', description: 'Fire department no objection certificate', link: '/regulatory/Safety%20%26%20Environment/Fire%20Dept./Fire%20N.O.C.%20(Hospital%2FClinic)' },
      { title: 'AERB Radiation Safety Audit', description: 'Radiation safety compliance audit', link: '/regulatory/Safety%20%26%20Environment/AERB/AERB%20Radiation%20Safety%20Audit' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for fire safety regulations compliance support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  aerbDecommissioning: {
    hero: {
      title: 'AERB Decommissioning',
      subtitle: 'Specialized compliance service for facilities with radiology equipment - formal process of safely taking radiological units out of service.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'AERB decommissioning application',
      'Radiological equipment inventory and history',
      'Radiation safety officer certification',
      'Decommissioning plan and procedures',
      'Waste disposal and clearance certificates',
      'Final radiation survey reports',
    ]},
    applicationProcess: { steps: [
      { title: 'Decommissioning Plan', description: 'Development of comprehensive decommissioning plan', duration: '1-2 weeks' },
      { title: 'AERB Application', description: 'Submit decommissioning application to AERB', duration: '1-2 days' },
      { title: 'Equipment Removal', description: 'Safe removal and disposal of radiological equipment', duration: '2-4 weeks' },
      { title: 'Clearance Certificate', description: 'AERB clearance certificate and final documentation', duration: '1-2 weeks' },
    ]},
    importantNotes: { notes: [
      'AERB decommissioning must be performed by qualified personnel',
      'Proper disposal of radioactive materials is mandatory',
      'Final radiation survey must show no contamination',
    ]},
    relatedServices: { services: [
      { title: 'AERB Registration (Radiology)', description: 'Initial radiology equipment registration', link: '/regulatory/Clinic%20Licenses/AERB/AERB%20Registration%20(Radiology)' },
      { title: 'AERB Radiation Safety Audit', description: 'Ongoing radiation safety compliance', link: '/regulatory/Safety%20%26%20Environment/AERB/AERB%20Radiation%20Safety%20Audit' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for AERB decommissioning support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  dataPrivacyHipaaCompliance: {
    hero: {
      title: 'Data Privacy and HIPAA Compliance',
      subtitle: 'Critical compliance for protecting patient information in digital health records and systems.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Data privacy policy and procedures manual',
      'Patient consent forms and data handling agreements',
      'IT security protocols and access controls',
      'Staff training records on data privacy',
      'Data breach response and notification procedures',
      'Regular security audit and assessment reports',
    ]},
    applicationProcess: { steps: [
      { title: 'Privacy Assessment', description: 'Comprehensive data privacy and security assessment', duration: '3-5 days' },
      { title: 'Policy Development', description: 'Development of data privacy policies and procedures', duration: '2-3 weeks' },
      { title: 'System Implementation', description: 'Implementation of security controls and monitoring', duration: '3-6 weeks' },
      { title: 'Compliance Audit', description: 'Internal audit and compliance verification', duration: '1-2 weeks' },
    ]},
    importantNotes: { notes: [
      'Regular staff training on data privacy is mandatory',
      'Data breach notification procedures must be in place',
      'Ongoing monitoring and security updates required',
    ]},
    relatedServices: { services: [
      { title: 'IT & Cybersecurity Services', description: 'Comprehensive IT security services', link: '/services/it-cybersecurity-services' },
      { title: 'Technology Solutions', description: 'Healthcare technology implementation', link: '/services/technology-solutions' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for data privacy and HIPAA compliance support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  // New Safety & Environment Services
  aerbRadiationSafetyAudit: {
    hero: {
      title: 'AERB Radiation Safety Audit',
      subtitle: 'Crucial service for hospitals with radiology departments, ensuring compliance with radiation safety protocols.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'AERB registration and license documents',
      'Radiation safety officer appointment and certification',
      'Equipment calibration and maintenance records',
      'Staff training records on radiation safety',
      'Radiation monitoring and dosimetry reports',
      'Safety protocols and emergency procedures',
    ]},
    applicationProcess: { steps: [
      { title: 'Safety Assessment', description: 'Comprehensive radiation safety assessment', duration: '2-3 days' },
      { title: 'Protocol Implementation', description: 'Implementation of radiation safety protocols', duration: '2-4 weeks' },
      { title: 'Staff Training', description: 'Radiation safety training for all relevant staff', duration: '1-2 days' },
      { title: 'AERB Audit', description: 'Official AERB radiation safety audit', duration: '1-2 days' },
    ]},
    importantNotes: { notes: [
      'Regular radiation safety audits are mandatory for AERB compliance',
      'Staff must be trained and certified in radiation safety',
      'Equipment must be regularly calibrated and maintained',
    ]},
    relatedServices: { services: [
      { title: 'AERB Registration (Radiology)', description: 'Initial radiology equipment registration', link: '/regulatory/Clinic%20Licenses/AERB/AERB%20Registration%20(Radiology)' },
      { title: 'AERB Decommissioning', description: 'Safe decommissioning of radiological equipment', link: '/regulatory/Clinic%20Compliance/AERB/AERB%20Decommissioning' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for AERB radiation safety audit support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  cgwanoc: {
    hero: {
      title: 'CGWANOC (Central Ground Water Authority No Objection Certificate)',
      subtitle: 'Essential environmental clearance for facilities that use groundwater resources.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'CGWANOC application form and supporting documents',
      'Groundwater usage assessment and impact study',
      'Water conservation and management plan',
      'Environmental impact assessment report',
      'Water quality testing and monitoring reports',
      'Compliance with water usage regulations',
    ]},
    applicationProcess: { steps: [
      { title: 'Application Submission', description: 'Submit CGWANOC application to CGWA', duration: '1-2 days' },
      { title: 'Impact Assessment', description: 'Groundwater impact assessment and review', duration: '30-45 days' },
      { title: 'Public Hearing', description: 'Public consultation and hearing process', duration: '15-30 days' },
      { title: 'Certificate Issuance', description: 'CGWANOC certificate issuance', duration: '10-15 days' },
    ]},
    importantNotes: { notes: [
      'CGWANOC must be renewed every 5 years',
      'Regular monitoring of groundwater usage is required',
      'Compliance with water conservation measures is mandatory',
    ]},
    relatedServices: { services: [
      { title: 'Green Building Certification', description: 'Environmental sustainability certification', link: '/regulatory/Accreditations/Green/Green%20Building%20Certification' },
      { title: 'Bio-Medical Waste Management Rules Compliance', description: 'Healthcare waste management compliance', link: '/regulatory/Clinic%20Compliance/Pollution%20Control%20Board/Bio-Medical%20Waste%20Management%20Rules%20Compliance' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for CGWANOC support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  // New Laboratory Compliance Services
  laboratoryEquipmentCalibration: {
    hero: {
      title: 'Laboratory Equipment Calibration',
      subtitle: 'Essential calibration services for laboratory equipment to ensure accurate test results and compliance.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Equipment inventory and specifications',
      'Calibration certificates and maintenance records',
      'Quality control procedures and protocols',
      'Staff training records on equipment operation',
      'Calibration schedule and tracking system',
      'Non-conformance and corrective action reports',
    ]},
    applicationProcess: { steps: [
      { title: 'Equipment Assessment', description: 'Assessment of all laboratory equipment', duration: '2-3 days' },
      { title: 'Calibration Schedule', description: 'Development of calibration schedule and procedures', duration: '1-2 weeks' },
      { title: 'Calibration Execution', description: 'Professional calibration of all equipment', duration: '1-2 weeks' },
      { title: 'Documentation', description: 'Calibration certificates and compliance documentation', duration: '3-5 days' },
    ]},
    importantNotes: { notes: [
      'Regular calibration is mandatory for accurate test results',
      'Calibration certificates must be maintained and updated',
      'Equipment must be calibrated before use and at regular intervals',
    ]},
    relatedServices: { services: [
      { title: 'NABL Accreditation', description: 'Laboratory quality standards accreditation', link: '/regulatory/Accreditations/NABL/NABL%20Accreditation' },
      { title: 'Quality Control Protocols', description: 'Laboratory quality control procedures', link: '/regulatory/Laboratory%20Compliance/Quality/Quality%20Control%20Protocols' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for laboratory equipment calibration support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  qualityControlProtocols: {
    hero: {
      title: 'Quality Control Protocols',
      subtitle: 'Comprehensive quality control procedures and protocols for laboratory operations.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Quality control manual and procedures',
      'Standard operating procedures (SOPs)',
      'Quality control charts and monitoring records',
      'Staff competency and training records',
      'Non-conformance and corrective action reports',
      'Internal audit and review documentation',
    ]},
    applicationProcess: { steps: [
      { title: 'Protocol Development', description: 'Development of quality control protocols', duration: '2-3 weeks' },
      { title: 'Staff Training', description: 'Training of laboratory staff on QC procedures', duration: '1-2 weeks' },
      { title: 'Implementation', description: 'Implementation of quality control systems', duration: '2-4 weeks' },
      { title: 'Monitoring', description: 'Ongoing monitoring and continuous improvement', duration: 'Ongoing' },
    ]},
    importantNotes: { notes: [
      'Quality control protocols must be followed consistently',
      'Regular monitoring and review of QC procedures required',
      'Staff must be trained and competent in QC procedures',
    ]},
    relatedServices: { services: [
      { title: 'NABL Accreditation', description: 'Laboratory quality standards accreditation', link: '/regulatory/Accreditations/NABL/NABL%20Accreditation' },
      { title: 'Testing Protocol Compliance', description: 'Laboratory testing protocol compliance', link: '/regulatory/Laboratory%20Compliance/Protocols/Testing%20Protocol%20Compliance' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for quality control protocols support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  testingProtocolCompliance: {
    hero: {
      title: 'Testing Protocol Compliance',
      subtitle: 'Compliance with laboratory testing protocols and regulatory requirements.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Testing protocol documentation and SOPs',
      'Method validation and verification records',
      'Proficiency testing and inter-laboratory comparison',
      'Staff competency and training records',
      'Test result documentation and reporting',
      'Quality assurance and audit reports',
    ]},
    applicationProcess: { steps: [
      { title: 'Protocol Review', description: 'Review of existing testing protocols', duration: '1-2 weeks' },
      { title: 'Compliance Assessment', description: 'Assessment against regulatory requirements', duration: '2-3 days' },
      { title: 'Protocol Updates', description: 'Updates and improvements to testing protocols', duration: '2-3 weeks' },
      { title: 'Implementation', description: 'Implementation of updated protocols', duration: '1-2 weeks' },
    ]},
    importantNotes: { notes: [
      'Testing protocols must comply with regulatory standards',
      'Regular validation and verification of methods required',
      'Staff must be trained on updated protocols',
    ]},
    relatedServices: { services: [
      { title: 'NABL Accreditation', description: 'Laboratory quality standards accreditation', link: '/regulatory/Accreditations/NABL/NABL%20Accreditation' },
      { title: 'Quality Control Protocols', description: 'Laboratory quality control procedures', link: '/regulatory/Laboratory%20Compliance/Quality/Quality%20Control%20Protocols' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for testing protocol compliance support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  // New Pharmacy Compliance Services
  drugInventoryManagement: {
    hero: {
      title: 'Drug Inventory Management',
      subtitle: 'Comprehensive drug inventory management systems for hospital pharmacies.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Drug inventory management system documentation',
      'Stock control and monitoring procedures',
      'Purchase and procurement records',
      'Storage and handling protocols',
      'Staff training records on inventory management',
      'Audit and reconciliation reports',
    ]},
    applicationProcess: { steps: [
      { title: 'System Assessment', description: 'Assessment of current inventory management', duration: '2-3 days' },
      { title: 'System Design', description: 'Design of comprehensive inventory management system', duration: '1-2 weeks' },
      { title: 'Implementation', description: 'Implementation of inventory management system', duration: '2-4 weeks' },
      { title: 'Training', description: 'Staff training on new inventory management procedures', duration: '1-2 weeks' },
    ]},
    importantNotes: { notes: [
      'Regular inventory audits and reconciliation required',
      'Proper storage and handling of medications is critical',
      'Staff must be trained on inventory management procedures',
    ]},
    relatedServices: { services: [
      { title: 'Drug License', description: 'Drug dispensing license', link: '/regulatory/Clinic%20Licenses/Drugs%20Control/Drug%20License' },
      { title: 'Expiry Date Management', description: 'Medication expiry date management', link: '/regulatory/Pharmacy%20Compliance/Inventory/Expiry%20Date%20Management' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for drug inventory management support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  expiryDateManagement: {
    hero: {
      title: 'Expiry Date Management',
      subtitle: 'Systematic management of medication expiry dates to ensure patient safety and regulatory compliance.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Expiry date tracking system documentation',
      'Medication rotation and disposal procedures',
      'Staff training records on expiry date management',
      'Audit and monitoring reports',
      'Disposal certificates and documentation',
      'Patient safety protocols and procedures',
    ]},
    applicationProcess: { steps: [
      { title: 'System Setup', description: 'Setup of expiry date tracking system', duration: '1-2 weeks' },
      { title: 'Procedure Development', description: 'Development of expiry date management procedures', duration: '1-2 weeks' },
      { title: 'Staff Training', description: 'Training of pharmacy staff on expiry date management', duration: '1-2 days' },
      { title: 'Implementation', description: 'Implementation of expiry date management system', duration: '2-3 weeks' },
    ]},
    importantNotes: { notes: [
      'Regular monitoring of medication expiry dates is mandatory',
      'Proper disposal of expired medications is required',
      'Staff must be trained on expiry date management procedures',
    ]},
    relatedServices: { services: [
      { title: 'Drug Inventory Management', description: 'Comprehensive drug inventory management', link: '/regulatory/Pharmacy%20Compliance/Inventory/Drug%20Inventory%20Management' },
      { title: 'Drug Dispensing Laws Compliance', description: 'Pharmacy legal compliance', link: '/regulatory/Pharmacy%20Compliance/Legal/Drug%20Dispensing%20Laws%20Compliance' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for expiry date management support fees', link: { label: 'View Fee Details', href: '#'} },
  },

  drugDispensingLawsCompliance: {
    hero: {
      title: 'Drug Dispensing Laws Compliance',
      subtitle: 'Compliance with drug dispensing laws and regulations for hospital pharmacies.',
      backgroundImage: '/imgs/factory-license-bg.jpg',
    },
    requiredDocs: { documents: [
      'Drug dispensing license and permits',
      'Prescription handling and verification procedures',
      'Staff qualifications and training records',
      'Drug dispensing records and documentation',
      'Compliance monitoring and audit reports',
      'Legal and regulatory update documentation',
    ]},
    applicationProcess: { steps: [
      { title: 'Compliance Assessment', description: 'Assessment of current drug dispensing compliance', duration: '2-3 days' },
      { title: 'Procedure Updates', description: 'Updates to drug dispensing procedures', duration: '1-2 weeks' },
      { title: 'Staff Training', description: 'Training on drug dispensing laws and regulations', duration: '1-2 days' },
      { title: 'Implementation', description: 'Implementation of compliant drug dispensing procedures', duration: '2-3 weeks' },
    ]},
    importantNotes: { notes: [
      'Strict adherence to drug dispensing laws is mandatory',
      'Regular training on legal requirements is required',
      'Proper documentation and record-keeping is essential',
    ]},
    relatedServices: { services: [
      { title: 'Drug License', description: 'Drug dispensing license', link: '/regulatory/Clinic%20Licenses/Drugs%20Control/Drug%20License' },
      { title: 'Narcotics and Psychotropic Substances Act Compliance', description: 'Controlled substances compliance', link: '/regulatory/Clinic%20Compliance/Drugs%20Control/Narcotics%20and%20Psychotropic%20Substances%20Act%20Compliance' },
    ]},
    quickActions: { actions: [
      { label: 'Schedule Consultation', icon: 'Calendar', href: '#', variant: 'primary' },
      { label: 'Download Checklist', icon: 'Download', href: '#', variant: 'secondary' },
      { label: 'Request Callback', icon: 'Phone', href: '#', variant: 'tertiary' },
    ]},
    feesStructure: { message: 'Contact us for drug dispensing laws compliance support fees', link: { label: 'View Fee Details', href: '#'} },
  },
};