import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crazy Pet'z Store | Everything For Pets – Your Trusted Pet Store",
  description:
    "Your neighborhood's most trusted pet store. Professional grooming, pet boarding, puppies, accessories and premium pet food. Quality care for your furry friends.",
  keywords:
    "pet store, pet grooming, puppies for sale, pet boarding, pet accessories, pet food, dog grooming, cat care",
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
