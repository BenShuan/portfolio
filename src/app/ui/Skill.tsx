import React from 'react'

interface skillProps{
  name:string;
}

export const Skill = ({name}:skillProps) => {

  return (
    <div className='bg-main-green-dark p-2 rounded-md shadow-lg hover:scale-125 transition-all '>
      {name}
      </div>
  )
}
