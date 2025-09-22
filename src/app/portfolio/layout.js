export const metadata = {
  title: 'Portfolio | Macco Tech',
  description: 'Welcome to the Portfolio page of Macco Tech.',
  icons: {
    icon: '/Maccotech1-removebg-preview.png',
  },
  openGraph: {
    title: 'Portfolio | Macco Tech',
    description: 'Welcome to the Portfolio page of Macco Tech.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Macco Tech',
    description: 'Welcome to the Portfolio page of Macco Tech.',
  },
};

export default function ServiceLayout({ children }) {
  return <>{children}</>;
}
