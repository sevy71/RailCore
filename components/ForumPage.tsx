import React, { useEffect } from 'react';
import Button from './common/Button';

interface ForumPageProps {
  navigateToMain: () => void;
}

const ForumPage: React.FC<ForumPageProps> = ({ navigateToMain }) => {
  useEffect(() => {
    window.location.replace('https://github.com/sevy71/railcore/discussions');
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">
        Redirecting to forum...{' '}
        <a
          href="https://github.com/sevy71/railcore/discussions"
          className="underline text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here if you are not redirected.
        </a>
      </p>
    </div>
  );
};

export default ForumPage;
