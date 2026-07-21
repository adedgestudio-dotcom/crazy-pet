import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crazy Pet'z Store | Everything For Pets – Anna Nagar, Chennai",
  description:
    "Chennai's most loved pet store in Anna Nagar. Professional grooming, pet boarding, puppies, accessories and premium pet food. Call 78711 53333.",
  keywords:
    "pet store chennai, pet grooming anna nagar, puppies for sale chennai, pet boarding chennai",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
