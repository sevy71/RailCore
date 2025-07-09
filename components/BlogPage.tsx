import React from 'react';
import { BLOG_POSTS_DATA } from '../blogPosts';
import Card from './common/Card';
import Button from './common/Button';

interface BlogPageProps {
  onViewPost: (id: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onViewPost }) => {
  if (!BLOG_POSTS_DATA || BLOG_POSTS_DATA.length === 0) {
    return (
       <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-6">
            The RailCore Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            Stay updated with the latest news, insights, tips, and success stories from the world of railway careers. Our blog is coming soon!
          </p>
           <div className="p-8 border border-dashed border-gray-300 rounded-lg bg-gray-50 max-w-xl mx-auto">
              <h2 className="text-2xl font-semibold text-brand-secondary mb-4">Blog Posts Coming Soon!</h2>
              <p className="text-gray-600 mb-6">
                  We're preparing insightful articles and updates. Stay tuned for expert advice and stories from the railway industry.
              </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-4">
            The RailCore Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Insider tips, expert guidance, and success stories to help you navigate your railway career journey.
          </p>
        </section>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-bold font-condensed text-brand-secondary mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">By {post.author} on {post.date}</p>
                <p className="text-gray-700 mb-6 flex-grow text-sm leading-relaxed">{post.excerpt}</p>
                <div className="mt-auto">
                  <Button variant="primary" size="sm" onClick={() => onViewPost(post.id)}>
                    Read More &rarr;
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
