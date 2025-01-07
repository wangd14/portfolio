export interface Experience {
  icon: string;
  title: string;
  description: string;
  date: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  linkText: string;
  icon: string;
}

export interface LinkProps {
  children: React.ReactNode;
  href: string;
}
