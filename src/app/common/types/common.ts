import { SerializedStyles } from "@emotion/react";

export interface IInnerProps {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export interface ILayoutProps {
  children: React.ReactNode;
  styles?: SerializedStyles;
}
