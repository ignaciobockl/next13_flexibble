import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import '../app/globals.css';

export const metadata = {
  title: 'Flexibble', // titulo de la ventana
  description: 'Showcase and discover remarable developer projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
