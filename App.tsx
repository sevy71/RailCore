
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import JourneySection from './components/JourneySection';
import ValuePropositionSection from './components/ValuePropositionSection';
import ContactSection from './components/ContactSection';
import MeetTheTeamPage from './components/MeetTheTeamPage'; // Changed from AboutUsPage
import DayInTheLifePage from './components/DayInTheLifePage';
import ELearningPage from './components/ELearningPage';
import ApplicationProcessPage from './components/ApplicationProcessPage';
import ForumPage from './components/ForumPage';
import BlogPage from './components/BlogPage';
import ProsConsPage from './components/ProsConsPage';
import BenefitsPage from './components/BenefitsPage';
import BlogPostPage from './components/BlogPostPage.tsx'; // New import

// Expanded PageView type
type PageView =
  | 'main'
  | 'meetTheTeam' // Changed from aboutUs
  | 'dayInTheLife'
  | 'eLearning'
  | 'applicationProcess'
  | 'forum'
  | 'blog'
  | 'prosCons'
  | 'benefits';

interface HeaderProps {
  navigateTo: (page: PageView) => void;
  onGetStartedClick: () => void;
  currentPage: PageView;
}

interface FooterProps {
  navigateTo: (page: PageView) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo, onGetStartedClick, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTheRoleDropdownOpen, setIsTheRoleDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeDropdownTimerRef = useRef<number | null>(null);

  const dropdownLinks = [
    { name: "Day in the Life", page: "dayInTheLife" as PageView },
    { name: "Pros & Cons", page: "prosCons" as PageView },
    { name: "Benefits & Rewards", page: "benefits" as PageView },
  ];

  const isTheRoleActive = dropdownLinks.some(link => link.page === currentPage);

  const navLinkClasses = (pageName: PageView) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
      currentPage === pageName
        ? 'bg-brand-secondary text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  const mobileNavLinkClasses = (pageName: PageView) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out ${
      currentPage === pageName
        ? 'bg-brand-secondary text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  const dropdownItemClasses = (pageName: PageView) =>
    `block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ease-in-out rounded-md ${
      currentPage === pageName
        ? 'bg-railway-green text-white'
        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
    }`;

  const openDropdown = () => {
    if (closeDropdownTimerRef.current) {
      clearTimeout(closeDropdownTimerRef.current);
      closeDropdownTimerRef.current = null;
    }
    setIsTheRoleDropdownOpen(true);
  };

  const closeDropdownWithDelay = () => {
    closeDropdownTimerRef.current = window.setTimeout(() => {
      setIsTheRoleDropdownOpen(false);
    }, 300); // 300ms delay
  };

  const handleDropdownItemClick = (page: PageView) => {
    // 1) close menus
    setIsTheRoleDropdownOpen(false);
    setIsMobileMenuOpen(false);

    // 2) navigate *after* a tiny delay so the menu actually un-mounts first
    setTimeout(() => {
      navigateTo(page);
    }, 100);
  };

