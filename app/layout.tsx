import type {Metadata} from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import Script from "next/script";
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
<body className="font-sans bg-[#0a0a0a] text-white antialiased" suppressHydrationWarning>
<Script id="meta-pixel" strategy="afterInteractive">
{`
!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1233989982154380');
  fbq('track', 'PageView');
`}
</Script>
  {children}

</body>
    </html>
  );
}
