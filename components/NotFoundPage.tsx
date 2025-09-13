import React from 'react';
import Button from './common/Button';

interface NotFoundPageProps {
  onGoHome: () => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onGoHome }) => {
  return (
    <div className="bg-white min-h-[50vh] flex items-center">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h1 className="text-5xl font-bold font-condensed text-brand-primary mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">The page you’re looking for doesn’t exist or has moved.</p>
        <Button variant="primary" onClick={onGoHome}>Back to Homepage</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;

