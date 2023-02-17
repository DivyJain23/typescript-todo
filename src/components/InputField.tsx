import React from 'react'
import "./styles.css"

const InputField = () => {
  return <form className='input'>
    <input type="input" placeholder="Enter a task ToDo" className='input__box'/>
    <button className="input_submit" type="submit">
        GO
    </button>
  </form>
    
  
}

export default InputField