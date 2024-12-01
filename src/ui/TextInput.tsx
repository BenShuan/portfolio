"use client"

import React, { useState } from 'react'


interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const TextInput = ({id,value, name,className, ...inputProps}:inputProps) => {

  const [valueInput, setvalueInput ] = useState(value);

  return (

    <div className={`text-slate-800 w-3/4 *:rounded-lg flex flex-col gap-2 items-start ${className} ` }>
      <label className='my-1' htmlFor={id}> {name?.toLocaleUpperCase()} </label>
      <input  className={`w-full text-xl p-2  flex-1` } name={name} {...inputProps} value={valueInput} onChange={(e)=>setvalueInput(e.currentTarget.value)}  />
    </div>
  )
}

export default TextInput