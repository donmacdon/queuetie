import { db } from "@/app/lib/db";
import Image from "next/image";



export const RestaurantInfo = async() => {

  // const restaurant = db.await.findFirst{
  //   where: {

  //   }
  // }

  return (  
    <section className="flex flex-col gap-y-4">
              <div className="relative w-full mt-8">
                <Image 
                  src="https://inline.imgix.net/branch/-LamXb5SAQN7JcJfyRKi:inline-live-2a466-null-7deee523-8403-43da-ab98-00c5649f0a6c_caud8kmohpd2dr2eb5oq.webp?auto=format&dpr=2&fit=crop&fm=jpg&h=456&w=1140"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="image placeholder"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <h1 className="text-2xl md:text-4xl font-medium">Restaurant Name</h1>
                <p className="text-lg md:text-2xl">Restaurant Tags</p>
              </div>
              <p className="text-xl md:text-3xl font-medium">Reservation</p>
      </section>
  );
}
 
