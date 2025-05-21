export interface Artist {
  id: number;
  name: string;
  imageUrl: string;
}

export interface NavRoute {
  path: string;
  icon: React.ReactNode;
  label: string;
}

export type PixKeyType = 'CPF' | 'Telefone' | 'Email' | 'Aleatória';

export interface FaqItem {
  question: string;
  answer: string;
}