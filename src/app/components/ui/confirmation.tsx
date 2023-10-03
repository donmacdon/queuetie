"use client"
import { Fragment } from 'react';
import { format, getDay } from 'date-fns';
import { Check } from 'lucide-react';
import { clsx } from "clsx";
import { Transition } from "@headlessui/react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

//Reservation Props
interface ConfirmationProps {
  restaurantId: string;
  branchId: string;
  reservationId: string;
  reservationTime: Date;
  adultCount: number;
  childCount: number | null;
  gracePeriod: number;
}


export const Confirmation = ({
  restaurantId,
  branchId,
  reservationId,
  reservationTime,
  adultCount,
  childCount,
  gracePeriod
}:ConfirmationProps ) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCancel, setIsLoadingCancel] = useState(false);
  const router = useRouter();

  let [isOpen, setIsOpen] = useState(false);

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

        await axios.patch(`/api/restaurant/${restaurantId}/${branchId}/reservation/${reservationId}/confirm`);
        
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
          setIsLoadingCancel(true);
  
          await axios.patch(`/api/restaurant/${restaurantId}/${branchId}/reservation/${reservationId}/cancel`);
          
          router.refresh();
          router.push("/");
      } catch (error) {
          console.log(error);
      } finally {
          setIsLoadingCancel(false);
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
            {numberOfChildren && (numberOfChildren > 0 && (<p>{numberOfChildren} Children</p>))}
          </div>
          <div className="card-actions flex flex-col justify-center items-center flex-1 mt-4 mb-4">
            <button disabled={isLoading} onClick={onConfirm} className="flex-grow flex w-full btn btn-primary">
              <Check />
              Confirm
            </button>
            <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
              <AlertDialog.Trigger asChild>
                <button disabled={isLoading} className="flex-grow flex w-full btn">Cancel</button>
              </AlertDialog.Trigger>
              <AlertDialog.Portal forceMount>
                <Transition.Root show={isOpen}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <AlertDialog.Overlay
                      forceMount
                      className="fixed inset-0 z-20 bg-black/50"
                    />
                  </Transition.Child>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <AlertDialog.Content
                      forceMount
                      className={clsx(
                        "fixed z-50 rounded",
                        "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
                        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                        "bg-white dark:bg-gray-800",
                        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                      )}
                    >
                      <AlertDialog.Title className="text-md font-medium text-gray-900 dark:text-gray-100">
                        Cancel your reservation?
                      </AlertDialog.Title>
                      <AlertDialog.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                        This action cannot be undone. <br />We will give away your time slot once cancelled.
                      </AlertDialog.Description>
                      <div className="mt-4 flex justify-end space-x-2">
                        <AlertDialog.Cancel
                          className="btn"
                        >
                          No
                        </AlertDialog.Cancel>
                        <AlertDialog.Action
                          className="btn btn-primary"
                          disabled = {isLoadingCancel}
                          onClick={(event) => { onCancel(), event.preventDefault();}}
                        >
                          Yes
                        </AlertDialog.Action>
                      </div>
                    </AlertDialog.Content>
                  </Transition.Child>
                </Transition.Root>
              </AlertDialog.Portal>
            </AlertDialog.Root>
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
