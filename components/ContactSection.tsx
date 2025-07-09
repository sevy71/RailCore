
import React, { useState } from 'react';
import { CurrentSituation, ContactFormData } from '../types';
import { CURRENT_SITUATION_OPTIONS } from '../constants';
import Button from './common/Button';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    currentSituation: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value as CurrentSituation | string }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message || !formData.currentSituation) {
      setError("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset form after a delay (optional)
    setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', currentSituation: '', message: '' });
        setIsSubmitted(false); // Allow new submissions
    }, 8000); // Increased delay
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-primary text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-condensed text-center mb-4">
          Get Rail Core: Start Your Career Transformation
        </h2>
        <p className="text-lg text-center text-gray-300 mb-10 md:mb-12 max-w-2xl mx-auto">
          Ready to take the first step with RailCore? Contact us for more information on our programs and how we can help you navigate the path to a rewarding railway career.
        </p>

        {isSubmitted ? (
          <div className="text-center bg-railway-green p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
            <p>Your message has been sent. We'll be in touch with you shortly to discuss your journey with RailCore.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-2xl text-gray-800">
            {error && <p className="text-red-600 bg-red-100 p-3 rounded-md mb-4 text-sm">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-railway-green focus:border-railway-green transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-railway-green focus:border-railway-green transition-colors" />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-railway-green focus:border-railway-green transition-colors" />
            </div>
            <div className="mt-5">
              <label htmlFor="currentSituation" className="block text-sm font-medium text-gray-700 mb-1">Current Situation *</label>
              <select name="currentSituation" id="currentSituation" value={formData.currentSituation} onChange={handleChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-railway-green focus:border-railway-green bg-white transition-colors">
                <option value="" disabled>Select your situation...</option>
                {CURRENT_SITUATION_OPTIONS.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Questions *</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-railway-green focus:border-railway-green transition-colors"></textarea>
            </div>
            <div className="mt-8">
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Get Started with RailCore'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
