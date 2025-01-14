import type { Metadata } from "next";
import "@/app/styles/globals.scss";

export const metadata: Metadata = {
  title: "Vote Next App",
  description: "인기 투표 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts에서 Kantumruy Pro 폰트를 추가 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
