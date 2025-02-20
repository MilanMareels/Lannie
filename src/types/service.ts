export interface Service {
  id: number;
  scr: string[];
  title: string;
  intro: string;
  description: string;
  includes: Includes;
  price: string;
  introPrice: string;
}

interface Includes {
  website: string;
  mobile: string;
  ontwerp: string;
  gdpr: string;
  hosting: string;
}
