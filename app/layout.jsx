export const metadata = {
  title: "Creator's Compass",
  description: "Creative consulting agency connecting creators with the right partners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
