import { notFound } from 'next/navigation';
import { serviceContent } from '@/data/serviceContent';
import ClientPage from './ClientPage';

export function generateStaticParams() {
  return Object.keys(serviceContent).map((serviceKey) => ({ service: serviceKey }));
}

export default function ServicePage({ params }) {
  const content = serviceContent[params.service];
  if (!content) return notFound();
  return <ClientPage serviceKey={params.service} />;
}