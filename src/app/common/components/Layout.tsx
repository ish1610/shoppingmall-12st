/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ILayoutProps } from "../types/common";

const layout = css`
  padding-top: 160px;
`;

const Layout = ({ children, styles }: ILayoutProps) => {
  return <div css={[layout, styles]}>{children}</div>;
};

export default Layout;
