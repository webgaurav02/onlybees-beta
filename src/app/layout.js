import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//Context
import { AuthProvider } from '../context/AuthContext';
import { EventProvider } from '../context/EventContext';
import { OrganizerProvider } from '../context/OrganizerContext';

export const metadata = {
  title: "Onlybees Events",
  description: "Developed by Gaurav Joshi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '7756034437819795');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=7756034437819795&ev=PageView&noscript=1"
          />
        </noscript>
      { /* <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'"></meta>
        <meta name="referrer" content="strict-origin-when-cross-origin" /> */}
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <EventProvider>
            <OrganizerProvider>
              {children}
            </OrganizerProvider>
          </EventProvider>
        </AuthProvider>
        {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}
      </body>
    </html>
  );
}
