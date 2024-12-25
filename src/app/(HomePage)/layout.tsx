import React, { ReactNode } from 'react'



function layout({children}:{children:ReactNode}) {
  return (
    <div className='h-lvh font-[family-name:var(--font-surf-sans)] bg-hero bg-bottom bg-scroll bg-cover bg-no-repeat'> 
      {children}
    </div>
  )
}

export default layout