import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
export const metadata: Metadata = {
  title: "Mini store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
