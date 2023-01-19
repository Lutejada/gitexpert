import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    //console.log(event.target.value)
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    //console.log( inputValue)
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    //setCategories( categories => [ inputValue, ...categories]);

    onNewCategory(inputValue.trim());

    setInputValue("");
  };

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
      }}
    >
      <input
        type="text"
        placeholder="buscar Gif"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
