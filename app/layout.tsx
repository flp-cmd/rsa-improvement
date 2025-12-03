import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import GTM from "@/components/core/Gtm";
import CookieConsent from "@/components/core/CookieConsent";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "RSA Improvement",
  description:
    "Transforming spaces, exceeding expectations. Schedule your FREE ESTIMATE! (862) 237-4628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <GTM />
        <CookieConsent />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7KZVWJR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
