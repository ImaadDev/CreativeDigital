'use client';
import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import BlogDetailsHero from '@/components/blogs/BlogDetailsHero';
import BlogDetailsContent from '@/components/blogs/BlogDetailsContent';
import { categoryTitles } from '../../../utils/categories';


export default function BlogDetailsPage({ params }) {
  const slug = use(params);
  const [blog, setBlog] = useState(null);
  const [prevBlog, setPrevBlog] = useState(null);
  const [nextBlog, setNextBlog] = useState(null);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const fetchBlog = async () => {
    try {
      const query = groq`
        *[_type == "blogs" && slug.current == $slug][0]{
          _id,
          title,
          titleAr,
          "slug": slug.current,
          category,
          publishedAt,
          introduction,
          introductionAr,
          sections,
          sectionsAr,
          conclusion,
          conclusionAr,
          images[]{
            asset->{url}
          }
        }
      `;

      const blogData = await client.fetch(query, { slug: slug.slug });

      if (blogData) {
        // Map category to human-readable title
        blogData.categoryTitle = categoryTitles[blogData.category] || blogData.category;

        setBlog(blogData);

        // Fetch navigation blogs
        const navQuery = groq`
          *[_type == "blogs"] | order(publishedAt desc) {
            _id,
            title,
            titleAr,
            "slug": slug.current,
            publishedAt
          }
        `;

        const allBlogs = await client.fetch(navQuery);
        const currentIndex = allBlogs.findIndex(b => b.slug === slug.slug);
        setPrevBlog(currentIndex > 0 ? allBlogs[currentIndex - 1] : null);
        setNextBlog(currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  if (slug?.slug) {
    fetchBlog();
  }
}, [slug]);


  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p>Loading blog...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-gray-400 mb-8">
            The blog you are looking for does not exist or was removed.
          </p>
          <Link
            href="/blogs"
            className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <BlogDetailsHero blog={blog} />
      <BlogDetailsContent blog={blog} prevBlog={prevBlog} nextBlog={nextBlog} />
    </>
  );
}
