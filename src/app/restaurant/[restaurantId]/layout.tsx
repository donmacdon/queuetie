import { RestaurantInfo } from "@/app/components/restaurant/restaurant-info";
import { db } from "@/app/lib/db";
import Image from "next/image";
import { redirect } from "next/navigation";



const MainLayout = async({
    children,
    params
}: {
    children: React.ReactNode;
    params : { restaurantId: string;}
}) => {

    const restaurantInfo = await db.restaurant.findUnique({
      where: {
        id: params.restaurantId
      },include: {
        branch: true
      }
    });

    if (!restaurantInfo){
        return redirect("/");
    }

    return ( 
        <div className="w-full">
          <div className="flex flex-col gap-y-4 container mx-auto max-w-screen-2xl">
            <RestaurantInfo
              restaurant={restaurantInfo}
              branches={restaurantInfo.branch}
            />
            <main className="">    
                {children}
            </main>
          </div>
        </div>
     );
}
 
export default MainLayout;