import type { Metadata } from 'next';
import Safari from '../../components/pages/Safari';

export const metadata: Metadata = {
  title: 'Bespoke African Safaris & Packages | On a Whim',
  description: 'Explore our curated safari packages across Zimbabwe, Zambia, and Botswana. Custom itineraries for Victoria Falls, Hwange, Chobe, and Lower Zambezi.',
  alternates: {
    canonical: 'https://onawhim.co.za/safari',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za/safari',
    title: 'Bespoke African Safaris & Packages | On a Whim',
    description: 'Explore our curated safari packages across Zimbabwe, Zambia, and Botswana. Custom itineraries for Victoria Falls, Hwange, Chobe, and Lower Zambezi.',
    images: [
      {
        url: 'https://onawhim.co.za/images/hero/safari-hero.jpg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bespoke African Safaris & Packages | On a Whim',
    description: 'Explore our curated safari packages across Zimbabwe, Zambia, and Botswana. Custom itineraries for Victoria Falls, Hwange, Chobe, and Lower Zambezi.',
    images: ['https://onawhim.co.za/images/hero/safari-hero.jpg'],
  },
};

export default function Page() {
  return <Safari isSafari={true} />;
}
