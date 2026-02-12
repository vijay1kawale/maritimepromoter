import { Calendar, Phone, CheckCircle, Package, Bookmark, BookOpen, BarChart2, FileText, Users, ArrowRight, LineChart, Circle, Award, TrendingUp } from "lucide-react";

export const reportingContent = {
  brsr: {
    hero: {
      title: "BRSR Reporting",
      subtitle:
        "Holistic Business Responsibility and Sustainability Reporting for strategic regulatory compliance and enhanced stakeholder transparency.",
      buttons: [
        {
          label: "Schedule Consultation",
          icon: Calendar,
          variant: "primary",
          href: "#",
        },
        {
          label: "Request Callback",
          icon: Phone,
          variant: "primary",
          href: "#",
        },
      ],
    },
    whatIs: {
      title: "What is BRSR?",
      description: [
        "Business Responsibility and Sustainability Report (BRSR) is a comprehensive Healthcare reporting framework established by the Securities and Exchange Board of India (SEBI) to strengthen disclosure on environmental, social, and governance parameters. It represents a significant evolution from the previous Business Responsibility Report (BRR) format.",
        "BRSR is mandatory for the top 1,000 listed companies by market capitalization in India and is designed to align with global sustainability frameworks while addressing India-specific sustainability contexts."
      ],
      link: { href: '#', label: "Learn more about SEBI's BRSR mandate" }
    },
    principles: {
      title: "The 9 Principles of BRSR",
      subtitle: "BRSR is structured around nine principles that encompass the fundamental aspects of business responsibility and sustainability.",
      features: [
        {
          icon: Circle,
          number: 1,
          title: "Ethics & Transparency",
          desc: "Businesses should conduct and govern themselves with integrity in a manner that is ethical, transparent, and accountable.",
        },
        {
          icon: Circle,
          number: 2,
          title: "Safety & Sustainability",
          desc: "Businesses should provide goods and services in a manner that is sustainable and safe.",
        },
        {
          icon: Circle,
          number: 3,
          title: "Employee Well-being",
          desc: "Businesses should respect and promote the well-being of all employees, including those in their value chains.",
        },
        {
          icon: Circle,
          number: 4,
          title: "Stakeholder Engagement",
          desc: "Businesses should respect the interests of and be responsive to all its stakeholders.",
        },
        {
          icon: Circle,
          number: 5,
          title: "Human Rights",
          desc: "Businesses should respect and promote human rights.",
        },
        {
          icon: Circle,
          number: 6,
          title: "Environment",
          desc: "Businesses should respect, protect, and make efforts to restore the environment.",
        },
        {
          icon: Circle,
          number: 7,
          title: "Regulatory Policy",
          desc: "Businesses, when engaging in influencing public and regulatory policy, should do so in a manner that is responsible and transparent.",
        },
        {
          icon: Circle,
          number: 8,
          title: "Inclusive Growth",
          desc: "Businesses should promote inclusive growth and equitable development.",
        },
        {
          icon: Circle,
          number: 9,
          title: "Customer Value",
          desc: "Businesses should engage with and provide value to their consumers in a responsible manner.",
        },
      ],
    },
    process: {
      title: "Our BRSR Reporting Process",
      subtitle: "A systematic methodology to ensure comprehensive and compliant BRSR reporting",
      features: [
        {
          number: 1,
          title: "Assessment & Strategy",
          bullets: [
            "Gap analysis against BRSR requirements",
            "Materiality assessment",
            "Data management strategy",
            "Stakeholder engagement planning",
          ],
        },
        {
          number: 2,
          title: "Data Collection & Management",
          bullets: [
            "Data collection across Healthcare metrics",
            "Policy and practice documentation",
            "Information validation",
            "KPI development and tracking",
          ],
        },
        {
          number: 3,
          title: "Report Development",
          bullets: [
            "BRSR section drafting",
            "Compliance verification",
            "Leadership review",
            "Report refinement",
          ],
        },
        {
          number: 4,
          title: "Final Reporting & Integration",
          bullets: [
            "Final report preparation",
            "Board presentation and approval",
            "Report submission",
            "Continuous improvement planning",
          ],
        },
      ],
    },
    services: {
      title: "Our BRSR Reporting Services",
      subtitle: "Holistic support for all aspects of BRSR compliance and reporting",
      features: [
        {
          icon: BookOpen,
          title: "BRSR Assessment & Gap Analysis",
          desc: "Thorough evaluation of your current sustainability practices against BRSR requirements to identify gaps and enhancement opportunities.",
        },
        {
          icon: BarChart2,
          title: "Data Collection & Management",
          desc: "Systematic approach to gather, validate and manage Healthcare data required for comprehensive BRSR reporting.",
        },
        {
          icon: FileText,
          title: "BRSR Report Development",
          desc: "Expert preparation of your BRSR report, ensuring compliance with all regulatory requirements and industry best practices.",
        },
        {
          icon: Users,
          title: "Stakeholder Engagement",
          desc: "Facilitation of stakeholder dialogues to gather insights and address concerns for enhanced BRSR reporting.",
        },
        {
          icon: LineChart,
          title: "Integration & Strategy",
          desc: "Incorporation of BRSR findings into corporate strategy for genuine sustainability transformation.",
        },
        {
          icon: ArrowRight,
          title: "Ongoing Support & Improvement",
          desc: "Continuous support to refine and enhance your BRSR reporting practices year over year.",
        },
      ],
    },
    benefits: {
      heading: "Benefits of BRSR Reporting",
      subheading:
        "Beyond compliance: The strategic advantages of comprehensive BRSR reporting",
      items: [
        { icon: CheckCircle, title: "Regulatory compliance with SEBI's mandate", desc: "" },
        { icon: CheckCircle, title: "Enhanced stakeholder transparency", desc: "" },
        { icon: CheckCircle, title: "Improved Healthcare risk management", desc: "" },
        { icon: CheckCircle, title: "Better investor relations and confidence", desc: "" },
        { icon: CheckCircle, title: "Strengthened sustainability strategy", desc: "" },
        { icon: CheckCircle, title: "Competitive advantage in the market", desc: "" },
      ],
    },
    resources: {
      title: "BRSR Resources",
      subtitle: "Helpful resources for understanding and implementing BRSR reporting",
      features: [
        {
          icon: Bookmark,
          title: "SEBI BRSR Circular",
          desc: "Official SEBI circular outlining the BRSR format and implementation requirements.",
          link: "#",
          linkLabel: "Visit Resource",
        },
        {
          icon: Bookmark,
          title: "National Guidelines on Responsible Business Conduct",
          desc: "Guidelines that form the foundation for the BRSR reporting framework.",
          link: "#",
          linkLabel: "Visit Resource",
        },
        {
          icon: Bookmark,
          title: "CII Sustainability Resources",
          desc: "Industry perspectives and resources on sustainability reporting in India.",
          link: "#",
          linkLabel: "Visit Resource",
        },
      ],
    },
    bannerCTA: {
      heading: "Ready to Excel in Your BRSR Reporting?",
      subheading:
        "Partner with our specialists to develop compliant, comprehensive, and strategic BRSR reports that showcase your sustainability commitment.",
      buttons: [
        {
          label: "Schedule Consultation",
          href: "#",
          variant: "primary",
        },
        {
          label: "Request Callback",
          href: "#",
          variant: "primary",
        },
      ],
      className: "bg-eco-green-4 text-center",
    },
  },
  tcfd: {
    hero: {
      title: "TCFD Reporting",
      subtitle:
        "Holistic Task Force on Climate-related Financial Disclosures (TCFD) implementation for enhanced climate risk management.",
      buttons: [
        {
          label: "Schedule Consultation",
          icon: Calendar,
          variant: "primary",
          href: "#",
        },
        {
          label: "Request Callback",
          icon: Phone,
          variant: "primary",
          href: "#",
        },
      ],
    },
    whatIs: {
      title: "What is TCFD?",
      description: [
        "The Task Force on Climate-related Financial Disclosures (TCFD) was established by the Financial Stability Board (FSB) to develop recommendations for more effective climate-related disclosures that could promote more informed investment, credit, and insurance underwriting decisions.",
        "TCFD recommendations help organizations understand what financial markets want from disclosure in order to measure and respond to climate change risks, and encourage firms to align their disclosures with investors' needs. The recommendations focus on governance, strategy, risk management, and metrics and targets."
      ],
      link: { href: 'https://www.fsb-tcfd.org/', label: "Visit the official TCFD website" }
    },
    about: {
      title: "What is TCFD?",
      description: [
        "The Task Force on Climate-related Financial Disclosures (TCFD) was established by the Financial Stability Board (FSB) to develop recommendations for more effective climate-related disclosures that could promote more informed investment, credit, and insurance underwriting decisions.",
        "TCFD recommendations help organizations understand what financial markets want from disclosure in order to measure and respond to climate change risks, and encourage firms to align their disclosures with investors' needs. The recommendations focus on governance, strategy, risk management, and metrics and targets."
      ],
      link: {
        href: "https://www.fsb-tcfd.org/",
        label: "Visit the official TCFD website",
      },
      image: {
        src: "/imgs/tcfd-brain.jpg", // Placeholder, update with actual image path if needed
        alt: "Brain with climate colors"
      }
    },
    overview: {
      title: "Overview",
      items: [
        {
          icon: "FileText",
          label: "Full Name",
          desc: "Task Force on Climate-related Financial Disclosures",
        },
        {
          icon: "Target",
          label: "Objective",
          desc: "To provide recommendations for effective climate-related financial disclosures that help promote informed investment, lending, and insurance decisions.",
        },
        {
          icon: "Globe",
          label: "Scope",
          desc: "Guides organizations on disclosing governance, strategy, risk management, and metrics & targets related to climate risks and opportunities.",
        },
        {
          icon: "Calendar",
          label: "Implementation",
          desc: "Established by the Financial Stability Board (FSB) in 2015, with its recommendations increasingly adopted by organizations worldwide.",
        },
      ],
    },
    benefits: {
      heading: "Benefits of TCFD Reporting",
      subheading: "Strategic advantages of implementing TCFD recommendations",
      items: [
        { icon: CheckCircle, title: "Enhanced risk management capabilities" },
        { icon: CheckCircle, title: "Improved strategic planning" },
        { icon: CheckCircle, title: "Better capital allocation decisions" },
        { icon: CheckCircle, title: "Increased investor confidence" },
        { icon: CheckCircle, title: "Competitive advantage in a low-carbon economy" },
        { icon: CheckCircle, title: "Regulatory readiness as disclosure mandates evolve" },
      ],
    },
    bannerCTA: {
      heading: "Ready to Strengthen Your Climate Resilience?",
      subheading:
        "Let our specialists help you implement TCFD recommendations to better manage climate risks and capitalize on opportunities in a changing climate.",
      buttons: [
        {
          label: "Schedule Consultation",
          href: "#",
          variant: "primary",
        },
        {
          label: "Request Callback",
          href: "#",
          variant: "primary",
        },
      ],
      className: "bg-eco-green-4 text-center",
    },
    services: {
      title: "Our TCFD Services",
      subtitle: "Holistic support for implementing TCFD recommendations in your organization",
      features: [
        {
          icon: FileText,
          title: "TCFD Readiness Assessment",
          desc: "Thorough evaluation of your current climate disclosure practices against TCFD recommendations.",
        },
        {
          icon: "Cloud",
          title: "Climate Scenario Analysis",
          desc: "Development of climate scenarios to assess business resilience and inform strategic planning.",
        },
        {
          icon: "ShieldCheck",
          title: "Risk Assessment & Management",
          desc: "Identification and evaluation of climate-related risks and opportunities across operations.",
        },
        {
          icon: "Target",
          title: "Metrics & Targets Development",
          desc: "Creation of appropriate climate-related metrics and science-based targets.",
        },
        {
          icon: FileText,
          title: "TCFD Report Development",
          desc: "Comprehensive report preparation aligned with TCFD recommendations.",
        },
        {
          icon: "BarChart2",
          title: "Integration with Financial Reporting",
          desc: "Support in incorporating climate considerations into financial disclosures.",
        },
      ],
    },
    coreElements: {
      title: "TCFD's Four Core Elements",
      subtitle: "The framework is structured around four thematic areas that represent core elements of how organizations operate.",
      features: [
        {
          icon: "UserCircle",
          title: "Governance",
          desc: "The organization's governance around climate-related risks and opportunities.",
          link: "#",
          linkLabel: "Learn more",
          colorClass: "bg-blue-900/90 dark:bg-blue-900/80"
        },
        {
          icon: "LineChart",
          title: "Strategy",
          desc: "The actual and potential impacts of climate-related risks and opportunities on the organization's businesses, strategy, and financial planning.",
          link: "#",
          linkLabel: "Learn more",
          colorClass: "bg-green-900/90 dark:bg-green-900/80"
        },
        {
          icon: "ShieldCheck",
          title: "Risk Management",
          desc: "The processes used by the organization to identify, assess, and manage climate-related risks.",
          link: "#",
          linkLabel: "Learn more",
          colorClass: "bg-red-900/90 dark:bg-red-900/80"
        },
        {
          icon: "Target",
          title: "Metrics & Targets",
          desc: "The metrics and targets used to assess and manage relevant climate-related risks and opportunities.",
          link: "#",
          linkLabel: "Learn more",
          colorClass: "bg-yellow-900/90 dark:bg-yellow-900/80"
        },
      ],
    },
  },
  cbam: {
    hero: {
      title: "CBAM Compliance",
      subtitle:
        "Accurate Carbon Border Adjustment Mechanism compliance with zero hassle and zero delay for businesses exporting to the European Union.",
      buttons: [
        {
          label: "Schedule Consultation",
          icon: Calendar,
          variant: "primary",
          href: "#",
        },
        {
          label: "Request Callback",
          icon: Phone,
          variant: "primary",
          href: "#",
        },
      ],
    },
    whatIs: {
      title: "What is CBAM?",
      description: [
        "The Carbon Border Adjustment Mechanism (CBAM) is a key element of the European Green Deal and the EU's climate strategy. It aims to prevent 'carbon leakage' – the situation where EU companies move carbon-intensive production abroad to countries with less stringent climate policies to avoid carbon costs.",
        "CBAM works by requiring importers of covered goods to purchase certificates corresponding to the embedded carbon emissions in their products. The price of these certificates will be linked to the EU Emissions Trading System (ETS) carbon price, creating a level playing field between imported and EU-produced goods in terms of carbon pricing."
      ],
      link: { href: "https://commission.europa.eu/business-economy-euro/banking-and-finance/sustainable-finance/carbon-border-adjustment-mechanism_en", label: "Learn more about CBAM on the European Commission website" }
    },
    overview: {
      title: "CBAM Overview",
      items: [
        { icon: "FileText", label: "Full Name", desc: "Carbon Border Adjustment Mechanism" },
        { icon: "Target", label: "Objective", desc: "To prevent carbon leakage and ensure that the carbon price of imports is equivalent to carbon price of EU-produced goods." },
        { icon: "Globe", label: "Scope", desc: "Initially covers cement, iron and steel, aluminum, fertilizers, electricity, and hydrogen, with potential for expansion." },
        { icon: "Calendar", label: "Implementation", desc: "Transitional period began January 2023, with full implementation from 2026." },
      ],
    },
    services: {
      title: "Our CBAM Services",
      subtitle: "Holistic support for navigating CBAM compliance requirements",
      features: [
        { icon: "FileText", title: "CBAM Applicability Assessment", desc: "Evaluation of whether your products fall under CBAM scope and requirements.", link: "#", linkLabel: "Learn More →" },
        { icon: "FileText", title: "Emissions Calculation Methodology", desc: "Development of methodologies for calculating embedded emissions aligned with CBAM requirements.", link: "#", linkLabel: "Learn More →" },
        { icon: "FileText", title: "Supply Chain Emissions Mapping", desc: "Comprehensive mapping of emissions throughout your supply chain for accurate CBAM reporting.", link: "#", linkLabel: "Learn More →" },
        { icon: "Target", title: "Data Management Systems", desc: "Implementation of systems for collecting, verifying, and managing CBAM-related emissions data.", link: "#", linkLabel: "Learn More →" },
        { icon: "FileText", title: "CBAM Report Preparation", desc: "Creation of compliant quarterly and annual CBAM reports.", link: "#", linkLabel: "Learn More →" },
        { icon: "Target", title: "Strategic CBAM Planning", desc: "Development of strategies to minimize CBAM impacts and optimize compliance costs.", link: "#", linkLabel: "Learn More →" },
      ],
    },
    benefits: {
      heading: "Benefits of Proactive CBAM Preparation",
      subheading: "Strategic advantages of early and thorough CBAM compliance",
      items: [
        { icon: CheckCircle, title: "Maintained EU market access without disruption" },
        { icon: CheckCircle, title: "Cost optimization through accurate emissions calculation" },
        { icon: CheckCircle, title: "Enhanced supply chain transparency and management" },
        { icon: CheckCircle, title: "Competitive advantage in the European market" },
        { icon: CheckCircle, title: "Proactive compliance with evolving carbon regulations" },
        { icon: CheckCircle, title: "Strategic positioning for the low-carbon transition" },
      ],
    },
    bannerCTA: {
      heading: "Ready to Navigate CBAM Compliance?",
      subheading:
        "Let our specialists help you prepare for CBAM compliance and optimize your approach to maintain competitiveness in the European market.",
      buttons: [
        {
          label: "Schedule Consultation",
          href: "#",
          variant: "primary",
        },
        {
          label: "Request Callback",
          href: "#",
          variant: "primary",
        },
      ],
      className: "bg-eco-green-4 text-center",
    },
  },
  sbtn: {
    hero: {
      title: "SBTN Reporting",
      subtitle:
        "Science Based Targets Network implementation for nature-positive business transformation and credible sustainability reporting.",
      buttons: [
        {
          label: "Schedule Consultation",
          icon: Calendar,
          variant: "primary",
          href: "#",
        },
        {
          label: "Request Callback",
          icon: Phone,
          variant: "primary",
          href: "#",
        },
      ],
    },
    whatIs: {
      title: "What is SBTN?",
      description: [
        "The Science Based Targets Network (SBTN) provides businesses with guidance to set targets that maintain Earth's systems within scientifically-defined planetary boundaries. Building on the work of the Science Based Targets initiative (SBTi) for climate, SBTN extends the concept to all aspects of nature.",
        "SBTN targets are measurable, actionable, and time-bound objectives that enable companies to align their business strategies with scientific thresholds relevant to their impact areas. They are designed to ensure businesses operate within Earth's limits while meeting stakeholder needs."
      ],
      link: { href: "https://sciencebasedtargetsnetwork.org/", label: "Visit the official SBTN website" }
    },
    overview: {
      title: "SBTN Overview",
      items: [
        { icon: "FileText", label: "Full Name", desc: "Science Based Targets Network" },
        { icon: "Target", label: "Objective", desc: "To enable companies and cities to set science-based targets for addressing their impacts on nature and contribute to nature-positive outcomes." },
        { icon: "Globe", label: "Focus", desc: "Water, land, biodiversity, ocean, and climate – the interconnected systems that make up Earth's natural environment." },
        { icon: "CheckCircle", label: "Approach", desc: "5-step methodology for target setting: Assess, Interpret, Prioritize, Measure, Act and Track" },
      ],
    },
    services: {
      title: "Our SBTN Services",
      subtitle: "Holistic support for science-based target setting for nature",
      features: [
        { icon: "CheckCircle", title: "SBTN Readiness Assessment", desc: "Evaluation of your organization's readiness to set science-based targets for nature.", link: "#", linkLabel: "Learn More →" },
        { icon: "Globe", title: "Impact & Dependency Mapping", desc: "Comprehensive mapping of your organization's dependencies on and impacts to nature.", link: "#", linkLabel: "Learn More →" },
        { icon: "Target", title: "Science-Based Target Setting", desc: "Development of specific, measurable targets aligned with scientific thresholds for nature.", link: "#", linkLabel: "Learn More →" },
        { icon: "CheckCircle", title: "Implementation Roadmap", desc: "Creation of practical roadmaps to achieve your science-based targets for nature.", link: "#", linkLabel: "Learn More →" },
        { icon: "BarChart2", title: "Progress Monitoring", desc: "Systems and processes to track and report progress against your nature targets.", link: "#", linkLabel: "Learn More →" },
        { icon: "CheckCircle", title: "Disclosure Support", desc: "Assistance with reporting on your science-based targets for nature to key stakeholders.", link: "#", linkLabel: "Learn More →" },
      ],
    },
    benefits: {
      heading: "Benefits of SBTN Reporting",
      subheading: "Strategic advantages of setting science-based targets for nature",
      items: [
        { icon: CheckCircle, title: "Credible sustainability commitments based on scientific evidence" },
        { icon: CheckCircle, title: "Enhanced identification and management of nature-related risks" },
        { icon: CheckCircle, title: "Improved operational resilience to environmental changes" },
        { icon: CheckCircle, title: "Strengthened stakeholder trust and brand reputation" },
        { icon: CheckCircle, title: "Access to emerging nature-positive financing opportunities" },
        { icon: CheckCircle, title: "Alignment with evolving regulatory expectations" },
      ],
    },
    bannerCTA: {
      heading: "Ready to Set Science-Based Targets for Nature?",
      subheading:
        "Let our specialists help you develop and implement credible science-based targets that align your business with nature-positive outcomes.",
      buttons: [
        {
          label: "Schedule Consultation",
          href: "#",
          variant: "primary",
        },
        {
          label: "Request Callback",
          href: "#",
          variant: "primary",
        },
      ],
      className: "bg-eco-green-4 text-center",
    },
  },
  gri: {
    hero: {
      title: "GRI Reporting",
      subtitle:
        "Streamlined Global Reporting Initiative (GRI) reporting for international recognition and comprehensive sustainability disclosure.",
      buttons: [
        {
          label: "Schedule Consultation",
          icon: Calendar,
          variant: "primary",
          href: "#",
        },
        {
          label: "Request Callback",
          icon: Phone,
          variant: "primary",
          href: "#",
        },
      ],
    },
    whatIs: {
      title: "What is GRI?",
      description: [
        "The Global Reporting Initiative (GRI) provides the world's most widely used standards for sustainability reporting, enabling organizations to measure and communicate their impact on critical sustainability issues such as climate change, human rights, governance, and social well-being.",
        "GRI Standards offer a modular, interrelated structure, and represent global best practice for reporting on economic, environmental, and social impacts. They are designed to be used by organizations of any size, sector, or location."
      ],
      link: { href: "https://www.globalreporting.org/", label: "Visit the official GRI website" }
    },
    bannerCTA: {
      heading: "Ready to Start Your GRI Reporting Journey?",
      subheading:
        "Let our specialists help you implement GRI standards for transparent, internationally recognized sustainability reporting.",
      buttons: [
        {
          label: "Schedule Consultation",
          href: "#",
          variant: "primary",
        },
        {
          label: "Request Callback",
          href: "#",
          variant: "primary",
        },
      ],
      className: "bg-eco-green-4 text-center",
    },
    services: {
      title: "Our GRI Reporting Services",
      subtitle: "Comprehensive support for GRI-compliant sustainability reporting",
      features: [
        { icon: "CheckCircle", title: "Materiality Assessment", desc: "Identification and prioritization of material topics specific to your organization and sector." },
        { icon: "BarChart2", title: "GRI Standards Alignment", desc: "Mapping your sustainability information to relevant GRI Standards and disclosures." },
        { icon: "BarChart2", title: "Data Collection Systems", desc: "Development of efficient systems for gathering, validating, and managing GRI data." },
        { icon: "Users", title: "Stakeholder Engagement", desc: "Structuring stakeholder dialogues to inform your GRI reporting process." },
        { icon: "FileText", title: "Report Development", desc: "Creation of comprehensive, GRI-compliant sustainability reports." },
        { icon: "Target", title: "Assurance Readiness", desc: "Preparation for external assurance to enhance credibility." },
      ],
    },
    process: {
      title: "Our GRI Reporting Process",
      subtitle: "A systematic approach to developing comprehensive GRI-compliant reports",
      features: [
        {
          number: 1,
          title: "Preparation",
          bullets: [
            "Understanding GRI Standards requirements",
            "Stakeholder mapping and engagement",
            "Materiality assessment",
            "Reporting scope definition",
          ],
        },
        {
          number: 2,
          title: "Data Collection",
          bullets: [
            "Healthcare metrics identification",
            "Data collection systems setup",
            "Information gathering across operations",
            "Data validation and verification",
          ],
        },
        {
          number: 3,
          title: "Report Development",
          bullets: [
            "GRI Content Index preparation",
            "Performance disclosure drafting",
            "Management approach documentation",
            "Case studies and narrative development",
          ],
        },
        {
          number: 4,
          title: "Publication & Improvement",
          bullets: [
            "Stakeholder feedback collection",
            "External assurance (optional)",
            "Report publication",
            "Continuous improvement planning",
          ],
        },
      ],
    },
    griStandardsStructure: true,
    benefits: {
      heading: "Benefits of GRI Reporting",
      subheading: "Strategic advantages of adopting the globally-recognized GRI framework",
      items: [
        { icon: "CheckCircle", title: "Global recognition and acceptance" },
        { icon: "CheckCircle", title: "Comprehensive sustainability disclosure" },
        { icon: "CheckCircle", title: "Enhanced stakeholder communication" },
        { icon: "CheckCircle", title: "Improved sustainability performance" },
        { icon: "CheckCircle", title: "Competitive benchmarking capability" },
        { icon: "CheckCircle", title: "Investment attraction through transparency" },
      ],
    },
    keyFeatures: {
      heading: "Key Features of GRI Standards",
      subheading: "Understanding the distinguishing elements of GRI reporting",
      items: [
        { icon: "Globe", title: "Universal Application", desc: "Applicable to organizations of all sizes, sectors, and locations, allowing for global comparability." },
        { icon: "Users", title: "Stakeholder Inclusiveness", desc: "Emphasizes the importance of including all stakeholders in the reporting process." },
        { icon: "Target", title: "Materiality Focus", desc: "Prioritizes reporting on topics that reflect significant economic, environmental, and social impacts." },
        { icon: "Eye", title: "Transparency", desc: "Promotes complete disclosure of management approaches and performance data." },
        { icon: "Lock", title: "Modularity", desc: "Modular structure allowing organizations to select relevant topic standards based on material issues." },
        { icon: "ArrowRight", title: "Continuous Evolution", desc: "Regular updates to reflect emerging sustainability issues and reporting best practices." },
      ],
    },
  },
  csrd: {
    hero: {
      title: "CSRD Reporting",
      subtitle:
        "Automated & Assurance-ready Corporate Sustainability Reporting Directive (CSRD) solutions that ensure compliance and strategic advantage.",
      buttons: [
        {
          label: "Schedule Consultation",
          icon: Calendar,
          variant: "primary",
          href: "#",
        },
        {
          label: "Request Callback",
          icon: Phone,
          variant: "primary",
          href: "#",
        },
      ],
    },
    whatIs: {
      title: "What is CSRD?",
      description: [
        "The Corporate Sustainability Reporting Directive (CSRD) is an EU legislation that significantly enhances and expands sustainability reporting requirements. It replaces the Non-Financial Reporting Directive (NFRD) with more detailed reporting requirements and a broader scope of companies required to report.",
        "CSRD introduces the European Sustainability Reporting Standards (ESRS), which provide specific reporting metrics and disclosures. It also introduces mandatory assurance of sustainability information, a key step in ensuring reliability and comparability of reported data."
      ],
      link: { href: "https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en", label: "Learn more about CSRD on the European Commission website" }
    },
    overview: {
      title: "CSRD Overview",
      items: [
        { icon: "FileText", label: "Full Name", desc: "Corporate Sustainability Reporting Directive" },
        { icon: "Target", label: "Objective", desc: "To make sustainability reporting standardized and mandatory for a wide range of companies operating in the EU." },
        { icon: "Globe", label: "Scope", desc: "EU companies, listed SMEs, and non-EU companies with significant EU operations." },
        { icon: "Calendar", label: "Implementation", desc: "Gradually phased in between 2024-2028 depending on company size, listing status, and EU presence." },
      ],
    },
    services: {
      title: "Our CSRD Reporting Services",
      subtitle: "Comprehensive support for CSRD compliance and strategic reporting",
      features: [
        { icon: "FileText", title: "CSRD Gap Analysis", desc: "Comprehensive assessment of your current reporting practices against CSRD requirements.", link: "#", linkLabel: "Learn More →" },
        { icon: "Target", title: "Double Materiality Assessment", desc: "Evaluation of both impacts on sustainability matters and financial implications.", link: "#", linkLabel: "Learn More →" },
        { icon: "BarChart2", title: "ESRS Implementation", desc: "Structured implementation of European Sustainability Reporting Standards.", link: "#", linkLabel: "Learn More →" },
        { icon: "BarChart2", title: "Data Management Systems", desc: "Development of robust systems for collecting and managing CSRD data.", link: "#", linkLabel: "Learn More →" },
        { icon: "FileText", title: "CSRD Report Development", desc: "Creation of comprehensive, assurance-ready CSRD reports.", link: "#", linkLabel: "Learn More →" },
        { icon: "Lock", title: "Assurance Preparation", desc: "Support in preparing for mandatory limited assurance of sustainability information.", link: "#", linkLabel: "Learn More →" },
      ],
    },
    benefits: {
      heading: "Benefits of CSRD Compliance",
      subheading: "Strategic advantages beyond regulatory compliance",
      items: [
        { icon: CheckCircle, title: "Regulatory compliance with EU sustainability requirements" },
        { icon: CheckCircle, title: "Enhanced access to sustainable finance and investment" },
        { icon: CheckCircle, title: "Improved identification and management of sustainability risks" },
        { icon: CheckCircle, title: "Strengthened stakeholder trust and transparency" },
        { icon: CheckCircle, title: "Better decision-making through sustainability integration" },
        { icon: CheckCircle, title: "Competitive advantage in a sustainability-focused market" },
      ],
    },
    bannerCTA: {
      heading: "Ready for CSRD Compliance?",
      subheading:
        "Let our experts help you navigate the CSRD requirements and develop assurance-ready sustainability reporting that creates strategic value.",
      buttons: [
        {
          label: "Schedule Consultation",
          href: "#",
          variant: "primary",
        },
        {
          label: "Request Callback",
          href: "#",
          variant: "primary",
        },
      ],
      className: "bg-eco-green-4 text-center",
    },
    esrs: {
      heading: "European Sustainability Reporting Standards (ESRS)",
      subheading: "CSRD implementation is based on the ESRS, which cover a comprehensive range of sustainability topics",
      items: [
        {
          icon: "CheckCircle",
          title: "General",
          bullets: [
            "ESRS 1: General Requirements",
            "ESRS 2: General Disclosures",
          ],
        },
        {
          icon: "CheckCircle",
          title: "Environmental",
          bullets: [
            "E1: Climate change",
            "E2: Pollution",
            "E3: Water and marine resources",
            "E4: Biodiversity",
            "E5: Resource use and circular economy",
          ],
        },
        {
          icon: "CheckCircle",
          title: "Social",
          bullets: [
            "S1: Own workforce",
            "S2: Workers in the value chain",
            "S3: Affected communities",
            "S4: Consumers and end users",
          ],
        },
        {
          icon: "CheckCircle",
          title: "Governance",
          bullets: [
            "G1: Business conduct",
          ],
        },
      ],
    },
    keyRequirements: {
      heading: "Key CSRD Requirements",
      subheading: "Understanding the fundamental aspects that differentiate CSRD from previous reporting frameworks",
      items: [
        { title: "Double Materiality", desc: "Companies must report on both how sustainability issues affect their business and how their activities impact people and the environment." },
        { title: "Value Chain Assessment", desc: "Reporting requirements extend to impacts throughout the entire value chain, not just direct operations." },
        { title: "Forward-Looking Information", desc: "Companies must disclose sustainability strategies, targets, transition plans, and compatibility with Paris Agreement goals." },
        { title: "Mandatory Assurance", desc: "All reported sustainability information will require limited assurance, with the potential for reasonable assurance in the future." },
        { title: "Digital Tagging", desc: "Information must be digitally tagged to enable searchability and comparability in the European Single Access Point." },
      ],
    },
  },
  tnfd: {
    hero: {
      title: "TNFD Reporting",
      subtitle:
        "Comprehensive Taskforce on Nature-related Financial Disclosures implementation for enhanced biodiversity and nature risk management.",
      buttons: [
        {
          label: "Schedule Consultation",
          icon: Calendar,
          variant: "primary",
          href: "#",
        },
        {
          label: "Request Callback",
          icon: Phone,
          variant: "primary",
          href: "#",
        },
      ],
    },
    whatIs: {
      title: "What is TNFD?",
      description: [
        "The Taskforce on Nature-related Financial Disclosures (TNFD) provides a framework for organizations to report and act on nature-related risks and opportunities. Modeled after the TCFD (Task Force on Climate-related Financial Disclosures), the TNFD focuses on how organizations impact and depend on nature, and the associated risks and opportunities.",
        "The TNFD framework is designed to support a shift in global financial flows away from nature-negative outcomes toward nature-positive outcomes. It helps organizations understand their nature-related dependencies and impacts, assess related risks and opportunities, and respond through strategic planning and asset allocation."
      ],
      link: { href: "https://tnfd.global/", label: "Visit the official TNFD website" }
    },
    overview: {
      title: "TNFD Overview",
      items: [
        { icon: "FileText", label: "Full Name", desc: "Taskforce on Nature-related Financial Disclosures" },
        { icon: "Target", label: "Objective", desc: "To develop and deliver a risk management and disclosure framework for organizations to report and act on evolving nature-related risks." },
        { icon: "CheckCircle", label: "Framework", desc: "LEAP approach (Locate, Evaluate, Assess, Prepare)" },
        { icon: "Calendar", label: "Launch", desc: "Final framework published in September 2023" },
      ],
    },
    services: {
      title: "Our TNFD Reporting Services",
      subtitle: "Comprehensive support for implementing TNFD recommendations and managing nature-related risks",
      features: [
        { icon: "CheckCircle", title: "TNFD Readiness Assessment", desc: "Evaluation of your current capabilities and readiness for TNFD reporting.", link: "#", linkLabel: "Learn More →" },
        { icon: "BarChart2", title: "Biodiversity Impact Analysis", desc: "Comprehensive assessment of your organization's dependencies and impacts on biodiversity.", link: "#", linkLabel: "Learn More →" },
        { icon: "CheckCircle", title: "Nature Risk Assessment", desc: "Identification and evaluation of nature-related risks to your business operations.", link: "#", linkLabel: "Learn More →" },
        { icon: "CheckCircle", title: "LEAP Implementation", desc: "Structured implementation of the TNFD's LEAP approach for nature-related assessments.", link: "#", linkLabel: "Learn More →" },
        { icon: "BarChart2", title: "TNFD Disclosure Development", desc: "Creation of comprehensive TNFD-aligned disclosures and reports.", link: "#", linkLabel: "Learn More →" },
        { icon: "CheckCircle", title: "Nature Strategy Integration", desc: "Integration of nature-related considerations into business strategy and decision-making.", link: "#", linkLabel: "Learn More →" },
      ],
    },
    benefits: {
      heading: "Benefits of TNFD Reporting",
      subheading: "Strategic advantages of implementing TNFD recommendations",
      items: [
        { icon: CheckCircle, title: "Enhanced understanding of nature-related dependencies and risks" },
        { icon: CheckCircle, title: "Improved strategic planning for nature-related challenges" },
        { icon: CheckCircle, title: "Better capital allocation decisions for sustainability" },
        { icon: CheckCircle, title: "Increased investor and stakeholder confidence" },
        { icon: CheckCircle, title: "Competitive advantage in a nature-conscious market" },
        { icon: CheckCircle, title: "Early adoption advantage as disclosure requirements evolve" },
      ],
    },
    bannerCTA: {
      heading: "Ready to Address Nature-Related Risks?",
      subheading:
        "Let our experts help you implement TNFD recommendations to better manage nature-related risks and seize opportunities in an increasingly nature-conscious world.",
      buttons: [
        {
          label: "Schedule Consultation",
          href: "#",
          variant: "primary",
        },
        {
          label: "Request Callback",
          href: "#",
          variant: "primary",
        },
      ],
      className: "bg-eco-green-4 text-center",
    },
  },
  "sustainability-standards-certifications": {
    hero: {
      title: "Sustainability Standards & Certifications",
      subtitle: "Comprehensive guidance on sustainability standards, certifications, and compliance frameworks to enhance your organization's credibility and performance.",
      buttons: [
        {
          label: "Schedule Consultation",
          icon: Calendar,
          variant: "primary",
          href: "#",
        },
        {
          label: "Request Callback",
          icon: Phone,
          variant: "primary",
          href: "#",
        },
      ],
    },
    whatIs: {
      title: "What are Sustainability Standards & Certifications?",
      description: [
        "Sustainability standards and certifications are internationally recognized frameworks that provide guidelines, criteria, and verification processes for organizations to demonstrate their commitment to environmental, social, and governance (Healthcare) excellence.",
        "These standards help organizations establish robust sustainability management systems, improve performance, enhance stakeholder trust, and gain competitive advantages in the market."
      ],
      link: { href: '#', label: "Learn more about sustainability standards" }
    },
    process: {
      title: "Our Standards & Certification Process",
      subtitle: "A systematic approach to achieving sustainability standards and certifications",
      features: [
        {
          number: 1,
          title: "Assessment & Gap Analysis",
          bullets: [
            "Comprehensive evaluation against chosen standards",
            "Identification of compliance gaps and improvement areas",
            "Baseline performance measurement and benchmarking"
          ]
        },
        {
          number: 2,
          title: "Implementation Planning",
          bullets: [
            "Development of implementation roadmap and timeline",
            "Resource allocation and team training",
            "Process documentation and system establishment"
          ]
        },
        {
          number: 3,
          title: "Implementation & Monitoring",
          bullets: [
            "Execution of improvement initiatives",
            "Ongoing performance monitoring and measurement",
            "Continuous improvement and optimization"
          ]
        },
        {
          number: 4,
          title: "Certification & Maintenance",
          bullets: [
            "Preparation for certification audit",
            "Achievement of certification status",
            "Ongoing compliance maintenance and renewal"
          ]
        }
      ]
    },
    cardGrid: {
      heading: "Benefits of Sustainability Standards",
      subheading: "Unlock value through recognized sustainability excellence",
      items: [
        { icon: CheckCircle, title: "Enhanced credibility and reputation", desc: "" },
        { icon: CheckCircle, title: "Improved operational efficiency", desc: "" },
        { icon: CheckCircle, title: "Better stakeholder engagement", desc: "" },
        { icon: CheckCircle, title: "Access to new markets and opportunities", desc: "" },
        { icon: CheckCircle, title: "Risk reduction and compliance", desc: "" },
        { icon: CheckCircle, title: "Competitive advantage", desc: "" },
      ],
    },
    bannerCTA: {
      heading: "Ready to Achieve Sustainability Standards?",
      subheading: "Partner with our experts to navigate the path to sustainability certification and excellence.",
      buttons: [{ label: "Get Started", href: "#", variant: "primary" }],
      className: "bg-eco-green-4 text-center",
    },
  },

  "Healthcare-assessment-reporting": {
    hero: {
      title: "Healthcare Assessment & Reporting",
      subtitle: "Comprehensive Healthcare assessment and reporting services to measure, track, and communicate your organization's sustainability performance and progress.",
      buttons: [
        {
          label: "Schedule Consultation",
          icon: Calendar,
          variant: "primary",
          href: "#",
        },
        {
          label: "Request Callback",
          icon: Phone,
          variant: "primary",
          href: "#",
        },
      ],
    },
    whatIs: {
      title: "What is Healthcare Assessment & Reporting?",
      description: [
        "Healthcare Assessment & Reporting is a systematic process of evaluating and communicating an organization's performance across Environmental, Social, and Governance dimensions. It involves measuring key sustainability metrics, identifying improvement opportunities, and transparently reporting progress to stakeholders.",
        "This comprehensive approach helps organizations demonstrate their commitment to sustainability, meet stakeholder expectations, comply with regulatory requirements, and drive continuous improvement in their Healthcare performance."
      ],
      link: { href: '#', label: "Learn more about Healthcare assessment" }
    },
    process: {
      title: "Our Healthcare Assessment & Reporting Process",
      subtitle: "A comprehensive methodology for Healthcare excellence",
      features: [
        {
          number: 1,
          title: "Healthcare Materiality Assessment",
          bullets: [
            "Identification of material Healthcare issues",
            "Stakeholder engagement and prioritization",
            "Risk and opportunity assessment"
          ]
        },
        {
          number: 2,
          title: "Performance Measurement",
          bullets: [
            "Development of Healthcare metrics and KPIs",
            "Data collection and validation",
            "Performance benchmarking and analysis"
          ]
        },
        {
          number: 3,
          title: "Reporting & Disclosure",
          bullets: [
            "Preparation of comprehensive Healthcare reports",
            "Alignment with reporting frameworks",
            "Stakeholder communication and engagement"
          ]
        },
        {
          number: 4,
          title: "Continuous Improvement",
          bullets: [
            "Performance monitoring and tracking",
            "Goal setting and target establishment",
            "Implementation of improvement initiatives"
          ]
        }
      ]
    },
    cardGrid: {
      heading: "Benefits of Healthcare Assessment & Reporting",
      subheading: "Transform your sustainability performance through comprehensive assessment and transparent reporting",
      items: [
        { icon: CheckCircle, title: "Enhanced stakeholder trust", desc: "" },
        { icon: CheckCircle, title: "Improved risk management", desc: "" },
        { icon: CheckCircle, title: "Better decision-making", desc: "" },
        { icon: CheckCircle, title: "Access to sustainable finance", desc: "" },
        { icon: CheckCircle, title: "Competitive advantage", desc: "" },
        { icon: CheckCircle, title: "Regulatory compliance", desc: "" },
      ],
    },
    bannerCTA: {
      heading: "Ready to Assess Your Healthcare Performance?",
      subheading: "Partner with our Healthcare experts to measure, track, and report your sustainability progress.",
      buttons: [{ label: "Get Started", href: "#", variant: "primary" }],
      className: "bg-eco-green-4 text-center",
    },
  },

  "Healthcare-transitions": {
    hero: {
      title: "Healthcare Transitions",
      subtitle: "Strategic guidance and support for organizations transitioning to sustainable business models and Healthcare-focused operations.",
      buttons: [
        {
          label: "Schedule Consultation",
          icon: Calendar,
          variant: "primary",
          href: "#",
        },
        {
          label: "Request Callback",
          icon: Phone,
          variant: "primary",
          href: "#",
        },
      ],
    },
    whatIs: {
      title: "What are Healthcare Transitions?",
      description: [
        "Healthcare Transitions refer to the strategic transformation of organizations from traditional business models to sustainable, Healthcare-focused operations. This involves fundamental changes in business practices, processes, and culture to align with environmental, social, and governance best practices.",
        "Successful Healthcare transitions require comprehensive planning, stakeholder engagement, capability building, and ongoing monitoring to ensure sustainable transformation and long-term value creation."
      ],
      link: { href: '#', label: "Learn more about Healthcare transitions" }
    },
    process: {
      title: "Our Healthcare Transition Process",
      subtitle: "A structured approach to sustainable business transformation",
      features: [
        {
          number: 1,
          title: "Transition Assessment",
          bullets: [
            "Current state analysis and gap identification",
            "Stakeholder mapping and engagement planning",
            "Transition readiness evaluation"
          ]
        },
        {
          number: 2,
          title: "Strategy Development",
          bullets: [
            "Healthcare transition roadmap and milestones",
            "Resource planning and capability building",
            "Risk mitigation and change management strategies"
          ]
        },
        {
          number: 3,
          title: "Implementation & Execution",
          bullets: [
            "Phased implementation of transition initiatives",
            "Stakeholder communication and training",
            "Progress monitoring and performance tracking"
          ]
        },
        {
          number: 4,
          title: "Embedding & Optimization",
          bullets: [
            "Cultural transformation and capability building",
            "Performance measurement and reporting",
            "Continuous improvement and optimization"
          ]
        }
      ]
    },
    cardGrid: {
      heading: "Benefits of Healthcare Transitions",
      subheading: "Transform your business for sustainable success and long-term value creation",
      items: [
        { icon: CheckCircle, title: "Sustainable business model", desc: "" },
        { icon: CheckCircle, title: "Enhanced stakeholder relationships", desc: "" },
        { icon: CheckCircle, title: "Improved risk management", desc: "" },
        { icon: CheckCircle, title: "Access to new markets", desc: "" },
        { icon: CheckCircle, title: "Competitive advantage", desc: "" },
        { icon: CheckCircle, title: "Long-term value creation", desc: "" },
      ],
    },
    bannerCTA: {
      heading: "Ready to Transform Your Business?",
      subheading: "Partner with our transition experts to navigate your journey to sustainable business excellence.",
      buttons: [{ label: "Get Started", href: "#", variant: "primary" }],
      className: "bg-eco-green-4 text-center",
    },
  },
}; 