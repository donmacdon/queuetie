import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { reservationId: string}}
){
  try{
    if (!params.reservationId){
      return new NextResponse("Reservation ID missing", { status: 400 });
    }

    const cancel = await db.reservation.update({
      where: {
        id: params.reservationId,
      },
      data: {
        isCancelled: true,
      }
    });


    return NextResponse.json(cancel);
  } catch (error) {
    console.log("CANCEL_PATCH", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}