import type { Metadata } from "next";
import { Noto_Sans_Khojki } from "next/font/google";
import "./globals.css";
import MainContainer from "@/components/MainContainer";

const monte = Noto_Sans_Khojki({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CodeNexus",
  description: "Deploy code online easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monte.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
