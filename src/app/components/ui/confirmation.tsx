"use client"

import { db } from '@/app/lib/db';
import { format, getDay } from 'date-fns';
import { Check } from 'lucide-react';
import { redirect } from 'next/navigation';
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useState } from "react";

//Reservation Props
interface ConfirmationProps {
  restaurantId: string;
  reservationId: string;
  reservationTime: Date;
  adultCount: number;
  childCount: number | null;
  gracePeriod: number;
}


export const Confirmation = ({
  restaurantId,
  reservationId,
  reservationTime,
  adultCount,
  childCount,
  gracePeriod
}:ConfirmationProps ) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  

  const reservationDayString = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const reservationDateTime = format(reservationTime, 'yyyy/MM/dd HH:mm');
  const reservationDay = getDay(reservationTime);
  const numberOfAdults = adultCount;
  const numberOfChildren = childCount;
  const seatHoldTime = gracePeriod;

  const onConfirm = async () => {
    try{
        setIsLoading(true);

        await axios.patch(`/api/restaurant/${restaurantId}/reservation/${reservationId}/confirm`);
        
        router.refresh();
        router.push("/");
    } catch (error) {
        console.log(error);
    } finally {
        setIsLoading(false);
    }
  }
  const onCancel = async () => {
      try{
          setIsLoading(true);
  
          await axios.patch(`/api/restaurant/${restaurantId}/reservation/${reservationId}/cancel`);
          
          router.refresh();
          router.push("/");
      } catch (error) {
          console.log(error);
      } finally {
          setIsLoading(false);
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
            <button disabled={isLoading} onClick={onConfirm} className="flex-grow flex w-full btn btn-primary">
              <Check />
              Confirm
            </button>
            <button disabled={isLoading} onClick={onCancel} className="flex-grow flex w-full btn">Cancel</button>
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
