import { useState } from "react";

const useInputState = (defaultValue = "") => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const handleInput = (value) => {
    setInputValue(value);
  };
  return [inputValue, handleInput];
};

export default useInputState;
