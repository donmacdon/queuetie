import { BranchInfo } from "@/app/components/restaurant/branch-info";
import { RestaurantInfo } from "@/app/components/restaurant/restaurant-info";
import { db } from "@/app/lib/db";
import Image from "next/image";
import { redirect } from "next/navigation";



export const BranchPage = async({
    children,
    params
}: {
    children: React.ReactNode;
    params : { branchId: string;}
}) => {

    const branchInfo = await db.branch.findUnique({
      where: {
        id: params.branchId
      }
    });

    if (!branchInfo){
        return redirect("/");
    }

    return ( 
        <>
          <BranchInfo 
            branch={branchInfo}
          />
        </>
     );
}
 
