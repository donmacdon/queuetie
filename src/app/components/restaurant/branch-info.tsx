"use client"

import { Branch } from "@prisma/client";
import { usePathname } from "next/navigation";

interface BranchInfoProps{
  branch: Branch
}

export const BranchInfo = ({
  branch
}: BranchInfoProps) => {
  const asPath = usePathname();

  return (  
    <section className="flex flex-col gap-y-4">
      <p className="text-xl md:text-3xl font-medium">{branch.name} Branch</p>
    </section>
  );
}
 
