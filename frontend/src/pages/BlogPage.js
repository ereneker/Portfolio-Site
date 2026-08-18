import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/mock';
import { ArrowUpRight } from 'lucide-react';

const BlogPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="pt-28 md:pt-36 px-6 md:px-12 lg:px-16 pb-24 min-h-screen"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      {/* Page Header */}
      <section className="mb-16 md:mb-24">
        <p className="text-[12px] md:text-[13px] tracking-[0.35em] text-white/60 font-light uppercase mb-6">
          Blog
        </p>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.05]">
          Notes on games, sound, film and things I'm building.
        </h1>
      </section>

      {/* Posts */}
      <section>
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="group block border-t border-white/15 py-8 md:py-10"
          >
            <div className="grid md:grid-cols-[140px_1fr_240px] gap-5 md:gap-8 items-start">

              {/* Date / Category */}
              <div>
                <p className="text-xs md:text-sm text-white/50 mb-2">
                  {post.date}
                </p>

                <p className="text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {post.category}
                </p>
              </div>

              {/* Post Text */}
              <div>
                <div className="flex items-start gap-3">
                  <h2 className="font-display text-2xl md:text-4xl leading-tight group-hover:opacity-65 transition-opacity">
                    {post.title}
                  </h2>

                  <ArrowUpRight
                    size={16}
                    className="mt-2 text-white/30 group-hover:text-white/70 transition-colors"
                  />
                </div>

                <p className="mt-4 text-sm md:text-base text-white/60 leading-7 max-w-2xl">
                  {post.excerpt}
                </p>
              </div>

              {/* Thumbnail */}
              {post.image && (
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
            </div>
          </Link>
        ))}

        <div className="border-t border-white/15" />
      </section>
    </div>
  );
};

export default BlogPage;