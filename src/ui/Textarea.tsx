"use client"
import React from 'react'


interface inputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

}

const Textarea = ({id, name,className, ...inputProps}:inputProps) => {


  return (

    <div className={`text-slate-800 w-3/4 *:rounded-lg flex flex-col gap-2 items-start ${className} ` }>
      <label className='my-1' htmlFor={id}> {name?.toLocaleUpperCase()} </label>
      <textarea  className={`w-full text-xl p-2  flex-1` } name={name} {...inputProps}   />
    </div>
  )
}

export default Textarea