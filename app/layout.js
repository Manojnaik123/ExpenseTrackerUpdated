'use client';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-custom">
      <head>
         <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  if (
                    theme === 'dark' ||
                    (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
                  ) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="w-full h-lvh flex flex-col scrollbar-custom">
            {children}
      </body>
    </html>
  );
}
