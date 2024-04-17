import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "./containers/global/header";
import { Footer, FooterMargin } from "./containers/global/footer";

const ubontu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

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
      <body
        className={`${ubontu.className}`}
        style={{
          // maxWidth: "1728px",
          margin: "0 auto",
          position: "relative",
          minWidth: "320px",
          overflowX: "scroll",
          width: "100%",
        }}
      >
        <Header />
        {children}
        <Footer />
        <FooterMargin />
      </body>
    </html>
  );
}
