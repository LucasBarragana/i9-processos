import { Blinker } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const blinker = Blinker({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.80" />
      </head>
      <body className={blinker.className}>     
        <Navbar />
        {children}
      </body>
    </html>
  );
}
