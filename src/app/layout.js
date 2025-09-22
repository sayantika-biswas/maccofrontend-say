import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import WhatsappButton from './Component/WhatsappButton';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

const titleMap = {
  'about-us': 'About Us',
  service: 'Our Services',
  AndroidAppDevelopment: 'Android App Development',
  iOSAppDevelopment: 'IOS App Development',
  ReactNativeAppDevelopment: 'React Native App Development',
  'ecommerce-application-development': 'Ecommerce Application Development',
  ShopifyDevelopment: 'Shopify Development',
  'Graphics-design': 'Graphics Design',
  Branding: 'Branding',
  ReactJsDevelopment: 'ReactJs Development',
  Social: 'Social',
  email: 'Email',
  contact: 'Contact Us',
  careers: 'Careers',
  portfolio: 'Portfolio',
  'case-study': 'Case Study',
};

export async function generateMetadata({ params }) {
  // If params.slug exists, join the slug array into a path string
  let path = '';
  if (params?.slug) {
    path = params.slug.join('/');
  }

  // If path is empty, it means home page or root route
  if (!path) {
    return {
      title: 'Macco Tech',
      description: 'Welcome to Macco Tech home page.',
      icons: {
        icon: '/Maccotech1-removebg-preview.png',
      },
      openGraph: {
        title: 'Macco Tech',
        description: 'Welcome to Macco Tech home page.',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Macco Tech',
        description: 'Welcome to Macco Tech home page.',
      },
    };
  }

  // Format the title from titleMap or fallback to capitalized words of last segment of path
  const formattedTitle =
    titleMap[path] ||
    path
      .split('/')
      .pop()
      ?.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') ||
    'Macco Tech';

  return {
    title: {
      default: 'Macco Tech',
      template: `%s | Macco Tech`,
    },
    description: `Welcome to the ${formattedTitle} page of Macco Tech.`,
    icons: {
      icon: '/Maccotech1-removebg-preview.png',
    },
    openGraph: {
      title: `${formattedTitle} | Macco Tech`,
      description: `Welcome to the ${formattedTitle} page of Macco Tech.`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${formattedTitle} | Macco Tech`,
      description: `Welcome to the ${formattedTitle} page of Macco Tech.`,
    },
  };
}

export default function RootLayout({ children }) {

  return (
     <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
