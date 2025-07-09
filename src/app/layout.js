import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat, Inter, Readex_Pro } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", //wywalić
  weight: ["400", "500", "700"],
});

const readexPro = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-readex",
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Business Biology",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${readexPro.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
