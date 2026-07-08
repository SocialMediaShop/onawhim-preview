import type { Metadata } from 'next';
import Enquire from '../../components/pages/Enquire';

export const metadata: Metadata = {
  title: 'Plan Your Safari | Enquiry | On a Whim',
  description: 'Start planning your custom African safari or tour. Get in touch with the travel experts at On a Whim to craft your perfect itinerary.',
  alternates: {
    canonical: 'https://onawhim.co.za/enquire',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za/enquire',
    title: 'Plan Your Safari | Enquiry | On a Whim',
    description: 'Start planning your custom African safari or tour. Get in touch with the travel experts at On a Whim to craft your perfect itinerary.',
    images: [
      {
        url: 'https://onawhim.co.za/images/hero/hero-one.jpg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plan Your Safari | Enquiry | On a Whim',
    description: 'Start planning your custom African safari or tour. Get in touch with the travel experts at On a Whim to craft your perfect itinerary.',
    images: ['https://onawhim.co.za/images/hero/hero-one.jpg'],
  },
};

const enquireSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Plan Your Custom Safari",
  "description": "Start planning your custom African safari or tour. Get in touch with our travel experts.",
  "mainEntity": {
    "@type": "TravelAgency",
    "name": "On a Whim",
    "telephone": "+27621380622",
    "email": "info@onawhim.co.za",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cape Town",
      "addressCountry": "ZA"
    }
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enquireSchema) }}
      />
      <Enquire />
    </>
  );
}
