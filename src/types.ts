export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface AgencyPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  email: string;
  location: string;
  state: string;
}

export interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'info';
}
