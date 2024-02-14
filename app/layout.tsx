import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "./containers/global/header";
import { Footer, FooterMargin } from "./containers/global/footer";

export const ubontu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MineMasters",
  description: "MineMasters is a crypto game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubontu.className}`}
        style={{
          maxWidth: "1728px",
          margin: "0 auto",
          position: "relative",
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
