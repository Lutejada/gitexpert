import { useState } from "react"


export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One punch');

    const onInputChange = (event) => {
        console.log(event.target.value)
        setInputValue( event.target.value)
  
    }

    const onSubmit = (event)=>{
        console.log( inputValue)
        event.preventDefault()
    }


  return (
    <form onSubmit={(event)=>{onSubmit(event)}}>
        <input
        type= 'text'
        placeholder="buscar Gif"
        value={ inputValue }
        onChange = { ( event ) => onInputChange(event)}
        />

    </form>
    
  )
};
