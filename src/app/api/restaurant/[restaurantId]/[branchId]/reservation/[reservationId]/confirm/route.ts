import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { restaurantId: string, reservationId: string}}
){
  try{
    if (!params.reservationId){
      return new NextResponse("Reservation ID missing", { status: 400 });
    }


    const confirm = await db.reservation.update({
      where: {
        id: params.reservationId,
        NOT : {
          isCancelled: true
        }
      },
      data: {
        isConfirmed: true,
      }
    });



    return NextResponse.json(confirm, { status: 200 });
  } catch (error) {
    console.log("CONFIRM_PATCH", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}