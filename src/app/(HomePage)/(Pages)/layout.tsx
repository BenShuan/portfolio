import Menu from "@/app/ui/Menu"
import { ReactNode } from "react"
import { menu } from "../layout"


function layout({children}:{children:ReactNode}) {
  return (
    <div className='h-dvh font-[family-name:var(--font-surf-sans)] bg-hero bg-bottom bg-scroll bg-cover bg-no-repeat'>
      <Menu menu={menu} />

      {children}
    </div>
  )
}

export default layout