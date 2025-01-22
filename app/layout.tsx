import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ModalProvider from "@/contexts/modal/provider";
import { Header } from "@/containers/layout/header";
import { Footer } from "@/containers/layout/footer";
import { ubuntu } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "MineMasters",
  description:
    "MineMasters: A strategic crypto game universe where players acquire lands, deploy NFT miners, and navigate between war and peace to build, battle, and prosper in a dynamic economy.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minemasters.io/",
    siteName: "MineMasters",
    images: [
      {
        url: "/Social.png",
        width: 1200,
        height: 630,
        alt: "MineMasters",
      },
    ],
  },
  twitter: {
    site: "@MineMasters",
    card: "summary_large_image",
    title: "MineMasters",
    description:
      "MineMasters: A strategic crypto game universe where players acquire lands, deploy NFT miners, and navigate between war and peace to build, battle, and prosper in a dynamic economy.",
    images: [
      {
        url: "/Social.png",
        width: 1200,
        height: 630,
        alt: "MineMasters",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={ubuntu.className}>
        <AppRouterCacheProvider>
          <ModalProvider>
            <Header />
          </ModalProvider>
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
