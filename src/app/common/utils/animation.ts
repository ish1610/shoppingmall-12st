import { AnimationTransformYFn } from "../types/common";

export const animationTransformY: AnimationTransformYFn = (
  ref,
  transform,
  opacity,
  display
) =>
  gsap.to(ref.current, 0.5, {
    transform: `translateY(${transform}px)`,
    opacity,
    display,
  });
