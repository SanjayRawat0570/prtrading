import type { Metadata } from 'next';
import StoreProvider from './lib/store/StoreProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tradegospel Dashboard',
  description: 'Manage your trading sessions and streams.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Updated the base background color to a darker shade from the screenshot */}
      <body className="bg-[#0D1117] text-gray-200 font-sans">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

