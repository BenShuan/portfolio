import React from 'react'

interface skillProps{
  name:string;
}

export const Skill = ({name}:skillProps) => {

  return (
    <div style={{textShadow:"1px 1px 2px black"}} className='text-white bg-main-green-dark p-2 rounded-md shadow-lg hover:scale-125 transition-all '>
      {name}
      </div>
  )
}
