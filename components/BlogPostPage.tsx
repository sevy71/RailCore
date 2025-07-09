import React from 'react';
import { BLOG_POSTS_DATA } from '../blogPosts';
import { BlogPost, BlogPostContentBlock } from '../types';
import Button from './common/Button';
import Card from './common/Card';

interface BlogPostPageProps {
  postId: string;
  onBack: () => void;
}

const renderContentBlock = (block: BlogPostContentBlock, index: number) => {
  switch (block.type) {
    case 'heading':
      return <h2 key={index} className="text-2xl md:text-3xl font-semibold font-condensed text-brand-secondary mt-8 mb-4">{block.content}</h2>;
    case 'paragraph':
      return <p key={index} className="text-gray-700 leading-relaxed mb-4">{block.content}</p>;
    case 'list':
      if (Array.isArray(block.content)) {
        return (
          <ul key={index} className="list-disc list-outside space-y-3 pl-5 mb-4">
            {block.content.map((item, i) => (
              <li key={i} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
      }
      return null;
    case 'tip':
       return (
        <div key={index} className="mt-6 p-4 bg-yellow-100 border-l-4 border-railway-orange rounded-r-md">
            <h3 className="font-bold text-lg text-railway-orange mb-2">Top Tips to Prepare</h3>
            <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: block.content as string }} />
        </div>
       )
    default:
      return null;
  }
};


const BlogPostPage: React.FC<BlogPostPageProps> = ({ postId, onBack }) => {
  const post = BLOG_POSTS_DATA.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="bg-white py-16 md:py-24 text-center">
        <h1 className="text-2xl text-brand-secondary mb-4">Post not found</h1>
        <p className="text-gray-600 mb-6">The blog post you're looking for doesn't seem to exist.</p>
        <Button variant="primary" onClick={onBack}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 max-w-3xl py-16 md:py-24">
        <article>
          <header className="mb-8 border-b pb-8">
            <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-3 leading-tight">{post.title}</h1>
            <p className="text-gray-600">
              Posted by <span className="font-semibold text-brand-secondary">{post.author}</span> on <time dateTime={post.date}>{post.date}</time>
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {post.content.map(renderContentBlock)}
          </div>
        </article>

        <div className="mt-12 pt-8 border-t text-center">
            <Button variant="secondary" onClick={onBack}>
                &larr; Back to All Posts
            </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
