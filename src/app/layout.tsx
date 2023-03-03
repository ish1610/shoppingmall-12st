"use client";
import GlobalStyle from "./common/styles/GlobalStyle";

import HeaderLayout from "./layout/HeaderLayout";

import Promotion from "./layout/Promotion";
import Providers from "./globalRedux/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <GlobalStyle />
          <HeaderLayout />

          {children}
        </Providers>
      </body>
    </html>
  );
}
