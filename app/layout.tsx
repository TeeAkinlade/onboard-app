import type { Metadata } from "next";
import "./globals.css";
import ClientNavbar from "./components/ClientNavbar";

export const metadata: Metadata = {
  title: "TODs",
  description: "Gets things with TODs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased lg:max-w-sm mx-auto lg:shadow-lg lg:shadow-[#00000040]`}
      >
        <ClientNavbar />
        {children}
      </body>
    </html>
  );
}
