"use client"

import { db } from "@/app/lib/db";
import { Branch, Restaurant } from "@prisma/client";
import Image from "next/image";
import { ScrollArea }  from "@radix-ui/react-scroll-area"
interface RestaurantInfoProps{
  restaurant: Restaurant
  branches: Branch[]
}

export const RestaurantInfo = async({
  restaurant,
  branches
}: RestaurantInfoProps) => {
  

  return (  
    <section className="flex flex-col gap-y-4">
              <div className="relative w-full mt-8">
                <Image 
                  src={restaurant?.imageUrl}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="image placeholder"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <h1 className="text-2xl md:text-4xl font-medium">{restaurant?.name}</h1>
                <p className="text-lg md:text-2xl">{restaurant?.tags}</p>
              </div>
      </section>
  );
}
 
