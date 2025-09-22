export const metadata = {
  title: 'Blog | Macco Tech',
  description: 'Welcome to the Blog Page of Macco Tech.',
  icons: {
    icon: '/Maccotech1-removebg-preview.png',
  },
  openGraph: {
    title: 'Blog | Macco Tech',
    description: 'Welcome to the Blog page of Macco Tech.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Macco Tech',
    description: 'Welcome to the Blog page of Macco Tech.',
  },
};

export default function ServiceLayout({ children }) {
  return <>{children}</>;
}
