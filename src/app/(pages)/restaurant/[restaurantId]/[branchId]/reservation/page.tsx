import { Confirmation } from "@/app/components/ui/confirmation";
import { FormUI } from "@/app/components/ui/form";
import { db } from "@/app/lib/db";

interface ReservationPageProps {
  params: {
    restaurantId: string;
    branchId: string;
    reservationId: string;
  }
}

const ReservationPage = async({
  params
}: ReservationPageProps) => {

    return (
      <FormUI
        restaurantId={params.restaurantId}
        branchId={params.branchId}
      />
    )
 
}
  
export default ReservationPage;