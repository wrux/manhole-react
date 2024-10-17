export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header>
      <p>HELLO</p>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer>
      <p>BYE</p>
    </footer>
  );
}
