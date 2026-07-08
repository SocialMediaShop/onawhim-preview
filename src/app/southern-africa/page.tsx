import type { Metadata } from 'next';
import Safari from '../../components/pages/Safari';

export const metadata: Metadata = {
  title: 'Southern Africa Bespoke Safaris & Tours | On a Whim',
  description: 'Explore our curated safari packages across Zimbabwe, Zambia, and Botswana. Custom itineraries for Victoria Falls, Hwange, Chobe, and Lower Zambezi.',
  alternates: {
    canonical: 'https://onawhim.co.za/southern-africa',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za/southern-africa',
    title: 'Southern Africa Bespoke Safaris & Tours | On a Whim',
    description: 'Explore our curated safari packages across Zimbabwe, Zambia, and Botswana. Custom itineraries for Victoria Falls, Hwange, Chobe, and Lower Zambezi.',
    images: [
      {
        url: 'https://onawhim.co.za/images/hero/southern-africa-hero.jpg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Southern Africa Bespoke Safaris & Tours | On a Whim',
    description: 'Explore our curated safari packages across Zimbabwe, Zambia, and Botswana. Custom itineraries for Victoria Falls, Hwange, Chobe, and Lower Zambezi.',
    images: ['https://onawhim.co.za/images/hero/southern-africa-hero.jpg'],
  },
};

export default function Page() {
  return <Safari isSafari={false} />;
}
