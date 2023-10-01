import { RestaurantInfo } from "@/app/components/restaurant/restaurant-info";



const MainLayout = async({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full">
            <div className="">
              
            </div>
            <main className="md:pl-[72px] h-full">
                <RestaurantInfo/>
                {children}
            </main>
        </div>
     );
}
 
export default MainLayout;