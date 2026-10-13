export interface NavItem {
  label: string;
  href: string;
  description?: string;
  index: string;
}

export const NAV_LINKS: NavItem[] = [
  {
    index: "01",
    label: "Work",
    href: "/work",
    description: "Selected digital projects & client dossiers",
  },
  {
    index: "02",
    label: "Services",
    href: "/services",
    description: "Web development & search visibility",
  },
  {
    index: "03",
    label: "About",
    href: "/about",
    description: "Studio principles & operating methodology",
  },
  {
    index: "04",
    label: "Contact",
    href: "/contact",
    description: "Start a project enquiry",
  },
];
