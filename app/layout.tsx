import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import DebugFont from '@/app/ui/debugFont';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  console.log(inter);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <DebugFont /> {/* This ensures inter is logged in the browser console */}
        {children}
        </body>
    </html>
  );
}
