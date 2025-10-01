import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peter Rosenberg | Radio · Podcasts · Culture",
  description: "The official website of Peter Rosenberg - Hot 97, ESPN, Juan Epstein, Cheap Heat. Hip-Hop, Sports, Wrestling, and Everything In Between.",
  keywords: ["Peter Rosenberg", "Hot 97", "ESPN", "Juan Epstein", "Cheap Heat", "Radio Host", "Podcast"],
  openGraph: {
    title: "Peter Rosenberg | Radio · Podcasts · Culture",
    description: "The official website of Peter Rosenberg - Hot 97, ESPN, Juan Epstein, Cheap Heat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Rosenberg | Radio · Podcasts · Culture",
    description: "Hot 97, ESPN, Juan Epstein, Cheap Heat",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
