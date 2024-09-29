import "@styles/globals.css";
import { Children } from "react";

export const metadate = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
