import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from './components/ClientLayout';
import { ThemeProvider } from './providers/ThemeProvider';

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeremy Erik Leong | Portfolio",
  description: "Hello! My name is Jeremy Erik Leong. I’m  a developer & designer that based in Kuala Lumpur. I enjoy building digital experiences for the web.",
};

function ThemeInitializer() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const theme = localStorage.getItem('theme') || 'one-dark-pro';
              document.body.classList.add('theme-' + theme);
            } catch (e) {}
          })();
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeInitializer />
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
