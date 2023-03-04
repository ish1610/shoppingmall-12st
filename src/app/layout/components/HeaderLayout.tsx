import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsShowPromotion } from "../../globalRedux/features/promotionSlice";
import { IHeaderLayoutProps } from "../types/header";
import HeaderLayoutView from "./views/HeaderLayoutView";

const HeaderLayout = () => {
  const isShowPromotion = useSelector(selectIsShowPromotion);

  const headerLayoutProps: IHeaderLayoutProps = {
    isShowPromotion,
  };

  return <HeaderLayoutView {...headerLayoutProps} />;
};

export default HeaderLayout;
