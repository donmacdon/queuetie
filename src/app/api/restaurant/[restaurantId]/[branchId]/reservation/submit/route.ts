import { db } from "@/app/lib/db";
import moment from "moment";
import { NextResponse } from "next/server";
export async function POST(req: Request){

  try{
    const data = await req.json();

    if(!data){
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let user = await db.user.findFirst({
      where: {
        firstName: data.fName,
        lastName: data.lName,
        phoneNumber: data.phone,
      }
    })

    if(!user){
      await db.user.create({
        data: {
          firstName: data.fName,
          lastName: data.lName,
          phoneNumber: data.phone,
          email: data?.email || "",
        }
      })

      user = await db.user.findFirst({
        where: {
          firstName: data.fName,
          lastName: data.lName,
          phoneNumber: data.phone,
        }
      })
    }
    
    const reservation = await db.reservation.create({
      data: {
        userId: user!.id,
        branchId: data.branchId,
        adultCount: data.numAdult,
        childCount: data?.numChild,
        reservationTime: data.reservationDateTime
      }
    })

    
    return NextResponse.json(reservation, { status: 200 });
  } catch (error) {
    console.log("RESERVATION_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}