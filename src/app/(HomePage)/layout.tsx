import React, { ReactNode } from 'react'
import Menu from '../ui/Menu'

function layout({children}:{children:ReactNode}) {
  return (
    <div className='h-dvh font-[family-name:var(--font-surf-sans)] bg-hero bg-bottom bg-scroll bg-cover bg-no-repeat'> 
      <Menu/>
      {children}
    </div>
  )
}

export default layout