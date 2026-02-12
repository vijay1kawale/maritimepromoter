'use client';

import { useRef, useState } from 'react';
import RegulatoryHero from '@/components/services/regulatoryServices/RegulatoryHero';
import RequiredDocs from '@/components/services/regulatoryServices/RequiredDocs';
import ApplicationProcess from '@/components/services/regulatoryServices/ApplicationProcess';
import ImportantNotes from '@/components/services/regulatoryServices/ImportantNotes';
import RelatedServices from '@/components/services/regulatoryServices/RelatedServices';
import QuickActions from '@/components/services/regulatoryServices/QuickActions';
import FeesStructure from '@/components/services/regulatoryServices/FeesStructure';
import FeeStructureCard from '@/components/services/regulatoryServices/FeeStructureCard';
import Link from 'next/link';
import useScrollReveal from '@/components/useScrollReveal';
import ConsultationForm from '@/components/ConsultationForm';
import CallbackForm from '@/components/CallbackForm';

function toTitleCase(str) {
  return decodeURIComponent(str)
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

export default function RegulatoryServiceClient({ stage, department, regulatoryService, serviceKey, content }) {
  const heroRef = useRef(null);
  const docsRef = useRef(null);
  const processRef = useRef(null);
  const notesRef = useRef(null);
  const relatedRef = useRef(null);
  const sidebarRef = useRef(null);

  const [showConsultation, setShowConsultation] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const [showFeeCard, setShowFeeCard] = useState(false);

  useScrollReveal(heroRef);
  useScrollReveal(docsRef, { delay: 0.1 });
  useScrollReveal(processRef, { delay: 0.2 });
  useScrollReveal(notesRef, { delay: 0.1 });
  useScrollReveal(relatedRef, { delay: 0.2 });
  useScrollReveal(sidebarRef, { delay: 0.3 });

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <nav className="text-sm flex items-center gap-2 mb-4" style={{ color: '#139A93' }}>
          <Link href="/services" className="hover:underline flex items-center gap-1">&larr; Back to Services</Link>
        </nav>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex flex-wrap gap-1 items-center">
          <span>{toTitleCase(stage)}</span>
          <span className="mx-1">/</span>
          <span>{toTitleCase(department)}</span>
          <span className="mx-1">/</span>
          <span className="font-semibold text-gray-700 dark:text-gray-200">{toTitleCase(regulatoryService)}</span>
        </div>
        {content ? (
          <>
            <div ref={heroRef}><RegulatoryHero {...content.hero} bannerClassName="max-w-6xl mx-auto" /></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 min-w-0">
                <div ref={docsRef}><RequiredDocs {...content.requiredDocs} /></div>
                <div ref={processRef}><ApplicationProcess {...content.applicationProcess} /></div>
                <div ref={notesRef}><ImportantNotes {...content.importantNotes} /></div>
                <div ref={relatedRef}><RelatedServices {...content.relatedServices} /></div>
              </div>
              <div ref={sidebarRef} className="md:w-80 w-full flex flex-col gap-4 md:sticky md:top-24">
                <QuickActions
                  {...content.quickActions}
                  serviceKey={serviceKey}
                  serviceName={content.hero.title}
                  actions={content.quickActions.actions.map(action => {
                    if (action.label.toLowerCase().includes('consultation')) {
                      return { ...action, onClick: () => setShowConsultation(true), href: undefined };
                    }
                    if (action.label.toLowerCase().includes('callback') || action.label.toLowerCase().includes('call back') || action.label.toLowerCase().includes('call')) {
                      return { ...action, onClick: () => setShowCallback(true), href: undefined };
                    }
                    return action;
                  })}
                />
                <FeesStructure
                  {...content.feesStructure}
                  onViewDetails={() => setShowFeeCard(true)}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-red-500 py-20">
            No content found for this service.
          </div>
        )}
      </div>
      <ConsultationForm open={showConsultation} onClose={() => setShowConsultation(false)} />
      <CallbackForm open={showCallback} onClose={() => setShowCallback(false)} />
      {showFeeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <FeeStructureCard
            onClose={() => setShowFeeCard(false)}
            onRequestCallback={() => {
              setShowFeeCard(false);
              setShowCallback(true);
            }}
          />
        </div>
      )}
    </div>
  );
}
