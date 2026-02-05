import './ui/global.css';
import { montserrat, roboto, lusitana } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${roboto.className} antialiased`}>{children}
        <footer className="flex items-center justify-center p-6 md:px-28 md:py-12">
          <p>Footer echo con ❤️ con amor por Daniel Antequera</p>
        </footer>
      </body>
    </html>
  );
}
