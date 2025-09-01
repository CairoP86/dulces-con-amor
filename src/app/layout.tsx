import "./globals.css";

export const metadata = {
  title: "Dulces con Amor 🍰💕",
  description: "Postres artesanales hechos con amor en Guanacaste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
