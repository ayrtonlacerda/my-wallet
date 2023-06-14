import { useState } from "react";

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialState);

  const toggle = (): void => {
    setValue((prevValue: boolean) => !prevValue);
  };

  return [value, toggle];
};

export default useToggle;
