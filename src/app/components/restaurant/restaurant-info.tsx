import { db } from "@/app/lib/db";
import Image from "next/image";



export const RestaurantInfo = async() => {

  console.log("ASDJFDKSGKDSJGDKJGKJGKJGKJGKJGC")
  // console.log(params.restaurantId)
  const restaurant = {
    imageUrl : "",
    name: "",
    tags: ""
  }
  // const restaurant = await db.restaurant.findFirst({
  //   where: {
  //     id: "test",
  //   }
  // })
  

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
              <p className="text-xl md:text-3xl font-medium">Reservation</p>
      </section>
  );
}
 
