"use client";
import React, { useState } from "react";
import { Building2, ClipboardList, BadgeCheck, Briefcase, FileText, Package, Leaf, Users, ShieldCheck, Globe, Award, Target, BarChart2, RefreshCw, Droplets, ArrowRight } from "lucide-react";
import Link from "next/link";

const stages = [
  {
    label: "Pre-Establishment Stage",
    value: "pre-establishment",
    icon: ClipboardList,
  },
  {
    label: "Pre-Operational Stage",
    value: "pre-operational",
    icon: Building2,
  },
  {
    label: "Post-Commissioning Stage (Annual Renewal Stage)",
    value: "post-commissioning",
    icon: BadgeCheck,
  },
];

// Example data structure for departments and services (fill with real data as needed)
const regulatoryData = {
  "pre-establishment": [
    {
      department: "Labour Dept.",
      icon: Briefcase,
      services: [
        {
          title: "Principal Employer Registration",
          desc: "Establishment PAN, proof of business address, list of contract employees, and work details (site, nature of contract etc.) and a duly filled application.",
          link: "/regulatory/Pre-Establishment%20Stage/Labour%20Dept./Principal%20Employer%20Registration",
        },
        {
          title: "BOCW Registration",
          desc: "Identity proof of the employer (Aadhar card, establishment address proof, electricity bill, site agreement, details of site contractors etc., number...",
          link: "/regulatory/Pre-Establishment%20Stage/Labour%20Dept./BOCW%20Registration",
        },
      ],
    },
    {
      department: "Factory Department",
      icon: Package,
      services: [
        {
          title: "Site Plan Approval",
          desc: "A detailed site plan with elevation and cross-sections, proof of land ownership (land document), a construction timeline for the factory, process flow...",
          link: "/regulatory/Pre-Establishment%20Stage/Factory%20Department/Site%20Plan%20Approval",
        },
        {
          title: "Stability Certificate",
          desc: "A Certificate of Stability issued by a qualified structural engineer, along with documents like detailed factory plan, site plans, proof of land...",
          link: "/regulatory/Pre-Establishment%20Stage/Factory%20Department/Stability%20Certificate",
        },
      ],
    },
    {
      department: "DIC-Office",
      icon: FileText,
      services: [
        {
          title: "Registration of Entrepreneur Memorandum",
          desc: "To register an Entrepreneur Memorandum (EM) under the District Industries Center (DIC), you typically need documents like Aadhaar card, PAN card, business...",
          link: "/regulatory/Pre-Establishment%20Stage/DIC-Office/Registration%20of%20Enterpreneur%20Memorandum",
        },
        {
          title: "Approval of Mega Project",
          desc: "For approval of mega projects, the required documents typically include project feasibility study, detailed project report (DPR), land ownership...",
          link: "/regulatory/Pre-Establishment%20Stage/DIC-Office/Approval%20of%20Mega%20Project",
        },
      ],
    },
    {
      department: "PCB-Dept.",
      icon: Leaf,
      services: [
        {
          title: "Consent to Establish (Under Green/Orange/Red Categary)",
          desc: "To apply for a Consent to Establish (CTE), you typically need documents like land lease deed, detailed project report, site plan, and a detailed pollution...",
          link: "/regulatory/Pre-Establishment%20Stage/PCB-Dept./Consent%20to%20Establish%20(Under%20Green%2FOrange%2FRed%20Categary)",
        },
        {
          title: "Environment Clearance Certificate (State/Central)",
          desc: "To obtain an Environment Clearance Certificate (ECC) at the state or central level, you typically need environment site details, a detailed project description, site...",
          link: "/regulatory/Pre-Establishment%20Stage/PCB-Dept./Environment%20Clearance%20Certificate%20(State%2FCentral)",
        },
      ],
    },
    {
      department: "Fire-Dept.",
      icon: Droplets,
      services: [
        {
          title: "Provisional Fire N.O.C.",
          desc: "To obtain a provisional Fire N.O.C., typically you will need a sanctioned building plan, fire system installation plan, fire NOC application, site photos, etc.",
          link: "/regulatory/Pre-Establishment%20Stage/Fire-Dept./Provisional%20Fire%20N.O.C.",
        },
      ],
    },
  ],
  "pre-operational": [
    {
      department: "Municipal Local Authority",
      icon: ShieldCheck,
      services: [
        {
          title: "Trade License",
          desc: "To apply for a trade license, you typically need to submit basic identity proof (Aadhaar card), address proof (lease deed or rent agreement), property tax...",
          link: "/regulatory/Pre-Operational%20Stage/Municipal%20Local%20Authority/Trade%20License",
        },
      ],
    },
    {
      department: "Factory Dept.",
      icon: Package,
      services: [
        {
          title: "Factory License under Factories Act: 1948",
          desc: "To apply for a factory license, you typically need proof of electricity bill, all rental agreements, pollution consents...",
          link: "/regulatory/Pre-Operational%20Stage/Factory%20Dept./Factory%20License%20under%20Factories%20Act-1948",
        },
      ],
    },
    {
      department: "Labour-Dept.",
      icon: Briefcase,
      services: [
        {
          title: "RC under CLRA Act: 1970",
          desc: "Establishment PAN card, proof of business address, list of assigned contract workers (name & details), details of contract labor employment, and a duly filled application...",
          link: "/regulatory/Post-Commissioning%20Stage%20(Annual%20Renewal%20Stage)/Labour-Dept./RC%20under%20CLRA%20Act-1970",
        },
      ],
    },
    {
      department: "PCB-Dept.",
      icon: Leaf,
      services: [
        {
          title: "Consent to Operate (CTO-CCA)",
          desc: "The documents required for a Consent to Operate (CTO) vary as per state and type of business. In general, you'll need an application form, proof of...",
          link: "/regulatory/Pre-Operational%20Stage/PCB-Dept./Consent%20to%20Operate%20(CTO-CCA)",
        },
      ],
    },
    {
      department: "EPF & ESIC Dept.",
      icon: Users,
      services: [
        {
          title: "EPF Code Registration",
          desc: "For EPF registration: Submit documents (Certificate of registration, entity PAN, and list of employees/partners), trust deed, proof of registered office, Certificate of...",
          link: "/regulatory/Pre-Operational%20Stage/EPF%20%26%20ESIC%20Dept./EPF%20Code%20Registration",
        },
        {
          title: "ESIC Code Registration",
          desc: "For ESIC registration: Submit documents (Certificate of registration, MoA, AoA, shareholding detail, GST registration), Employee documents (PAN cards)...",
          link: "/regulatory/Pre-Operational%20Stage/EPF%20%26%20ESIC%20Dept./ESIC%20Code%20Registration",
        },
      ],
    },
    {
      department: "Fire Dept. & Explosive Dept.",
      icon: Droplets,
      services: [
        {
          title: "Fire N.O.C. (Operational)",
          desc: "For fire NOC (operational), submit sanctioned building plan, fire system installation plan, fire NOC application, site photos, etc.",
          link: "/regulatory/Pre-Operational%20Stage/Fire%20Dept.%20%26%20Explosive%20Dept./Fire%20N.O.C.%20(Operational)",
        },
        {
          title: "LPG/Solvent Storage License",
          desc: "For storage license/registration: Form, detailed site plan, NOC from local authorities, fire and explosive department NOC, photographs, lease deed, etc.",
          link: "/regulatory/Pre-Operational%20Stage/Fire%20Dept.%20%26%20Explosive%20Dept./LPG%2FSolvent%20Storage%20License",
        },
        {
          title: "Explosive/HSD Storage License",
          desc: "Details for LPG/Solvent Storage License: requirements with technical specifications for HSD storage.",
          link: "/regulatory/Pre-Operational%20Stage/Fire%20Dept.%20%26%20Explosive%20Dept./Explosive%2FHSD%20Storage%20License",
        },
      ],
    },
    {
      department: "Weight & Measurement",
      icon: Target,
      services: [
        {
          title: "Weight & Measurement Registration",
          desc: "Required documents: PAN card copy, Business registration proof, Premises documentation, Business constitution documents, Authorized signatory...",
          link: "/regulatory/Pre-Operational%20Stage/Weight%20%26%20Measurement/Weight%20%26%20Measurement%20Registration",
        },
      ],
    },
    {
      department: "PCRO",
      icon: FileText,
      services: [
        {
          title: "Pack Size Approval",
          desc: "Required documents: Company registration details (Certificate of Incorporation), business address proof, GST registration certificate, PAN card, packaged...",
          link: "/regulatory/Pre-Operational%20Stage/PCRO/Pack%20Size%20Approval",
        },
      ],
    },
  ],
  "post-commissioning": [
    {
      department: "Factory Dept.",
      icon: Package,
      services: [
        {
          title: "Factory License under Factories Act",
          desc: "Required documents: Owner ID and address proof, factory premises proof, pollution department consent, NOCs from fire and water departments, business PAN...",
          link: "/regulatory/Post-Commissioning%20Stage%20(Annual%20Renewal%20Stage)/Factory%20Dept./Factory%20License%20under%20Factories%20Act",
        },
      ],
    },
    {
      department: "Labour-Dept.",
      icon: Briefcase,
      services: [
        {
          title: "RC under CLRA Act-1970",
          desc: "Required documents: Establishment PAN card, business address proof, contractor list with contact details, contract labor employment details, and...",
          link: "/regulatory/Post-Commissioning%20Stage%20(Annual%20Renewal%20Stage)/Labour-Dept./RC%20under%20CLRA%20Act-1970",
        },
      ],
    },
    {
      department: "Boiler-Dept.",
      icon: Globe,
      services: [
        {
          title: "Boiler Renewal under IBR Act",
          desc: "Required documents: Forwarding letter, completed application form, trade license copy, lease/tenancy deed copy, photo ID proof, machinery list, and...",
          link: "/regulatory/Post-Commissioning%20Stage%20(Annual%20Renewal%20Stage)/Boiler-Dept./Boiler%20Renewal%20under%20IBR%20Act",
        },
      ],
    },
    {
      department: "Fire Dept. & Explosive Dept.",
      icon: Droplets,
      services: [
        {
          title: "Fire N.O.C. (Annual Clearance)",
          desc: "Required documents: Original Fire NOC, renewal application form, ownership proof, updated building plans, payment receipt, fire safety equipment...",
          link: "/regulatory/Post-Commissioning%20Stage%20(Annual%20Renewal%20Stage)/Fire%20Dept.%20%26%20Explosive%20Dept./Fire%20N.O.C.%20(Annual%20Clearance)",
        },
        {
          title: "LPG/Solvent Storage License",
          desc: "Required documents for PESO: Form RE-1 (renewal application), original license/certificate, approved plans and schedules, renewal fee bank draft, and...",
          link: "/regulatory/Post-Commissioning%20Stage%20(Annual%20Renewal%20Stage)/Fire%20Dept.%20%26%20Explosive%20Dept./LPG%2FSolvent%20Storage%20License",
        },
        {
          title: "Explosive/HSD Storage License",
          desc: "Similar to LPG/Solvent Storage License renewal requirements with specific documentation for HSD storage.",
          link: "/regulatory/Post-Commissioning%20Stage%20(Annual%20Renewal%20Stage)/Fire%20Dept.%20%26%20Explosive%20Dept./Explosive%2FHSD%20Storage%20License",
        },
      ],
    },
    {
      department: "PCB-Dept.",
      icon: Leaf,
      services: [
        {
          title: "Consent to Operate (CTO-CCA)",
          desc: "Required documents: Compliance report, analysis reports (effluent, emissions, stack), financial documents, production capacity details, management...",
          link: "/regulatory/Post-Commissioning%20Stage%20(Annual%20Renewal%20Stage)/PCB-Dept./Consent%20to%20Operate%20(CTO-CCA)",
        },
      ],
    },
    {
      department: "Weight & Measurement",
      icon: Target,
      services: [
        {
          title: "Weight & Measurement Registration",
          desc: "Required documents: Premises proof (sale deed/lease deed), rent receipt/owner NOC, firm's constitution documents, sales statement, site plan, sales tax...",
          link: "/regulatory/Post-Commissioning%20Stage%20(Annual%20Renewal%20Stage)/Weight%20%26%20Measurement/Weight%20%26%20Measurement%20Registration",
        },
      ],
    },
  ],
};

