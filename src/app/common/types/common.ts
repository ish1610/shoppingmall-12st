import { SerializedStyles } from "@emotion/react";
import { RefObject } from "react";

export interface IInnerProps {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export interface ILayoutProps {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export type Product<T> = {
  id: number;
  name: string;
  mallName: string;
  image: string;
  price: T;
  sellCount: number;
  reviewCount: number;
  discount: number;
  deliceryFee: number;
};

export interface IProductProps {
  productInfo: Product<string>;
  productdisCountedPrice: string;
  cartAddIconRef: RefObject<HTMLButtonElement>;
  cartRemoveIconRef: RefObject<HTMLButtonElement>;
}

export type DiscountedProductPriceFn = (
  rawPrice: number,
  discount: number
) => number;

export type PriceToLocaleStringFn = (price: number) => string;

export type ExistingCartItemFn = (
  cartItemList: Product<number>[],
  productId: number
) => boolean;

export type AnimationTransformYFn = (
  ref: RefObject<HTMLElement>,
  transform: number,
  opacity: 0 | 1,
  display: "none" | "block"
) => void;
