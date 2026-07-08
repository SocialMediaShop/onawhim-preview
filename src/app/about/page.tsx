import type { Metadata } from 'next';
import About from '../../components/pages/About';

export const metadata: Metadata = {
  title: 'About Us | On a Whim',
  description: 'Learn about On a Whim, bespoke safari specialists guided by people who call South Africa home. IATA TIDS accredited travel agency.',
  alternates: {
    canonical: 'https://onawhim.co.za/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za/about',
    title: 'About Us | On a Whim',
    description: 'Learn about On a Whim, bespoke safari specialists guided by people who call South Africa home.',
    images: [
      {
        url: 'https://onawhim.co.za/images/hero/hero-one.jpg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | On a Whim',
    description: 'Learn about On a Whim, bespoke safari specialists guided by people who call South Africa home.',
    images: ['https://onawhim.co.za/images/hero/hero-one.jpg'],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About On a Whim",
  "description": "Learn about On a Whim, bespoke safari specialists guided by people who call South Africa home.",
  "mainEntity": {
    "@type": "TravelAgency",
    "name": "On a Whim",
    "telephone": "+27621380622",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <About />
    </>
  );
}
