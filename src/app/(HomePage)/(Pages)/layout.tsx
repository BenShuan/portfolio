import { menu } from "@/lib/DataFunctions";
import Menu from "@/ui/menu/Menu";
import SmallMenu from "@/ui/menu/SmallMenu";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className=" font-[family-name:var(--font-surf-sans)] backdrop-blur h-lvh flex flex-col ">
      <header className="">
        <SmallMenu menu={menu} />
        <Menu menu={menu} />
      </header>
      <main className=" flex-grow overflow-scroll ">{children}</main>
    </div>
  );
}

export default layout;
