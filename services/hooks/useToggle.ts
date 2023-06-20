import { useState } from "react";

const useToggle = (
  initialState: boolean = false
): [boolean, (newValue?: boolean) => void] => {
  const [value, setValue] = useState<boolean>(initialState);

  const toggle = (newValue?: boolean): void => {
    setValue((prevValue: boolean) =>
      typeof newValue === "boolean" ? newValue : !prevValue
    );
  };

  return [value, toggle];
};

export default useToggle;
