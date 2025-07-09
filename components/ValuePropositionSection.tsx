
import React from 'react';
import { VALUE_PROPOSITION_GET, VALUE_PROPOSITION_ELSEWHERE } from '../constants';

// Inline SVG for CheckCircleIcon
const CheckCircleIconSolid: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.06-1.06l-3.25 3.25-1.5-1.5a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.75-3.75Z" clipRule="evenodd" />
  </svg>
);

// Inline SVG for XCircleIcon
const XCircleIconSolid: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75 9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
  </svg>
);


const ValuePropositionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-condensed text-center text-brand-secondary mb-4">
          Why This Works: Your <span className="text-railway-green">Unfair Advantage</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 md:mb-16">
            We provide what others can't: a direct line to decades of real-world railway expertise, current industry practices, and the mindset of those who conduct assessments.
        </p>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* What You Get Column */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border-l-4 border-railway-green">
            <h3 className="text-2xl font-semibold text-railway-green mb-6 font-condensed">What You GET With Us:</h3>
            <ul className="space-y-4">
              {VALUE_PROPOSITION_GET.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIconSolid className="w-6 h-6 text-railway-green mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Won't Find Elsewhere Column */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border-l-4 border-railway-red">
            <h3 className="text-2xl font-semibold text-railway-red mb-6 font-condensed">What You AVOID With Us:</h3>
            <ul className="space-y-4">
              {VALUE_PROPOSITION_ELSEWHERE.map((item, index) => (
                <li key={index} className="flex items-start">
                  <XCircleIconSolid className="w-6 h-6 text-railway-red mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center bg-gray-200 p-8 rounded-lg">
            <p className="text-xl font-semibold text-brand-secondary max-w-3xl mx-auto">
                Our commitment at <strong className="text-brand-primary">RailCore</strong> is to your <strong className="text-brand-primary">total career transformation</strong>. 
                With <strong className="text-brand-primary">over 60 years of combined, active railway experience</strong> spanning driving, training, and management, we offer unparalleled, practical guidance. 
                This isn't just information; it's the <strong className="text-railway-green">insider's toolkit for success</strong>.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
