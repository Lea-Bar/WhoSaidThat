import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhoSaidThat",
  description: "WhoSaidThat is a multiplayer game where each player submits a quote about another player, and everyone must guess who said each quote.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
