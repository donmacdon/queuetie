"use client"

import { Branch } from "@prisma/client";
import Image from "next/image";
import { ScrollArea }  from "@radix-ui/react-scroll-area"
import * as Separator from '@radix-ui/react-separator';
import { usePathname } from "next/navigation";
import Link from "next/link";
interface BranchesListProps{
  branches: Branch[]
}

export const BranchesList = ({
  branches
}: BranchesListProps) => {
  const asPath = usePathname();

  return (  
    <section className="flex flex-col gap-y-4">
              <p className="text-xl md:text-3xl font-medium">Branches</p>
              <div>
                <ScrollArea className="flex-1 w-full">
                  <ul>
                    {branches.map((branch, index)=> (
                        <li key={branch.id}>
                          <Link key={branch.id} href={`${asPath}/${branch.id}/reservation`}>
                            <div className="flex py-4 hover:bg-zinc-300 transition items-center">
                              <Image
                                src={branch.imageUrl}
                                alt={branch.name}
                                width={100}
                                height={100}
                                className="rounded" />
                              <div className="ml-4">
                                <p className="text-sm md:text-base font-medium">
                                  {branch.name}
                                </p>
                                <p className="text-xs md:text-base font-light">
                                  {branch.address}
                                </p>
                              </div>
                            </div>
                          </Link>
                          {!(index + 1 === branches.length) && (
                            <Separator.Root
                              orientation="horizontal"
                              className="bg-zinc-600/30 h-[1px] w-full" 
                            />
                          )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
      </section>
  );
}
 
