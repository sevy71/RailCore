
import React from 'react';
import { MODULES_DATA, MODULE_COLORS } from '../constants';
import Card from './common/Card';

const JourneySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-condensed text-center text-brand-secondary mb-16">
          Your Complete Career Transformation Journey
        </h2>
        {/* Parent div now controls inter-module spacing */}
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-16">
          {MODULES_DATA.map((module, index) => {
            const colorScheme = MODULE_COLORS[module.colorName];
            const alignmentClass = index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right md:flex-row-reverse';
            const iconMarginClass = index % 2 === 0 ? 'md:mr-6' : 'md:ml-6';
            
            return (
              // Removed mb-10 md:mb-16 last:mb-0 from this div
              <div key={module.id} className={`md:flex ${alignmentClass} items-center`}>
                {/* Icon for desktop */}
                <div className={`hidden md:flex flex-shrink-0 items-center justify-center w-20 h-20 rounded-full ${colorScheme.bg} shadow-lg ${iconMarginClass} mb-4 md:mb-0`}>
                  {React.cloneElement(module.icon, { className: `w-10 h-10 ${colorScheme.iconColor}` })}
                </div>

                <Card className={`w-full shadow-2xl border-t-8 ${colorScheme.border} transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl`}>
                  <div className={`p-6 ${colorScheme.bg} ${colorScheme.text} rounded-t-md flex items-center md:block`}>
                    {/* Icon for mobile */}
                    <div className={`md:hidden flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full ${colorScheme.text === 'text-white' ? 'bg-white bg-opacity-20' : 'bg-gray-200'} mr-4`}>
                      {React.cloneElement(module.icon, { className: `w-7 h-7 ${colorScheme.text === 'text-white' ? colorScheme.iconColorOnLightBg : colorScheme.iconColor}`})}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold font-condensed ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                        Module {module.moduleNumber}: {module.title}
                      </h3>
                      <p className={`text-sm font-medium opacity-90 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>{module.stageIndicator}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className={`text-gray-700 leading-relaxed ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>{module.description}</p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
