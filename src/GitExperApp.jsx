import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GitExperApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon ball'] );

    const onAddCategorie = () => {
      console.log ( 'valoriant')
      //setCategories ([...categories, 'valoriant']);  // La categoria queda de ultima
      setCategories ( ['valoriant', ...categories]);  // La categoria queda de Primera
    }

    console.log( categories )

  return (
    <>
      <h1>GitExpertApp</h1>

    <AddCategory  setCategories = { setCategories } />  
    
    <button onClick={ onAddCategorie }>Agregar</button> 

      <ol>
        {
            categories.map( category => {
                return  <li key={ category} > { category } </li>
            })
        }

      </ol>
    </>
  )
};

