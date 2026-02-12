import { notFound } from 'next/navigation';
import { reportingContent } from '@/data/reportingContent';
import ClientPage from './ClientPage';

export function generateStaticParams() {
  return Object.keys(reportingContent).map((report) => ({ report }));
}

export default function ReportingPage({ params }) {
  const report = params.report;
  const content = reportingContent[report];
  if (!content) return notFound();
  return <ClientPage report={report} />;
}
