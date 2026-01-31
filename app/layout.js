'use client';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-lvh flex flex-col">
            {children}
      </body>
    </html>
  );
}
