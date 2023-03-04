import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ROUTE } from "../../common/types/route";
import { selectIsShowPromotion } from "../../globalRedux/features/promotionSlice";
import HeaderSearch from "./HeaderSearch";
import { IHeaderControllerProps } from "../types/header";
import { handleHeaderControllerAnimation } from "../utils/animation";
import { manageRefArray } from "../utils/refArray";
import HeaderControllerView from "./views/HeaderControllerView";

const HeaderController = () => {
  const headerControllerIconRef = useRef<HTMLAnchorElement[]>([]);
  const headerControllerTitleRef = useRef<HTMLAnchorElement[]>([]);

  const isShowPromotion = useSelector(selectIsShowPromotion);

  useEffect(() => {
    if (!isShowPromotion) {
      handleHeaderControllerAnimation(headerControllerTitleRef, 30, 0, 0);
      handleHeaderControllerAnimation(headerControllerIconRef, 28, 1, 1);
    } else {
      handleHeaderControllerAnimation(headerControllerTitleRef, -8, 1, 1);
      handleHeaderControllerAnimation(headerControllerIconRef, 30, 0, 0);
    }
  }, [isShowPromotion]);

  const headerControllerProps: IHeaderControllerProps = {
    route: {
      myPage: ROUTE.MYPAGE,
      login: ROUTE.LOGIN,
    },

    isShowPromotion,

    headerControllerTitleRef: {
      myPage: manageRefArray(1, headerControllerTitleRef),
      like: manageRefArray(2, headerControllerTitleRef),
      log: manageRefArray(3, headerControllerTitleRef),
    },
    headerControllerIconRef: {
      myPage: manageRefArray(1, headerControllerIconRef),
      like: manageRefArray(2, headerControllerIconRef),
      log: manageRefArray(3, headerControllerIconRef),
    },
  };

  return (
    <HeaderControllerView {...headerControllerProps}>
      <HeaderSearch />
    </HeaderControllerView>
  );
};

export default HeaderController;
