import "../styles/globals.scss";
import { AppShell } from "@/components/layouts/AppShell";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seo Layout',
  description: 'Seo in Layout',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode}>) => {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

export default RootLayout;