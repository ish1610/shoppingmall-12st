"use client";
import GlobalStyle from "./common/styles/GlobalStyle";

import HeaderLayout from "./layout/HeaderLayout";

import Providers from "./globalRedux/Provider";
import Layout from "./common/components/Layout";

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

          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
