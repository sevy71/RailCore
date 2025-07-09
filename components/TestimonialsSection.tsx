
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import Card from './common/Card';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-condensed text-center text-brand-secondary mb-12 md:mb-16">
          Real Success Stories from Real Drivers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="p-6 md:p-8 flex-grow flex flex-col items-center">
                <img 
                  src={testimonial.photoUrl} 
                  alt={`Photo of ${testimonial.name}`} 
                  className="w-28 h-28 rounded-full mx-auto mb-5 border-4 border-railway-yellow-green shadow-md"
                />
                <h3 className="text-xl font-semibold text-center text-brand-primary mb-1">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 text-center mb-1">{testimonial.currentRole}</p>
                <p className="text-xs text-gray-500 text-center mb-4">
                  {testimonial.experience} | {testimonial.location}
                </p>
                <blockquote className="text-gray-700 italic text-center text-md leading-relaxed flex-grow">
                  <span className="text-2xl text-gray-400 leading-none mr-1">“</span>
                  {testimonial.quote}
                  <span className="text-2xl text-gray-400 leading-none ml-1">”</span>
                </blockquote>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
