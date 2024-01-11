import { useState } from "react";

export default function useFormInput(initialValue: string) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (inputNewValue: string) => {
    setInputValue(inputNewValue)
  }

  return {
    inputValue,
    handleChange,
  }
}