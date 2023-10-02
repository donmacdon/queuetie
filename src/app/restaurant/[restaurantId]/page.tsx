import { BranchesList } from "@/app/components/restaurant/branches-list";
import { db } from "@/app/lib/db";
import { redirect } from "next/navigation";



const RestaurantPage = async({
    params
}: {
    params : { restaurantId: string;}
}) => {

    const branches = await db.restaurant.findFirst({
      where: {
        id: params.restaurantId
      },include:{
        branch: true
      }
    });

    if (!branches){
        return redirect("/");
    }

    return ( 
      <section className="flex flex-col gap-y-4">
        <BranchesList 
          branches={branches.branch}
        />
      </section>
     );
}
 
export default RestaurantPage;