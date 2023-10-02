"use client"

import { Branch, Restaurant } from "@prisma/client";
import Image from "next/image";
import { ScrollArea }  from "@radix-ui/react-scroll-area"
import { usePathname, useRouter } from "next/navigation";
interface BranchesListProps{
  branches: Branch[]
}

export const BranchesList = async({
  branches
}: BranchesListProps) => {
  const asPath = usePathname();
  console.log(asPath)
  return (  
    <section className="flex flex-col gap-y-4">
              <p className="text-xl md:text-3xl font-medium">Branches</p>
              <ScrollArea className="flex-1 w-full">
              {branches.map((branch)=> (
                    <div key={branch.id} className="mb-4">
                        <div>
                          <a href={asPath + `/`+ branch.id + `/reservation`}>{branch.name} Branch </a>
                        </div>
                    </div>
                ))}
              </ScrollArea>
      </section>
  );
}
 
