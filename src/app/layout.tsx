import type { Metadata } from 'next';
import { Jost, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import Layout from '../components/Layout';
import './globals.css';

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'On a Whim | Bespoke African Safaris & Tours',
  description: 'On a Whim offers bespoke African safaris and tours across South Africa, Zimbabwe, Zambia, and Botswana. Expert-guided, personalized journeys tailored to you.',
  alternates: {
    canonical: 'https://onawhim.co.za',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
      </head>
      <body className={`${jost.variable} ${cormorant.variable}`}>
        <Layout>
          {children}
        </Layout>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TM4X2ZCF9R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TM4X2ZCF9R');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '669598603458202');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Metricool Tracking Code */}
        <Script id="metricool" strategy="afterInteractive">
          {`
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],c=document.createElement("script");
              c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)
            }
            loadScript(function(){beTracker.t({hash:"c1c4c78379520219639903032fa6622e"})});
          `}
        </Script>

        {/* WhatsApp Widget */}
        <Script
          src="https://widget.tochat.be/bundle.js?key=6364c269-ea3a-4fea-ac4d-d722b144d23d"
          strategy="lazyOnload"
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=669598603458202&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
