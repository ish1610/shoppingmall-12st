/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IInnerProps } from "../types/common";

const inner = css`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  transition: 0.4s;
`;

const Inner = ({ children, styles }: IInnerProps) => {
  return <div css={[inner, styles]}>{children}</div>;
};

export default Inner;
