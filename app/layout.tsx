import React from "react";
import "./index.css";
import StoreProvider from "./_lib/StoreProvider";
import Script from "next/script";

export const metadata = {
  title: "stopOver",
  description: "Created by biswajeet",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Include Leaflet CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <StoreProvider>{children}</StoreProvider>
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        />
      </body>
    </html>
  );
}
