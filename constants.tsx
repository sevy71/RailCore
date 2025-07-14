
import React from 'react';
import { Testimonial, Module, CurrentSituation } from './types';

// SVG Icon Components for Modules
const Module1Icon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-10 h-10"}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>;
const Module2Icon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-10 h-10"}><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>;
const Module3Icon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-10 h-10"}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>;
const Module4Icon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-10 h-10"}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068M15.75 21A9.753 9.753 0 0 1 12 21.75c-4.436 0-8.28-2.937-9.434-6.934m0-4.132c.154-.421.332-.82.528-1.186 M21 12a9.753 9.753 0 0 0-4.592-8.407M3.066 6.934A9.753 9.753 0 0 1 12 2.25c4.436 0 8.28 2.937 9.434 6.934M12 21.75a9.753 9.753 0 0 1-4.592-8.407" /></svg>;
const Module5Icon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-10 h-10"}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448c.019-.104.039-.207.06-.311M20.486 10.73a14.981 14.981 0 0 0-5.239-5.239l.23-.928c.118-.475-.023-.988-.444-1.253l-.289-.18c-.44-.274-.99-.216-1.347.12L4.01 8.715c-.357.336-.415.896-.12 1.346l.18.29c.264.42.778.561 1.252.443l.928-.229a14.982 14.982 0 0 0 5.239 5.239l-.23.928c-.118.475.023.988.444 1.253l.289.18c.44.274.99.216 1.347-.12l6.715-4.011c.357-.336.415-.896.12-1.346l-.18-.29c-.264-.42-.778-.561-1.252-.443l-.928.229Z" /></svg>;
const Module6Icon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-10 h-10"}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5m0 4.5h-9m9 0V9.75M9 9.75h3.75M9 9.75a3 3 0 0 1-3-3V4.5a3 3 0 0 1 3-3h7.5a3 3 0 0 1 3 3v2.25m0 0a3.003 3.003 0 0 1-2.023 2.893l-1.426.713a3.001 3.001 0 0 0-2.023 2.893V18.75M9 9.75V4.5" /></svg>;


export const MODULE_COLORS = {
    'railway-red':          { bg: 'bg-railway-red',          border: 'border-railway-red',          text: 'text-gray-800',   iconColor: 'text-gray-800', iconColorOnLightBg: 'text-railway-red' },
    'railway-red-orange':   { bg: 'bg-railway-red-orange',   border: 'border-railway-red-orange',   text: 'text-gray-800',   iconColor: 'text-gray-800', iconColorOnLightBg: 'text-railway-red-orange' },
    'railway-orange':       { bg: 'bg-railway-orange',       border: 'border-railway-orange',       text: 'text-gray-800',   iconColor: 'text-gray-800', iconColorOnLightBg: 'text-railway-orange' }, 
    'railway-yellow':       { bg: 'bg-railway-yellow',       border: 'border-railway-yellow',       text: 'text-gray-800',   iconColor: 'text-gray-800', iconColorOnLightBg: 'text-railway-yellow' }, 
    'railway-yellow-green': { bg: 'bg-railway-yellow-green', border: 'border-railway-yellow-green', text: 'text-white',      iconColor: 'text-white', iconColorOnLightBg: 'text-railway-yellow-green' },
    'railway-green':        { bg: 'bg-railway-green',        border: 'border-railway-green',        text: 'text-white',      iconColor: 'text-white', iconColorOnLightBg: 'text-railway-green' },
} as const;


export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah L.',
    photoUrl: 'https://picsum.photos/seed/sarah/150/150',
    experience: '3 Years Service',
    location: 'Manchester Route',
    currentRole: 'Qualified Train Driver',
    quote: "The insights I gained were invaluable. I felt so prepared for the assessments, and it made all the difference. I wouldn't be here without this guidance.",
  },
  {
    id: '2',
    name: 'Mark P.',
    photoUrl: 'https://picsum.photos/seed/markprofile/150/150', // Updated seed
    experience: 'Career Changer (Ex-Retail Manager)',
    location: 'Midlands Network',
    currentRole: 'Trainee Driver',
    quote: "Switching careers felt daunting, but this program broke everything down. The step-by-step modules gave me clarity and confidence. Highly recommended!",
  },
  {
    id: '3',
    name: 'Emily C.',
    photoUrl: 'https://picsum.photos/seed/emily/150/150',
    experience: '5 Years Service',
    location: 'Southern Lines',
    currentRole: 'Experienced Driver & Mentor',
    quote: "Even with some railway background, the depth of knowledge here is astounding. It’s current, practical, and truly reflects what it takes to succeed.",
  },
];

export const MODULES_DATA: Module[] = [
  {
    id: '1', moduleNumber: 1, title: 'Pre-Application: Is This Career Right for You?',
    description: "Understand the realities of a train driver's life, assess your suitability, and prepare for the initial stages. Know what you're getting into.",
    colorName: 'railway-red', stageIndicator: 'Starting Your Journey', icon: <Module1Icon />, // Red: Stop and assess
  },
  {
    id: '2', moduleNumber: 2, title: 'Mastering the Application: Stand Out From the Crowd',
    description: "Craft a compelling application that highlights your strengths and aligns with what recruiters are looking for. Avoid common pitfalls.",
    colorName: 'railway-orange', stageIndicator: 'Building Momentum', icon: <Module2Icon />, // Orange: Proceed with caution
  },
  {
    id: '3', moduleNumber: 3, title: 'Assessment Day Success: Tests & Interviews Demystified',
    description: "Insider strategies for psychometric tests, group exercises, and crucial interviews. Learn from those who design and run them.",
    colorName: 'railway-yellow', stageIndicator: 'Navigating Challenges', icon: <Module3Icon />, // Yellow: Key assessment phase
  },
  {
    id: '4', moduleNumber: 4, title: 'Medical & Fitness: Meeting the Standards',
    description: "Navigate the stringent medical and fitness requirements. Understand the tests and how to prepare for them effectively.",
    colorName: 'railway-yellow', stageIndicator: 'Approaching Qualification', icon: <Module4Icon />, // Yellow: Key assessment phase
  },
  {
    id: '5', moduleNumber: 5, title: 'Initial Training & Route Learning: The Learning Curve',
    description: "What to expect during your intensive training period. Best practices for rules, regulations, and route knowledge acquisition.",
    colorName: 'railway-yellow-green', stageIndicator: 'Gaining Expertise', icon: <Module5Icon />, // Yellow-Green: Approaching clear
  },
  {
    id: '6', moduleNumber: 6, title: 'Post-Qualification: Thriving in Your New Career',
    description: "Beyond just qualifying: tips for continuous development, handling challenges, and building a long, successful career on the rails.",
    colorName: 'railway-green', stageIndicator: 'Career Success Achieved', icon: <Module6Icon />, // Green: Clear to proceed
  },
];

export const VALUE_PROPOSITION_GET = [
    "Combined 60+ years of active, current railway experience.",
    "Insider knowledge from drivers, trainers, and managers.",
    "Real-world, practical insights you can apply immediately.",
    "Assessment perspectives – know what they're looking for.",
    "Up-to-date with current industry standards and practices.",
    "A comprehensive, structured system for career transformation."
];

export const VALUE_PROPOSITION_ELSEWHERE = [
    "Generic career advice not specific to railway roles.",
    "Outdated information that no longer applies.",
    "Purely theoretical knowledge without practical application.",
    "An outsider's view, lacking true insider access.",
    "Fragmented tips, not a complete, guided journey.",
    "One-size-fits-all approaches that miss nuances."
];

export const CURRENT_SITUATION_OPTIONS = Object.values(CurrentSituation);
    