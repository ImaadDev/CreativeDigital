// app/services/page.js
import ServicesClient from './ServicesClient';

export const metadata = {
  title: "Our Services - Web Development & Digital Marketing",
  description: "Explore our comprehensive digital services including web development, UI/UX design, digital marketing, and creative solutions. Transform your business with our expert team.",
  keywords: ["web development services", "digital marketing", "UI/UX design", "graphic design", "e-commerce solutions", "SEO services", "خدمات تطوير مواقع", "تسويق رقمي", "تصميم واجهات", "تصميم جرافيك", "حلول تجارة إلكترونية", "خدمات تحسين محركات البحث"],
  openGraph: {
    title: "Our Services - Web Development & Digital Marketing",
    description: "Explore our comprehensive digital services including web development, UI/UX design, digital marketing, and creative solutions.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Services - Web Development & Digital Marketing",
    description: "Explore our comprehensive digital services including web development, UI/UX design, digital marketing, and creative solutions.",
  },
  alternates: {
    canonical: '/services',
  },
  other: {
    // Arabic metadata
    'og:title:ar': 'خدماتنا - تطوير مواقع وتسويق رقمي',
    'og:description:ar': 'استكشف خدماتنا الرقمية الشاملة بما في ذلك تطوير المواقع، تصميم واجهات المستخدم، التسويق الرقمي، والحلول الإبداعية. حوّل أعمالك مع فريقنا المتخصص.',
    'twitter:title:ar': 'خدماتنا - تطوير مواقع وتسويق رقمي',
    'twitter:description:ar': 'استكشف خدماتنا الرقمية الشاملة بما في ذلك تطوير المواقع، تصميم واجهات المستخدم، التسويق الرقمي، والحلول الإبداعية.',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