  const navAndClose = (page: PageView) => {
    setIsMobileMenuOpen(false);
    navigateTo(page);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (closeDropdownTimerRef.current) {
          clearTimeout(closeDropdownTimerRef.current);
          closeDropdownTimerRef.current = null;
        }
        setIsTheRoleDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeDropdownTimerRef.current) {
        clearTimeout(closeDropdownTimerRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-brand-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4rem] py-3">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => navigateTo('main')} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white rounded-md">
              <img src="RailCore_Logo_New.jpeg" alt="RailCore Logo" className="h-10 w-auto" />
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="flex items-baseline space-x-4">
              <button onClick={() => navigateTo('main')} className={navLinkClasses('main')}>Home</button>
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdownWithDelay}
              >
                <button
                  onClick={() => setIsTheRoleDropdownOpen(!isTheRoleDropdownOpen)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
                    isTheRoleActive
                      ? 'bg-brand-secondary text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isTheRoleDropdownOpen}
                >
                  The Role
                  <svg className={`inline-block ml-1 h-4 w-4 transition-transform duration-200 ${isTheRoleDropdownOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isTheRoleDropdownOpen && (
                    <div
                      className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50 p-1 space-y-1"
                    >
                      {dropdownLinks.map(link => (
                        <button
                          key={link.page}
                          onClick={() => handleDropdownItemClick(link.page)}
                          className={dropdownItemClasses(link.page)}
                          role="menuitem"
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                )}
              </div>
              <button onClick={() => navigateTo('eLearning')} className={navLinkClasses('eLearning')}>E-Learning</button>
              <button onClick={() => navigateTo('applicationProcess')} className={navLinkClasses('applicationProcess')}>Application Process</button>
              <button onClick={() => navigateTo('meetTheTeam')} className={navLinkClasses('meetTheTeam')}>Meet the Team</button>
              <button onClick={() => navigateTo('blog')} className={navLinkClasses('blog')}>Blog</button>
              <button onClick={() => navigateTo('forum')} className={navLinkClasses('forum')}>Forum</button>
            </div>
            <button
              onClick={onGetStartedClick}
              className="bg-railway-green hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-railway-green focus:ring-offset-2 focus:ring-offset-brand-primary"
            >
              Get Started
            </button>
          </div>

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
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => navAndClose('main')} className={mobileNavLinkClasses('main')}>Home</button>
            {/* Flattened "The Role" links */}
            <button onClick={() => navAndClose('dayInTheLife')} className={mobileNavLinkClasses('dayInTheLife')}>Day in the Life</button>
            <button onClick={() => navAndClose('prosCons')} className={mobileNavLinkClasses('prosCons')}>Pros &amp; Cons</button>
            <button onClick={() => navAndClose('benefits')} className={mobileNavLinkClasses('benefits')}>Benefits &amp; Rewards</button>
            <button onClick={() => navAndClose('eLearning')} className={mobileNavLinkClasses('eLearning')}>E-Learning</button>
            <button onClick={() => navAndClose('applicationProcess')} className={mobileNavLinkClasses('applicationProcess')}>Application Process</button>
            <button onClick={() => navAndClose('meetTheTeam')} className={mobileNavLinkClasses('meetTheTeam')}>Meet the Team</button>
            <button onClick={() => navAndClose('blog')} className={mobileNavLinkClasses('blog')}>Blog</button>
            <button onClick={() => navAndClose('forum')} className={mobileNavLinkClasses('forum')}>Forum</button>
            <button
              onClick={() => { onGetStartedClick(); setIsMobileMenuOpen(false); }}
              className="mt-2 w-full text-center bg-railway-green hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 ease-in-out"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const currentYear = new Date().getFullYear();

  const footerLinkGroups = [
    {
      title: 'Explore RailCore',
      links: [
        { name: 'The Role', page: 'dayInTheLife' as PageView },
        { name: 'E-Learning', page: 'eLearning' as PageView },
        { name: 'Application Steps', page: 'applicationProcess' as PageView },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Meet the Team', page: 'meetTheTeam' as PageView }, // Changed
        { name: 'Success Stories', targetSectionId: 'testimonials' },
        { name: 'Our Mission', page: 'meetTheTeam' as PageView }, // Point to Meet the Team, can have mission there
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Forum', page: 'forum' as PageView },
        { name: 'Blog', page: 'blog' as PageView },
        { name: 'Contact Us', targetSectionId: 'contact' },
      ],
    },
  ];

  const handleFooterLinkClick = (page?: PageView, targetSectionId?: string) => {
    if (page) {
      navigateTo(page);
      window.scrollTo(0,0);
    } else if (targetSectionId) {
      navigateTo('main');
      setTimeout(() => {
        const element = document.getElementById(targetSectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (targetSectionId === 'testimonials') {
            const testimonialsSection = document.querySelector('section:nth-of-type(2)');
            if(testimonialsSection) testimonialsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };


  return (
    <footer className="bg-brand-secondary text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1 mb-6 md:mb-0">
            <button onClick={() => handleFooterLinkClick('main')} className="inline-block mb-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-secondary focus:ring-white rounded-md">
            <img src="RailCore_Logo_New.jpeg" alt="RailCore Logo" className="h-10 w-auto" />
            </button>
            <p className="text-sm">
              Your comprehensive guide to starting and succeeding in a train driving career.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h5 className="font-semibold text-white uppercase tracking-wider mb-4">{group.title}</h5>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleFooterLinkClick(link.page, link.targetSectionId)}
                      className="hover:text-railway-yellow-green transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} RailCore. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-railway-yellow-green transition-colors duration-200">Privacy Policy</a>
            <span className="mx-2 text-gray-500">|</span>
            <a href="#" className="hover:text-railway-yellow-green transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('main');
  const [viewingPostId, setViewingPostId] = useState<string | null>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    setViewingPostId(null); // Reset blog post view on any main navigation change
    window.scrollTo(0, 0);
  };

  const handleGetStartedClick = () => {
    if (currentPage !== 'main') {
      navigateTo('main');
      setTimeout(() => {
        contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderMainPage = () => (
    <>
      <HeroSection />
       <JourneySection />
      <TestimonialsSection />
      <ValuePropositionSection />
      <div ref={contactSectionRef}>
        <ContactSection />
      </div>
    </>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return renderMainPage();
      case 'meetTheTeam':
        return <MeetTheTeamPage navigateToMain={() => navigateTo('main')} />;
      case 'dayInTheLife':
        return <DayInTheLifePage navigateToMain={() => navigateTo('main')} />;
      case 'eLearning':
        return <ELearningPage navigateToMain={() => navigateTo('main')} />;
      case 'applicationProcess':
        return <ApplicationProcessPage navigateToMain={() => navigateTo('main')} />;
      case 'forum':
        return <ForumPage navigateToMain={() => navigateTo('main')} />;
      case 'blog':
        return viewingPostId 
          ? <BlogPostPage postId={viewingPostId} onBack={() => setViewingPostId(null)} />
          : <BlogPage onViewPost={(id) => { setViewingPostId(id); window.scrollTo(0, 0); }} />;
      case 'prosCons':
        return <ProsConsPage navigateToMain={() => navigateTo('main')} />;
      case 'benefits':
        return <BenefitsPage navigateToMain={() => navigateTo('main')} />;
      default:
        return renderMainPage();
    }
  };

  return (
    <div className="font-sans bg-gray-100">
      <Header navigateTo={navigateTo} onGetStartedClick={handleGetStartedClick} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
