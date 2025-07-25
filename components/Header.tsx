import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkBaseClasses = 'px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out';
  const linkActiveClasses = 'bg-brand-secondary text-white';
  const linkInactiveClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white';

  const renderLink = (to: string, label: string) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${linkBaseClasses} ${isActive ? linkActiveClasses : linkInactiveClasses}`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="bg-brand-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4rem] py-3">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white rounded-md">
              <img src="/RailCore_Logo_New.jpeg" alt="RailCore Logo" className="h-10 w-auto" />
            </NavLink>
          </div>

          {/* Main menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {renderLink('/', 'Home')}
            {renderLink('/day-in-the-life', 'Day in the Life')}
            {renderLink('/pros-cons', 'Pros & Cons')}
            {renderLink('/rewards', 'Rewards')}
            {renderLink('/e-learning', 'E-Learning')}
            {renderLink('/apply', 'Apply')}
            {renderLink('/team', 'Our Team')}
            {renderLink('/blog', 'Blog')}
            <a
              href="https://github.com/sevy71/railcore/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBaseClasses} ${linkInactiveClasses}`}
            >
              Forum
            </a>
          </div>

          {/* Mobile menu button */}
        
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="space-y-1 px-4 py-2">
          {renderLink('/', 'Home')}
          {renderLink('/day-in-the-life', 'Day in the Life')}
          {renderLink('/pros-cons', 'Pros & Cons')}
          {renderLink('/rewards', 'Rewards')}
          {renderLink('/e-learning', 'E-Learning')}
          {renderLink('/apply', 'Apply')}
          {renderLink('/team', 'Our Team')}
          {renderLink('/blog', 'Blog')}
          <a
            href="https://github.com/sevy71/railcore/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBaseClasses} ${linkInactiveClasses}`}
          >
            Forum
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;