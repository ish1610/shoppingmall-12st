import { ManageRefArrayFn } from "../types/header";

export const manageRefArray: ManageRefArrayFn = (index, ref) => {
  return (refEl: HTMLAnchorElement) => {
    ref.current[index] = refEl;
  };
};
