"use client"

import { Branch } from "@prisma/client";
import { ScrollArea }  from "@radix-ui/react-scroll-area"
interface BranchInfoProps{
  branch: Branch
}

export const BranchInfo = async({
  branch
}: BranchInfoProps) => {
  

  return (  
    <section className="flex flex-col gap-y-4">
      <p>TEST</p>
      <p className="text-xl md:text-3xl font-medium">{branch.name} Branch</p>
              
      </section>
  );
}
 
