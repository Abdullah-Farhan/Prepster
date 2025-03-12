import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Urbanist } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const urbanist = Urbanist({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prepster",
  description: "Revolutionize your exam preparation with Prepster",
  icons: {
    icon: 'prepster.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {children}
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: '#151C2D',
              color: '#fff',
            },
            duration: 3000
          }}
        />
      </body>
    </html>
  );
}
