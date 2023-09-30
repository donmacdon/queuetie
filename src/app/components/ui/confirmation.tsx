// "use client"

import { db } from '@/app/lib/db';
import { Reservation, Restaurant, User } from '@prisma/client';
import { format, getDay } from 'date-fns';
import { Check } from 'lucide-react';
import { redirect } from 'next/navigation';
import axios from 'axios';
// import { useRouter } from "next/navigation";
// import { useState } from "react";

//Reservation Props

interface ConfirmationProps {
  reservation: Reservation;
  restaurant: Restaurant;
  user: User;
}

export const Confirmation = async() => {
  // const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();

  const data = await db.reservation.findFirst({
    where: {
      id: '1cfd3623-b4ba-450c-9884-89d906095688',
    },include: {
      restaurant: true,
    }
  });

  const reservationDayString = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  if (!data) {
    return redirect("/");
  }

  const reservationDateTime = format(data?.reservationTime, 'yyyy/MM/dd HH:mm');
  const reservationDay = getDay(data?.reservationTime);
  const numberOfAdults = data?.adultCount;
  const numberOfChildren = data?.childCount;
  const seatHoldTime = data?.restaurant.gracePeriod;

  const onConfirm = async () => {
    try{
        // setIsLoading(true);

        await axios.patch(`/api/reservation/asdasd/confirm`);
        
        // router.refresh();
        // router.push("/");
    } catch (error) {
        console.log(error);
    } finally {
        // setIsLoading(false);
    }
}

  return (
    <div className="container mx-auto max-w-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex flex-1 items-center justify-center">
            {reservationDateTime.split(' ')[0]}{' '}
            <span className="text-gray-600">
              {reservationDayString[reservationDay]}
            </span>
          </h2>
          <p className="text-5xl flex items-center justify-center flex-1">
            {reservationDateTime.split(' ')[1]}
          </p>
          <div className="flex flex-1 flex-col text-sm items-center justify-center">
            <p>{numberOfAdults} Adults</p>
            {numberOfChildren && <p>{numberOfChildren} Children</p>}
          </div>
          <div className="card-actions flex flex-col justify-center items-center flex-1 mt-4 mb-4">
            <button className="flex-grow flex w-full btn btn-primary">
              <Check />
              Confirm
            </button>
            <button className="flex-grow flex w-full btn">Cancel</button>
          </div>
          <p className="text-xs">
            To hold your table please press "<span>Confirm</span>", and your
            seat will be held for {seatHoldTime} minutes.
          </p>
        </div>
      </div>
    </div>
  );
};
