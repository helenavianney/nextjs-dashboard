import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Invoices',
    default: 'Invoices',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
