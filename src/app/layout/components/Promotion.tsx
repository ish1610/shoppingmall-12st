import { throttle } from "lodash";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hidePromotion,
  selectIsShowPromotion,
  showPromotion,
} from "../../globalRedux/features/promotionSlice";
import { IPromotionProps } from "../types/promotion";
import { handlePromotionScroll } from "../utils/animation";
import PromotionView from "./views/PromotionView";

const Promotion = () => {
  const dispatch = useDispatch();
  const promotionRef = useRef<HTMLDivElement>(null);
  const isShowPromotion = useSelector(selectIsShowPromotion);

  const handlePromotionDispatch = () => {
    return window.scrollY > 30
      ? dispatch(hidePromotion())
      : dispatch(showPromotion());
  };

  const handleScroll = throttle(handlePromotionDispatch, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isShowPromotion) {
      handlePromotionScroll(promotionRef, -100);
    } else {
      handlePromotionScroll(promotionRef, 0);
    }
  }, [isShowPromotion]);

  const promotionProps: IPromotionProps = {
    promotionRef,
  };
  return <PromotionView {...promotionProps} />;
};

export default Promotion;
