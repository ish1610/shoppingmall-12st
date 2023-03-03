import { useState } from "react";

const useSearch = (ref: React.MutableRefObject<HTMLInputElement | null>) => {
  const [isInputFocus, setIsInputFoucus] = useState(false);

  const handleSearchIconClick = () => {
    if (ref.current) {
      setIsInputFoucus(true);
      ref.current.focus();
    }
  };

  return {
    isInputFocus,
    setIsInputFoucus,
    onClickSearchIcon: handleSearchIconClick,
  };
};

export default useSearch;
