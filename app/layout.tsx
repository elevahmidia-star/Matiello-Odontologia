import type {Metadata} from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Matiello Odontologia',
  description: 'Implantes dentários, lentes de contato e protocolos de reabilitação.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#0a0a0a] text-white antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
