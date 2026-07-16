import type { Metadata } from 'next';
import GiantsGardenRoute from '../../../components/pages/GiantsGardenRoute';

/* ─── METADATA ───────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Giants of the Garden Route | 8-Day Small-Group Tour — On a Whim',
  description:
    'Whales, elephants & the 800-year-old Big Tree on an 8-day small-group Garden Route tour from Cape Town. Aug–Sep 2026 departures. Enquire free.',
  alternates: {
    canonical: 'https://onawhim.co.za/tours/giants-of-the-garden-route',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za/tours/giants-of-the-garden-route',
    title: 'Giants of the Garden Route | 8-Day Small-Group Tour — On a Whim',
    description:
      'Whales, elephants & the 800-year-old Big Tree on an 8-day small-group Garden Route tour from Cape Town. Aug–Sep 2026 departures. Enquire free.',
    images: [
      {
        // OG image: hero whale photo (single image, not the ad collage)
        url: 'https://onawhim.co.za/images/giants/giants-garden-route-whale-knysna.jpg',
        width: 1200,
        height: 630,
        alt: 'Humpback whale breaching off the Knysna Heads, Garden Route',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giants of the Garden Route | 8-Day Small-Group Tour — On a Whim',
    description:
      'Whales, elephants & the 800-year-old Big Tree on an 8-day small-group Garden Route tour from Cape Town. Aug–Sep 2026 departures. Enquire free.',
    images: ['https://onawhim.co.za/images/giants/giants-garden-route-whale-knysna.jpg'],
  },
};

/* ─── JSON-LD SCHEMA ─────────────────────────────────────────── */
/* TouristTrip with subEvent entries for each of the 4 departure dates.
   Provider: On a Whim Travel & Events · Tel: +27 62 138 0622 */
const touristTripSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'Giants of the Garden Route',
  description:
    'An 8-day, 7-night small-group Garden Route tour from Cape Town featuring whale watching off the Knysna Heads, elephant encounters at a Knysna sanctuary, and the 800-year-old Big Tree in Tsitsikamma forest.',
  url: 'https://onawhim.co.za/tours/giants-of-the-garden-route',
  image: 'https://onawhim.co.za/images/giants/giants-garden-route-whale-knysna.jpg',
  provider: {
    '@type': 'TravelAgency',
    name: 'On a Whim Travel & Events',
    url: 'https://onawhim.co.za',
    telephone: '+27 62 138 0622',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cape Town',
      addressCountry: 'ZA',
    },
  },
  touristType: ['Small Group Tour', 'Wildlife Tour', 'Nature Tour'],
  itinerary: {
    '@type': 'ItemList',
    numberOfItems: 8,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Cape Town to Albertinia & Sunset Safari' },
      { '@type': 'ListItem', position: 2, name: 'Sunrise Game Drive & Hidden Valley' },
      { '@type': 'ListItem', position: 3, name: 'Marine Giants & Knysna' },
      { '@type': 'ListItem', position: 4, name: 'Elephant Encounters & Into Tsitsikamma' },
      { '@type': 'ListItem', position: 5, name: 'Ancient Forests & Canopy Tours' },
      { '@type': 'ListItem', position: 6, name: 'The Ultimate Leap' },
      { '@type': 'ListItem', position: 7, name: 'Returning Through Wilderness' },
      { '@type': 'ListItem', position: 8, name: 'Scenic Return to Cape Town' },
    ],
  },
  /* subEvent: one entry per departure date */
  subEvent: [
    {
      '@type': 'Event',
      name: 'Giants of the Garden Route — 3 August 2026',
      startDate: '2026-08-03',
      endDate: '2026-08-10',
      eventStatus: 'https://schema.org/EventScheduled',
      maximumAttendeeCapacity: 16,
      location: {
        '@type': 'Place',
        name: 'Garden Route, South Africa',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Western Cape',
          addressCountry: 'ZA',
        },
      },
      organizer: {
        '@type': 'TravelAgency',
        name: 'On a Whim Travel & Events',
        url: 'https://onawhim.co.za',
        telephone: '+27 62 138 0622',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: 'https://onawhim.co.za/enquire?src=giants-garden-route',
      },
    },
    {
      '@type': 'Event',
      name: 'Giants of the Garden Route — 24 August 2026',
      startDate: '2026-08-24',
      endDate: '2026-08-31',
      eventStatus: 'https://schema.org/EventScheduled',
      maximumAttendeeCapacity: 16,
      location: {
        '@type': 'Place',
        name: 'Garden Route, South Africa',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Western Cape',
          addressCountry: 'ZA',
        },
      },
      organizer: {
        '@type': 'TravelAgency',
        name: 'On a Whim Travel & Events',
        url: 'https://onawhim.co.za',
        telephone: '+27 62 138 0622',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: 'https://onawhim.co.za/enquire?src=giants-garden-route',
      },
    },
    {
      '@type': 'Event',
      name: 'Giants of the Garden Route — 7 September 2026',
      startDate: '2026-09-07',
      endDate: '2026-09-14',
      eventStatus: 'https://schema.org/EventScheduled',
      maximumAttendeeCapacity: 16,
      location: {
        '@type': 'Place',
        name: 'Garden Route, South Africa',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Western Cape',
          addressCountry: 'ZA',
        },
      },
      organizer: {
        '@type': 'TravelAgency',
        name: 'On a Whim Travel & Events',
        url: 'https://onawhim.co.za',
        telephone: '+27 62 138 0622',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: 'https://onawhim.co.za/enquire?src=giants-garden-route',
      },
    },
    {
      '@type': 'Event',
      name: 'Giants of the Garden Route — 21 September 2026',
      startDate: '2026-09-21',
      endDate: '2026-09-28',
      eventStatus: 'https://schema.org/EventScheduled',
      maximumAttendeeCapacity: 16,
      location: {
        '@type': 'Place',
        name: 'Garden Route, South Africa',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Western Cape',
          addressCountry: 'ZA',
        },
      },
      organizer: {
        '@type': 'TravelAgency',
        name: 'On a Whim Travel & Events',
        url: 'https://onawhim.co.za',
        telephone: '+27 62 138 0622',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: 'https://onawhim.co.za/enquire?src=giants-garden-route',
      },
    },
  ],
};

/* ─── PAGE EXPORT ────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <GiantsGardenRoute />
    </>
  );
}
