import type { Metadata } from 'next';
import Home from '../components/pages/Home';

export const metadata: Metadata = {
  title: 'On a Whim | Bespoke African Safaris & Tours',
  description: 'On a Whim offers bespoke African safaris and tours across South Africa, Zimbabwe, Zambia, and Botswana. Expert-guided, personalized journeys tailored to you.',
  alternates: {
    canonical: 'https://onawhim.co.za',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za/',
    title: 'On a Whim | Bespoke African Safaris & Tours',
    description: 'Expert-guided, personalized African safaris and tours across Southern Africa. Authentically crafted journeys.',
    images: [
      {
        url: 'https://onawhim.co.za/images/hero/hero-one.jpg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On a Whim | Bespoke African Safaris & Tours',
    description: 'Expert-guided, personalized African safaris and tours across Southern Africa.',
    images: ['https://onawhim.co.za/images/hero/hero-one.jpg'],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "On a Whim",
  "description": "Bespoke journeys across South Africa and Southern Africa — guided by people who call it home.",
  "url": "https://onawhim.co.za",
  "telephone": "+27621380622",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cape Town",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.9249,
    "longitude": 18.4241
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Home />
    </>
  );
}
