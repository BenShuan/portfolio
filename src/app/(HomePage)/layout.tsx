import React, { ReactNode } from 'react'

export const menu = [
  { text: "Home", link: "/" },
  { text: "Projects", link: "/projects" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

function layout({children}:{children:ReactNode}) {
  return (
    <div className='h-dvh font-[family-name:var(--font-surf-sans)] bg-hero bg-bottom bg-scroll bg-cover bg-no-repeat'> 
      {children}
    </div>
  )
}

export default layout