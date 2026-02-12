import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import ClientOnlyCursor from "../components/ClientOnlyCursor";
import PageTransition from "../components/PageTransition";
import GlobalPopup from "../components/GlobalPopup";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Promoter - Compliance, Marketing & Growth for Clinics",
  description: "Doctor Promoter helps doctors and clinics with compliance (NABH/NABL, licenses), trusted medical content, 360° marketing, events, technology and AI solutions.",
  keywords: "doctor marketing, clinic compliance, NABH, NABL, hospital advisory, medical content, digital marketing for doctors, clinic technology, telemedicine, EMR, AI healthcare",
  authors: [{ name: "Doctor Promoter" }],
  creator: "Doctor Promoter",
  publisher: "Doctor Promoter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://doctor-promoter.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Doctor Promoter - Compliance, Marketing & Growth for Clinics",
    description: "Compliance, content, marketing and growth solutions for doctors and clinics.",
    url: "https://doctor-promoter.example.com",
    siteName: "Doctor Promoter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor Promoter - Compliance, Marketing & Growth for Clinics",
    description: "Compliance, content, marketing and growth solutions for doctors and clinics.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/imgs/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/imgs/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/imgs/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/imgs/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/imgs/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/imgs/favicon.ico",
    apple: [
      { url: "/imgs/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
                     <head>
          {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '600115390320570');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel Code */}
          
          <link rel="icon" type="image/x-icon" href="/imgs/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/imgs/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/imgs/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/imgs/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/imgs/android-chrome-512x512.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/imgs/apple-touch-icon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=DM+Serif+Display&family=Exo+2:wght@400;700&family=Sora:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900`}
      >
        <ClientOnlyCursor />
        <ThemeProvider>
          <Navbar />
          <PageTransition>
            <main className="min-h-screen">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
        <GlobalPopup />
      </body>
    </html>
  );
}
