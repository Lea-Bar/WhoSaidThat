import type { Metadata } from "next";
import styles from "./layout.module.css";

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
          <div className={styles.animatedBackground}>
            <div className={styles.stripeContainer}></div>
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.content}>
            {children}
          </div>
      </body>
    </html>
  );
}
