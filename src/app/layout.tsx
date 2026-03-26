import "../styles/globals.scss";
import { AppShell } from "@/components/layouts/AppShell";

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