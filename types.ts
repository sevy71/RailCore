import React from 'react';

export interface Testimonial {
  id: string;
  name: string;
  photoUrl: string;
  experience: string;
  location: string;
  quote: string;
  currentRole: string;
}

export interface Module {
  id:string;
  moduleNumber: number;
  title: string;
  description: string;
  colorName: keyof typeof import('./constants').MODULE_COLORS;
  stageIndicator: string;
  icon: React.ReactElement<{ className?: string }>;
}

export enum CurrentSituation {
  EMPLOYED = "Employed, seeking new opportunities",
  UNEMPLOYED = "Unemployed, actively looking",
  CAREER_CHANGER = "Career Changer, exploring options",
  STUDENT = "Student or Recent Graduate",
  OTHER = "Other"
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  currentSituation: CurrentSituation | "";
  message: string;
}

export interface BlogPostContentBlock {
  type: 'heading' | 'paragraph' | 'list' | 'tip';
  content: string | string[];
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: BlogPostContentBlock[];
}
