import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProductProps, Product } from "../types/common";
import { animationTransformY } from "../utils/animation";
import { discountedProductPrice, priceToLocaleString } from "../utils/price";
import ProductView from "./views/ProductView";

const Product = ({ productInfo }: { productInfo: Product<number> }) => {
  const dispatch = useDispatch();
  //   const { cartList } = useSelector((state) => state.cart);
  const cartAddIconRef = useRef<HTMLButtonElement>(null);
  const cartRemoveIconRef = useRef<HTMLButtonElement>(null);

  const productProps: IProductProps = {
    productInfo: {
      ...productInfo,
      price: priceToLocaleString(productInfo.price),
    },
    productdisCountedPrice: priceToLocaleString(
      discountedProductPrice(productInfo.price, productInfo.discount)
    ),
    cartAddIconRef,
    cartRemoveIconRef,
  };

  const addCartItem = (cartItemList, productId) => {
    // // 장바구니 최대 10개
    // if (cartList.length === 10) {
    //   return;
    // }
    // 🚨 utils - existingCartItem 사용하기
    // // 상품 추가 전 장바구니에 해당 상품 있는지 확인
    // const existingCartItemIndex = cartList.findIndex(
    //   (item) => +item.productId === +productInfo.item_no
    // );
    // if (existingCartItemIndex === -1) {
    //   // 장바구니에 해당 상품 없음
    //   dispatch(
    //     cartActions.addProduct({
    //       ...productInfo,
    //       amount,
    //     })
    // //   );
    //   animationTransformY(cartAddIconRef, -100, 0, "none");
    //   animationTransformY(cartRemoveIconRef, 100, 1, "block");
    //   return;
    // } else {
    //   // 장바구니에 해당 상품 있음
    //   return;
    // }
  };

  const removeCartItem = (cartItemList, productId) => {
    // dispatch(
    //   cartActions.minusProduct({
    //     item_no,
    //   })
    // );

    animationTransformY(cartRemoveIconRef, 0, 0, "none");
    animationTransformY(cartAddIconRef, 0, 1, "block");
  };

  useEffect(() => {
    animationTransformY(cartRemoveIconRef, 0, 0, "none");
    animationTransformY(cartAddIconRef, 0, 1, "block");

    // 🚨 utils - existingCartItem 사용하기
    // const exsitingCartItemIndex = cartList.findIndex(
    //   (item) => item.item_no === info.item_no
    // );
    // if (exsitingCartItemIndex !== -1) {
    //   animationTransformY(cartAddIconRef, -100, 0, "none");
    //   animationTransformY(cartRemoveIconRef, 100, 1, "block");
    // }
  }, []);

  return <ProductView {...productProps} />;
};

export default Product;
