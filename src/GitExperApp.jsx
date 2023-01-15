import { useState } from 'react';

export const GitExperApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon ball'] );

    console.log( categories )

  return (
    <>
      <h1>GitExpertApp</h1>

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

