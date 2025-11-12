export interface Service {
  id: number;
  src: string;
  title: string;
  name: string;
  intro: string;
  description: string;
  includes: string[];
  introPrice: string;
  specs: Spec[];
  process: Process[];
  wInclude: wInclude[];
  SEODescription: string;
  keywords: string;
}

interface Spec {
  icon: string;
  title: string;
  items: string[];
}

interface Process {
  phase: string;
  duration: string;
  description: string;
  icon: string;
  align: string;
}

interface wInclude {
  title: string;
  features: string[];
}
