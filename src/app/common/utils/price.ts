import {
  DiscountedProductPriceFn,
  PriceToLocaleStringFn,
} from "../types/common";

export const discountedProductPrice: DiscountedProductPriceFn = (
  rawPrice,
  discount
) => {
  return rawPrice - rawPrice * discount * 0.01;
};

export const priceToLocaleString: PriceToLocaleStringFn = (price) => {
  return price.toLocaleString("ko-kr");
};
