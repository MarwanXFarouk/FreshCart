import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer, Bounce } from "react-toastify";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./../styles/globals.css";
import logo from "../assets/images/mini-logo.png";
import AuthProvider from "@/src/featuers/auth/providers/AuthProvider";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

config.autoAddCss = false;
import { Exo } from "next/font/google";
const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FreshCart",
  description: "A modern e-commerce platform built with Next.js & React",
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: "FreshCart",
    description: "A modern e-commerce platform built with Next.js & React",
    url: "https://freshcart-marwanfarouk.vercel.app",
    siteName: "FreshCart",
    images: [
      {
        url: "https://freshcart-marwanfarouk.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreshCart - e-commerce app home page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreshCart",
    description: "A modern e-commerce platform built with Next.js & React",
    images: ["https://freshcart-marwanfarouk.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${exo.variable} font-medium`}>
        <ReactQueryProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </AuthProvider>
        </ReactQueryProvider>
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}

