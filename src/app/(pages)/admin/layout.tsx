import { db } from "@/app/lib/db";
import { redirect } from "next/navigation";



const MainLayout = async({
    children,
}: {
    children: React.ReactNode;
}) => {


    return ( 
        <div className="w-full">
          <div className="flex flex-col gap-y-4 container mx-auto max-w-screen-2xl">
            <main className="">    
                {children}
            </main>
          </div>
        </div>
     );
}
 
export default MainLayout;