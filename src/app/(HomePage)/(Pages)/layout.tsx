import { menu } from "@/lib/DataFunctions";
import Menu from "@/ui/Menu";
import SmallMenu from "@/ui/SmallMenu";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className=" font-[family-name:var(--font-surf-sans)] backdrop-blur h-full flex flex-col ">
        <header className="h-[5%] md:h-[10%] lg:h-[15%]">
          <SmallMenu menu={menu} />
          <Menu menu={menu} />
        </header>
        <main className=" h-[95%] md:h-[90%] lg:h-[85%]  ">{children}</main>
      </div>
  );
}

export default layout;
