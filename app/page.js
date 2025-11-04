import HomeClient from './HomeClient';

export const metadata = {
  title: "CreativeDigital - Digital Solutions & Web Development",
  description: "Professional digital marketing, web development, and creative solutions. Transform your business with our expert team of designers and developers.",
  keywords: ["web development", "digital marketing", "UI/UX design", "graphic design", "e-commerce", "SEO", "تطوير مواقع", "تسويق رقمي", "تصميم واجهات", "تصميم جرافيك", "تجارة إلكترونية", "تحسين محركات البحث"],
  openGraph: {
    title: "CreativeDigital - Digital Solutions & Web Development",
    description: "Professional digital marketing, web development, and creative solutions.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
  },
  twitter: {
    card: 'summary_large_image',
    title: "CreativeDigital - Digital Solutions & Web Development",
    description: "Professional digital marketing, web development, and creative solutions.",
  },
  alternates: {
    canonical: '/',
  },
  other: {
    // Arabic metadata
    'og:title:ar': 'CreativeDigital - حلول رقمية وتطوير مواقع',
    'og:description:ar': 'تسويق رقمي احترافي، تطوير مواقع، وحلول إبداعية. حوّل أعمالك مع فريقنا المتخصص من المصممين والمطورين.',
    'twitter:title:ar': 'CreativeDigital - حلول رقمية وتطوير مواقع',
    'twitter:description:ar': 'تسويق رقمي احترافي، تطوير مواقع، وحلول إبداعية.',
  },
};

export default function Home() {
  return <HomeClient />;
}
