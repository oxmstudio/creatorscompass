export const metadata = {
  title: "Creator's Compass | Creative Partnership Consulting",
  description:
    "Creator's Compass connects founders, studios, artists, and industry leaders with aligned partners, collaborators, and capital.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
