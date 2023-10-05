"use client";

import { usePathname } from "next/navigation";
import { Button } from '@radix-ui/themes'
import { CalendarDays } from "lucide-react";
import Link from "next/link";



const BranchPage = () => {
    const asPath = usePathname();
    
    return ( 
        <>
            <Link href={`${asPath}/reservation`}>
              <Button className="rounded btn-secondary px-2 py-1 flex gap-2">
                <CalendarDays />
                <span>Go to reservation</span>
              </Button>
            </Link>
        </>
     );
}
 
export default BranchPage;