import type { Metadata } from "next";
import { Providers } from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farcaster AI-SocialPilot",
  description: "AI assistant for Farcaster content creation and community management",
  openGraph: {
    title: "Farcaster AI-SocialPilot",
    description: "Generate engaging content and manage your Farcaster community with AI",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
