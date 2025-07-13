import React from 'react';
import { MODULE_COLORS } from '../constants';
import { Module } from '../types';

interface JourneySectionProps {
  modules: Module[];
}

const JourneySection: React.FC<JourneySectionProps> = ({ modules }) => {
  return (
    <div className="journey-section">
      {modules.map((module) => (
        <div
          key={module.id}
          className={`module-card ${module.colorName} border ${MODULE_COLORS[module.colorName].border} ${MODULE_COLORS[module.colorName].bg}`}
        >
          <div
            className={`icon-wrapper ${[ 'railway-red', 'railway-red-orange' ].includes(module.colorName) ? MODULE_COLORS[module.colorName].iconColorOnLightBg : MODULE_COLORS[module.colorName].iconColor}`}
          >
            {module.icon}
          </div>
          <h3
            className={`module-title ${[ 'railway-red', 'railway-red-orange' ].includes(module.colorName) ? MODULE_COLORS[module.colorName].textOnLightBg : MODULE_COLORS[module.colorName].text}`}
          >
            {module.title}
          </h3>
          <p className="module-description">{module.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JourneySection;