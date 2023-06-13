export interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
}

export const AUTH_NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "How it works?",
    href: "/guide",
  },
  {
    label: "View Github",
    href: "https://github.com/KruzeZab/Image-Steganography",
    external: true,
  },
  {
    label: "Donate us",
    href: "/donate",
  },

  {
    label: "Encrypt Image",
    href: "/encrypt",
  },
  {
    label: "Decrypt Image",
    href: "/decrypt",
  },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Get started",
    href: "/register",
  },
  {
    label: "How it works?",
    href: "/guide",
  },
  {
    label: "View Github",
    href: "https://github.com/KruzeZab/Image-Steganography",
    external: true,
  },
  {
    label: "Donate us",
    href: "/donate",
  },
];