export default function TabbedComp2() {
  const [active, setActive] = useState(stages[0].value);
  const departments = regulatoryData[active] || [];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 font-tangent">Regulatory Services</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-3xl">Navigate the complex landscape of regulatory compliance with our expert guidance and comprehensive documentation support.</p>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {stages.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors border-2 focus:outline-none
              ${active === tab.value
                ? "bg-eco-green-4 text-white border-eco-green-4"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-eco-green-1/10 dark:hover:bg-eco-green-3/10"}
            `}
          >
            <tab.icon className="inline mr-2" size={18} />
            {tab.label}
          </button>
        ))}
      </div>
      {/* Departments and Services */}
      <div className="flex flex-col gap-8">
        {departments.map((dept) => (
          <div key={dept.department} className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <dept.icon className="text-eco-green-4" size={22} />
              <span className="font-bold text-lg text-gray-900 dark:text-white">{dept.department}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dept.services.map((srv) => (
                <div key={srv.title} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 flex flex-col justify-between min-h-[120px]">
                  <div>
                    <h4 className="font-semibold text-base text-gray-900 dark:text-white mb-1">{srv.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{srv.desc}</p>
                  </div>
                  <Link href={srv.link} legacyBehavior passHref>
                    <a className="text-eco-green-4 font-semibold text-sm flex items-center gap-1 hover:underline w-fit" aria-label={`View details for ${srv.title}`}>View Details <ArrowRight size={16} /></a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 