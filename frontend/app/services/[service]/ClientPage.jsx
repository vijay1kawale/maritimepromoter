'use client';

import { useRef, useState } from 'react';
import { serviceContent } from '@/data/serviceContent';
import ServiceHeroSection from '@/components/services/sustainabilityService/ServiceHeroSection';
import ServiceSubFeatureSection from '@/components/services/sustainabilityService/ServiceSubFeatureSection';
import CardGrid from '@/components/CardGrid';
import BannerCTA from '@/components/BannerCTA';
import HowItWorks from '@/components/HowItWorks';
import useScrollReveal from '@/components/useScrollReveal';
import ServicePopup from '@/components/services/sustainabilityService/ServicePopup';
import { servicePopupContent } from '@/components/services/sustainabilityService/servicePopupContent';
import CallbackForm from '@/components/CallbackForm';

export default function ClientPage({ serviceKey }) {
  const content = serviceContent[serviceKey];
  const heroRef = useRef(null);
  const subFeatureRef = useRef(null);
  const howItWorksRef = useRef(null);
  const cardGridRef = useRef(null);
  const wasteGridRef = useRef(null);
  const ctaRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);
  const [activeSubFeatureIdx, setActiveSubFeatureIdx] = useState(null);
  const [showCallback, setShowCallback] = useState(false);

  useScrollReveal(heroRef);
  useScrollReveal(subFeatureRef, { delay: 0.1 });
  useScrollReveal(howItWorksRef, { delay: 0.2 });
  useScrollReveal(cardGridRef, { delay: 0.3 });
  useScrollReveal(wasteGridRef, { delay: 0.4 });
  useScrollReveal(ctaRef, { delay: 0.5 });

  const getPopupKey = () => {
    if (!serviceKey || activeSubFeatureIdx == null) return null;
    const serviceMap = {
      'supply-chain': [
        'supplyChainAssessment',
        'sustainableSourcing',
        'carbonFootprintReduction',
        'complianceReporting',
      ],
      'epr': [
        'eprRegistrationCompliance',
        'wasteCollectionManagement',
        'recyclingPrograms',
        'reportingDocumentation',
      ],
      'carbon-market': [
        'carbonFootprintAssessment',
        'carbonCreditTrading',
        'emissionReductionStrategy',
        'complianceReportingCarbon',
      ],
      'water-management': [
        'waterAuditAssessment',
        'waterConservationStrategy',
        'wastewaterManagement',
        'complianceReportingWater',
      ],
      'Healthcare-strategy': [
        'HealthcareAssessment',
        'strategyDevelopment',
        'implementationSupport',
        'reportingDisclosure',
      ],
    };
    return serviceMap[serviceKey]?.[activeSubFeatureIdx] || null;
  };

  const handleLearnMore = (idx) => {
    setActiveSubFeatureIdx(idx);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setActiveSubFeatureIdx(null);
  };

  const handleRequestCallback = () => {
    setShowPopup(false);
    setShowCallback(true);
  };

  const popupKey = getPopupKey();
  const popupContent = popupKey ? servicePopupContent[popupKey] : null;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div ref={heroRef}><ServiceHeroSection {...content.hero} /></div>
      <div ref={subFeatureRef}>
        <ServiceSubFeatureSection {...content.subFeatures} onLearnMore={handleLearnMore} />
      </div>
      {content.howItWorks && (
        <div ref={howItWorksRef}>
          <HowItWorks {...content.howItWorks} />
        </div>
      )}
      <div ref={cardGridRef}><CardGrid {...content.cardGrid} /></div>
      {content.wasteManagementGrid && (
        <div ref={wasteGridRef}><CardGrid {...content.wasteManagementGrid} /></div>
      )}
      <div ref={ctaRef}><BannerCTA {...content.bannerCTA} /></div>
      <ServicePopup
        open={showPopup}
        onClose={handleClosePopup}
        onRequestCallback={handleRequestCallback}
        content={popupContent}
      />
      <CallbackForm open={showCallback} onClose={() => setShowCallback(false)} />
    </div>
  );
}


