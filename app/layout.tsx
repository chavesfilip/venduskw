import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vendus — Software de Faturação e POS | Angola",
  description: "Fature em segundos e acompanhe as suas vendas no computador, telemóvel ou tablet. Software de faturação validado pela AGT. Experimente grátis 30 dias.",
  keywords: "faturação, POS, software faturação Angola, AGT, faturação online, ponto de venda",
  openGraph: {
    title: "Vendus — Software de Faturação e POS",
    description: "Fature em segundos e acompanhe as suas vendas. 30 dias grátis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
