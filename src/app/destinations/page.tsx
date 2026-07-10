import type { Metadata } from 'next';
import Home from '../../components/pages/Home';

export const metadata: Metadata = {
  robots: 'noindex, follow',
};

export default function Page() {
  return <Home />;
}
