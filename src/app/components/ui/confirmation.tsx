"use client";

import { format, getDay } from "date-fns"
import { Check } from "lucide-react";

//Reservation Props


export const Confirmation = () => {

  const reservationDayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const reservationDateTime = format(Date.now(), "yyyy/MM/dd HH:mm")
  const reservationDay = getDay(Date.now());
  const numberOfAdults = 2, numberOfChildren = 2;
  const seatHoldTime = 15

  return ( 
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title flex flex-1 items-center justify-center">{reservationDateTime.split(" ")[0]} <span className="text-gray-600">{reservationDayString[reservationDay]}</span></h2>
        <p className="text-5xl flex items-center justify-center flex-1">{reservationDateTime.split(" ")[1]}</p>
        <div className="flex flex-1 flex-col text-sm items-center justify-center">
          <p>{numberOfAdults} Adults</p>
          {numberOfChildren && (<p>{numberOfChildren} Children</p>)}
        </div>
        <div className="card-actions flex flex-col justify-center items-center flex-1 mt-4 mb-4">
          <button className="flex-grow flex w-full btn btn-primary"><Check />Confirm</button>
          <button className="flex-grow flex w-full btn btn-neutral">Cancel</button>
        </div>
        <p className="text-xs">To hold your table please press "<span>Confirm</span>", and your seat will be held for {seatHoldTime} minutes.</p>
      </div>
    </div>
    </>
   );
}
