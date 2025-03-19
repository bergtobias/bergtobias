export const metadata = {
  title: "My Application",
  description: "A modern web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
