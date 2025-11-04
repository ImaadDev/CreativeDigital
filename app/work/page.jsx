import WorkClient from './WorkClient';

export const metadata = {
  title: "Our Portfolio - CreativeDigital Projects & Work",
  description: "Explore our portfolio of successful web development, UI/UX design, and digital marketing projects. See how we've helped businesses transform their online presence.",
  keywords: ["portfolio", "web development projects", "UI/UX design portfolio", "digital marketing case studies", "creative work", "معرض أعمال", "مشاريع تطوير مواقع", "معرض تصميم واجهات", "دراسات حالة تسويق رقمي", "أعمال إبداعية"],
  openGraph: {
    title: "Our Portfolio - CreativeDigital Projects & Work",
    description: "Explore our portfolio of successful web development, UI/UX design, and digital marketing projects.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Portfolio - CreativeDigital Projects & Work",
    description: "Explore our portfolio of successful web development, UI/UX design, and digital marketing projects.",
  },
  alternates: {
    canonical: '/work',
  },
  other: {
    // Arabic metadata
    'og:title:ar': 'معرض أعمالنا - مشاريع CreativeDigital',
    'og:description:ar': 'استكشف معرض أعمالنا من المشاريع الناجحة في تطوير المواقع، تصميم واجهات المستخدم، والتسويق الرقمي. شاهد كيف ساعدنا الشركات في تحويل وجودها عبر الإنترنت.',
    'twitter:title:ar': 'معرض أعمالنا - مشاريع CreativeDigital',
    'twitter:description:ar': 'استكشف معرض أعمالنا من المشاريع الناجحة في تطوير المواقع، تصميم واجهات المستخدم، والتسويق الرقمي.',
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
