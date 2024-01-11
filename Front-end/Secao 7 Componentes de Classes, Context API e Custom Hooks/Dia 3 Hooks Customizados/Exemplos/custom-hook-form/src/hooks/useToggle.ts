import { useState } from "react";

export default function useToggle (initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((prevValue) => !prevValue)
  }
  
  return {
    value,
    toggleValue,
  }
}