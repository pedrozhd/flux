export interface Career {
  id: string;
  name: string;
  category: 'Tech' | 'Business' | 'Healthcare' | 'Creative' | 'Other';
  emergenceScore: number;
  growthRate: number;
  avgSalary: string;
  requiredSkills: string[];
  description: string;
  futureOutlook: string;
}

export interface CareerMatch extends Career {
  matchScore: number;
  missingSkills: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface Statistics {
  professionals: number;
  careers: number;
  satisfaction: number;
  countries: number;
}
