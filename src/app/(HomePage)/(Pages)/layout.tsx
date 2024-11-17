import { menu } from "@/app/Data/DataFunctions"
import Menu from "@/app/ui/Menu"
import { ReactNode } from "react"



function layout({children}:{children:ReactNode}) {
  return (
    <div className='h-dvh font-[family-name:var(--font-surf-sans)] bg-hero bg-bottom bg-scroll bg-cover bg-no-repeat '>
      <Menu menu={menu} />

      <div className="pt-14 backdrop-blur h-full">{children}</div>
    </div>
  )
}

export default layout