import type { Metadata } from "next";
import { Raleway, Fjalla_One } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/constants";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const fjallaOne = Fjalla_One({ weight: "400", subsets: ["latin"], variable: "--font-fjalla" });

export const metadata: Metadata = {
  title: "Tiger365 Login, Login To Tiger365 Account, Tiger365 Customer Login",
  description: "Access to your Tiger365 account effortlessly. Login to Tiger365 for a seamless betting experience. Quick and secure Tiger365 login for instant account access. Get started today with Tiger365 Account Login for the best gaming experience.",
  keywords: ["tiger365 login", "login to tiger365 account", "tiger365 account login", "tiger365 login page", "tiger365 new account", "tiger365 online login", "tiger365 account access", "tiger365 customer login", "tiger365 user login"],
  openGraph: {
    title: "Tiger365 Login, Login To Tiger365 Account, Tiger365 Customer Login",
    description: "Access to your Tiger365 account effortlessly. Login to Tiger365 for a seamless betting experience. Quick and secure Tiger365 login for instant account access. Get started today with Tiger365 Account Login for the best gaming experience.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.brand.name,
    images: [
      {
        url: "https://tiger365id.in/wp-content/uploads/2024/09/tiger365id.in-logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand.name} Official Logo`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${raleway.variable} ${fjallaOne.variable}`}
        style={{
          '--primary': SITE_CONFIG.theme.primary,
          '--primary-hover': SITE_CONFIG.theme.primaryHover,
          '--primary-rgb': SITE_CONFIG.theme.primaryRgb,
          '--background': SITE_CONFIG.theme.background,
          '--secondary': SITE_CONFIG.theme.secondary,
          '--foreground': SITE_CONFIG.theme.foreground,
          '--text-primary': SITE_CONFIG.theme.textPrimary,
          '--text-secondary': SITE_CONFIG.theme.textSecondary,
          '--text-muted': SITE_CONFIG.theme.textMuted,
          '--border': SITE_CONFIG.theme.border,
          '--footer-bg': SITE_CONFIG.theme.footerBg,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
