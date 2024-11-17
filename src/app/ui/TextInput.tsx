"use client"
import React from 'react'


interface inputProps extends React.InputHTMLAttributes<HTMLLIElement> {
 
}

const TextInput = (inputProps:inputProps) => {

  return (

    <div className={'text-slate-800 w-3/4 *:rounded-lg flex flex-col gap-2 items-start ' + inputProps.className}>
      <label className='m-4' htmlFor={inputProps.id}> {inputProps.name} </label>
      <input type={inputProps.type} value={inputProps.value} className={'w-full text-xl p-2 flex-grow ' } multiple={inputProps.multiple}  />
    </div>
  )
}

export default TextInput