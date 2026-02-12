'use client';

import { useRef } from 'react';
import { reportingContent } from '@/data/reportingContent';
import ServiceHeroSection from '@/components/services/sustainabilityService/ServiceHeroSection';
import ServiceSubFeatureSection from '@/components/services/sustainabilityService/ServiceSubFeatureSection';
import CardGrid from '@/components/CardGrid';
import BannerCTA from '@/components/BannerCTA';
import WhatIs from '@/components/services/sustainabilityReporting/WhatIs';
import BRSRKeyComponents from '@/components/services/sustainabilityReporting/BRSRKeyComponents';
import ClimateRisksOpportunities from '@/components/services/sustainabilityReporting/ClimateRisksOpportunities';
import OverviewSection from '@/components/services/sustainabilityReporting/OverviewSection';
import CBAMImplementationTimeline from '@/components/services/sustainabilityReporting/CBAMImplementationTimeline';
import IconCardGrid from '@/components/IconCardGrid';
import { BarChart2 } from 'lucide-react';
import { UserCircle, LineChart, ShieldCheck, Target } from 'lucide-react';
import TargetSettingTimeline from '@/components/TargetSettingTimeline';
import { MapPin, Droplet, Waves, Leaf, Sun } from 'lucide-react';
import GRIStandardsStructure from '@/components/services/sustainabilityReporting/GRIStandardsStructure';
import ValueGrid from '@/components/ValueGrid';
import useScrollReveal from '@/components/useScrollReveal';

export default function ClientPage({ report }) {
  const content = reportingContent[report];
  const heroRef = useRef(null);
  const whatIsRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const ctaRef = useRef(null);

  useScrollReveal(heroRef);
  useScrollReveal(whatIsRef, { delay: 0.1 });
  useScrollReveal(section1Ref, { delay: 0.2 });
  useScrollReveal(section2Ref, { delay: 0.3 });
  useScrollReveal(section3Ref, { delay: 0.4 });
  useScrollReveal(ctaRef, { delay: 0.5 });

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div ref={heroRef}><ServiceHeroSection {...content.hero} /></div>
      {content.whatIs && (
        <div ref={whatIsRef} className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <WhatIs {...content.whatIs} />
          {report === 'brsr' && <BRSRKeyComponents />}
          {report === 'tcfd' && content.overview && <OverviewSection {...content.overview} />}
          {report === 'cbam' && content.overview && <OverviewSection {...content.overview} />}
          {report === 'sbtn' && content.overview && <OverviewSection {...content.overview} />}
          {report === 'gri' && <GRIStandardsStructure />}
          {report === 'csrd' && content.overview && <OverviewSection {...content.overview} />}
          {report === 'tnfd' && content.overview && <OverviewSection {...content.overview} />}
        </div>
      )}
      {report === 'tcfd' && <div ref={section1Ref}><ClimateRisksOpportunities /></div>}
      {report === 'cbam' && (
        <div ref={section2Ref}>
          <CBAMImplementationTimeline />
          <IconCardGrid
            heading="Products Covered by CBAM"
            subheading="CBAM initially focuses on carbon-intensive sectors with high risk of carbon leakage"
            items={[
              { icon: BarChart2, title: 'Cement' },
              { icon: BarChart2, title: 'Iron & Steel' },
              { icon: BarChart2, title: 'Aluminum' },
              { icon: BarChart2, title: 'Fertilizers' },
              { icon: BarChart2, title: 'Electricity' },
              { icon: BarChart2, title: 'Hydrogen' },
            ]}
            className="justify-center"
          />
          <div className="text-center text-gray-500 dark:text-gray-300 pb-12">
            Additional sectors may be added in future phases of CBAM implementation.
          </div>
        </div>
      )}
      {report === 'sbtn' && (
        <div ref={section3Ref}>
          <IconCardGrid
            heading="SBTN Focus Areas"
            subheading="SBTN addresses key environmental systems that businesses impact and depend upon"
            items={[
              { icon: MapPin, title: 'Land' },
              { icon: Droplet, title: 'Freshwater' },
              { icon: Waves, title: 'Ocean' },
              { icon: Leaf, title: 'Biodiversity' },
              { icon: Sun, title: 'Climate' },
            ]}
            className="justify-center"
          />
          <TargetSettingTimeline />
        </div>
      )}
      {report === 'csrd' && content.esrs && content.esrs.items && (
        <div ref={section1Ref}>
          <IconCardGrid
            heading={content.esrs.heading}
            subheading={content.esrs.subheading}
            items={content.esrs.items.map(item => ({
              ...item,
              bullets: item.bullets,
              icon: item.icon,
            }))}
            className="justify-center"
          />
        </div>
      )}
      {report === 'tcfd' && (
        <div ref={section2Ref}>
          <ServiceSubFeatureSection
            {...content.coreElements}
            features={content.coreElements?.features?.map(f => ({
              ...f,
              icon:
                f.icon === 'UserCircle' ? UserCircle :
                f.icon === 'LineChart' ? LineChart :
                f.icon === 'ShieldCheck' ? ShieldCheck :
                f.icon === 'Target' ? Target : undefined,
              className: f.colorClass || '',
            }))}
          />
        </div>
      )}
      {content.principles && <div ref={section1Ref}><ServiceSubFeatureSection {...content.principles} centerNumber /></div>}
      {content.process && <div ref={section2Ref}><ServiceSubFeatureSection {...content.process} centerNumber /></div>}
      {content.services && report !== 'tnfd' && <div ref={section3Ref}><ServiceSubFeatureSection {...content.services} /></div>}
      {content.benefits && content.benefits.items && report !== 'tnfd' && (
        <div ref={section1Ref}><CardGrid {...content.benefits} /></div>
      )}
      {report === 'csrd' && content.keyRequirements && content.keyRequirements.items && (
        <div ref={section2Ref}><ValueGrid {...content.keyRequirements} /></div>
      )}
      {report === 'gri' && content.keyFeatures && content.keyFeatures.items && (
        <div ref={section3Ref}><ValueGrid {...content.keyFeatures} /></div>
      )}
      {content.resources && <div ref={section1Ref}><ServiceSubFeatureSection {...content.resources} /></div>}
      {report === 'tnfd' && content.services && content.services.features && (
        <div ref={section2Ref}><ServiceSubFeatureSection {...content.services} /></div>
      )}
      {report === 'tnfd' && content.benefits && content.benefits.items && (
        <div ref={section3Ref}><CardGrid {...content.benefits} /></div>
      )}
      <div ref={ctaRef}><BannerCTA {...content.bannerCTA} /></div>
    </div>
  );
}


