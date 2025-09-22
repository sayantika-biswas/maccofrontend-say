export const metadata = {
  title: 'About us | Macco Tech',
  description: 'Welcome to the About us page of Macco Tech.',
  icons: {
    icon: '/Maccotech1-removebg-preview.png',
  },
  openGraph: {
    title: 'About us | Macco Tech',
    description: 'Welcome to the About us page of Macco Tech.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About us | Macco Tech',
    description: 'Welcome to the About us page of Macco Tech.',
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
