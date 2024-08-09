import '@/app/ui/global.css';
import { vazirFont } from '@/app/ui/font';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body className={`${vazirFont.className} antialiased`}>{children}</body>
    </html>
  );
}
