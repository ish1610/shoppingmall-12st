import gsap from "gsap";
import { MutableRefObject } from "react";

export const handlePromotionScroll = (
  ref: MutableRefObject<HTMLDivElement | null>,
  transform: number
) => {
  gsap.to(ref.current, 0.5, {
    transform: `translateY(${transform}px)`,
  });
};

export const handleHeaderControllerAnimation = (
  ref: MutableRefObject<HTMLAnchorElement[]>,
  transform: number,
  opacity: number,
  zIndex: number
) => {
  gsap.to(ref.current, 0.5, {
    opacity,
    transform: `translateX(${transform}px)`,
    zIndex,
  });
};
