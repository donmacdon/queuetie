import { RestaurantInfo } from "@/app/components/restaurant/restaurant-info";
import Image from "next/image";



const MainLayout = async({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="w-full">
          <div className="container mx-auto max-w-screen-2xl">
            <RestaurantInfo/>
            <main className="md:pl-[72px] h-full">    
                {children}
            </main>
          </div>
        </div>
     );
}
 
export default MainLayout;