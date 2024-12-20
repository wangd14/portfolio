import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Flex, Container, Theme } from "@radix-ui/themes";
import Header from "@/components/Header";
import { Outfit, IBM_Plex_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400"],
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "hey, i'm david",
  description: "david's personal webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <Theme accentColor="gold">
          <Flex
            direction="column"
            className="min-h-screen text-[var(--olive-11)] bg-[#D3D9D3]"
            justify="between"
          >
            <div>
              <Header />
              <Container px="20" size="3" className="flex-grow">
                {children}
              </Container>
            </div>
            <Footer />
          </Flex>
        </Theme>
      </body>
    </html>
  );
}
