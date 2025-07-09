
import React from 'react';
import Button from './common/Button';

interface ForumPageProps {
  navigateToMain: () => void;
}

const ForumPage: React.FC<ForumPageProps> = ({ navigateToMain }) => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-6">
          RailCore Community Forum
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          Connect with fellow aspiring train drivers, share experiences, ask questions, and get support from the RailCore community. Our forum is currently under construction.
        </p>
        <div className="p-8 border border-dashed border-gray-300 rounded-lg bg-gray-50 max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold text-brand-secondary mb-4">Forum Coming Soon!</h2>
            <p className="text-gray-600 mb-6">
                We're building a vibrant and supportive community space. Please check back later to join the conversation!
            </p>
            <Button variant="primary" size="md" onClick={navigateToMain}>
             Back to Homepage
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
