import { ExistingCartItemFn } from "../types/common";

export const existingCartItem: ExistingCartItemFn = (
  cartItemList,
  productId
) => {
  const exsitingCartItemIndex = cartItemList.findIndex(
    (item) => item.id === productId
  );
  if (exsitingCartItemIndex === -1) {
    return false;
  } else {
    return true;
  }
};
