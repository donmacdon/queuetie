import { Confirmation } from "@/app/components/ui/confirmation";
import { Form } from "@/app/components/ui/form";
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

  const reservationData = await db.reservation.findFirst({
    where: {
      id: params.reservationId,
    },include: {
      branch: {
        include:{
          restaurant: true,
        }
      }
    }
  });


  if(!reservationData?.id){
    return (
      <div>
        <h1>Reservation not found</h1>
      </div>
    )
  }

  return ( 
    <>
      
      <Confirmation 
        restaurantId={reservationData.branch.restaurant.id}
        branchId={reservationData.branch.id}
        reservationId={reservationData.id}
        reservationTime={reservationData.reservationTime}
        adultCount={reservationData.adultCount}
        childCount={reservationData?.childCount}
        gracePeriod={reservationData?.branch.gracePeriod}
      />
    </>
   );
}
 
export default ReservationPage;