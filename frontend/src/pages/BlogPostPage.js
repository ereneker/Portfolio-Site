import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '@/data/mock';
import { ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="pt-36 px-6 md:px-12 lg:px-16 min-h-screen">
        <p className="text-white/60 mb-8">Post not found.</p>

        <Link
          to="/blog"
          className="text-sm text-white hover:opacity-60 transition-opacity"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-28 md:pt-36 px-6 md:px-12 lg:px-16 pb-24 min-h-screen">

      {/* Back */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white mb-16 transition-colors"
      >
        <ArrowLeft size={14} />
        Blog
      </Link>

      {/* Header */}
      <header className="max-w-5xl mb-12 md:mb-16">

        <div className="flex flex-wrap gap-4 mb-6 text-xs tracking-[0.18em] uppercase text-white/45">
          <span>{post.category}</span>
          <span>{post.date}</span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02]">
          {post.title}
        </h1>

        <p className="mt-8 text-base md:text-lg text-white/65 leading-8 max-w-3xl">
          {post.excerpt}
        </p>
      </header>

      {/* Main Image */}
      {post.image && (
        <div className="max-w-6xl mb-14 md:mb-20">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Article */}
      <div className="max-w-3xl">
  {post.content.map((block, index) => {
    if (block.type === "paragraph") {
      return (
        <p
          key={index}
          className="text-base md:text-lg leading-8 text-white/75 mb-8"
        >
          {block.text}
        </p>
      );
    }

    if (block.type === "image") {
      return (
        <figure key={index} className="my-12">
          <img
            src={block.src}
            alt={block.alt || ""}
            className="w-full h-auto object-cover"
          />

          {block.caption && (
            <figcaption className="mt-3 text-xs text-white/40">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    if (block.type === "video") {
      return (
        <div key={index} className="my-12">
          <video
            src={block.src}
            controls
            playsInline
            className="w-full h-auto"
          />
        </div>
      );
    }

    if (block.type === "heading") {
      return (
        <h2
          key={index}
          className="font-display text-2xl md:text-3xl mt-14 mb-6"
        >
          {block.text}
        </h2>
      );
    }

    return null;
  })}
</div>

    </article>
  );
};

export default BlogPostPage;