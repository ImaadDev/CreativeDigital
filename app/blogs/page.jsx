import BlogsClient from './BlogsClient';

export const metadata = {
  title: "Blog - Digital Marketing & Web Development Insights",
  description: "Stay updated with the latest trends in web development, digital marketing, UI/UX design, and technology. Expert insights and tutorials from CreativeDigital team.",
  keywords: ["blog", "web development blog", "digital marketing tips", "UI/UX design", "technology trends", "SEO blog", "مدونة", "مدونة تطوير مواقع", "نصائح التسويق الرقمي", "تصميم واجهات", "اتجاهات التكنولوجيا", "مدونة تحسين محركات البحث"],
  openGraph: {
    title: "Blog - Digital Marketing & Web Development Insights",
    description: "Stay updated with the latest trends in web development, digital marketing, UI/UX design, and technology.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blog - Digital Marketing & Web Development Insights",
    description: "Stay updated with the latest trends in web development, digital marketing, UI/UX design, and technology.",
  },
  alternates: {
    canonical: '/blogs',
  },
  other: {
    // Arabic metadata
    'og:title:ar': 'المدونة - رؤى التسويق الرقمي وتطوير المواقع',
    'og:description:ar': 'ابق على اطلاع بأحدث الاتجاهات في تطوير المواقع، التسويق الرقمي، تصميم واجهات المستخدم، والتكنولوجيا. رؤى ودروس من فريق CreativeDigital.',
    'twitter:title:ar': 'المدونة - رؤى التسويق الرقمي وتطوير المواقع',
    'twitter:description:ar': 'ابق على اطلاع بأحدث الاتجاهات في تطوير المواقع، التسويق الرقمي، تصميم واجهات المستخدم، والتكنولوجيا.',
  },
};

export default function BlogPage() {
  return <BlogsClient />;
}
