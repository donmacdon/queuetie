import { BranchInfo } from "@/app/components/restaurant/branch-info";
import { db } from "@/app/lib/db";
import { redirect } from "next/navigation";



const BranchLayout = async({
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
      <section className="flex flex-col gap-y-4">
          <BranchInfo 
            branch={branchInfo}
          />
          {children}
      </section>
   );
}
 
export default BranchLayout;