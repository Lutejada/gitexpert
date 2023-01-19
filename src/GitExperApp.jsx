import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitExperApp = () => {
  const [categories, setCategories] = useState(["one puch"]);

  const onAddCategorie = () => {
    //console.log ( newCategory)
    //setCategories ([...categories, 'valoriant']);  // La categoria queda de ultima

    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]); // La categoria queda de Primera
  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory
        //setCategories = { setCategories }

        onNewCategory={(event) => onAddCategorie(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
