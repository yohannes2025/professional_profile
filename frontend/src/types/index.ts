export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactMessage extends ContactFormData {
  id: number;
  created_at: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
  tech_stack: string;
  project_url?: string;
  github_url?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}
