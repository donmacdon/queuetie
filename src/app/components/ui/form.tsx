"use client"

import axios from "axios"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from 'next/navigation';
import validator from 'validator' //Phone Number Validator
import moment from 'moment';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ReservationProps {
  restaurantId: string;
  branchId: string;
}

const formSchema = z.object({
  fName: z.string().min(1, "Enter a valid first name"),
  lName: z.string().min(1, "Enter a valid last name"),
  email: z.string().email("Invalid Email"),
  phone: z.string().min(1, "Enter a valid phone number"),
  numAdult: z.number().min(1, "Enter a valid number"),
  numChild: z.number().min(0, "Enter a valid number"),
  reservationDateTime: z.string().optional(),
  branchId: z.string().optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

export const FormUI = ({
  restaurantId,
  branchId,
}:ReservationProps ) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (values: FormSchemaType) => {
    values.reservationDateTime = moment.utc(moment(startDate).set('hour', 9).set('minute', 30).set('second', 0).toDate()).toISOString(); //hardcoded time
    values.branchId = branchId;
    const res = await axios.post(`/api/restaurant/${restaurantId}/${branchId}/reservation/submit`, values)
    router.push(`/restaurant/${restaurantId}/${branchId}/reservation/${res.data.id}`);
    
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto pb-5 md:max-l:flex sm:max-sm:flex">
          <div className="card shadow-xl">
            <div className="card-body">
              <article className="prose max-w-none">
                <h2 className=" text-center"></h2>
                <h5 className="text-center">INSERT RESTAURANT ADDRESS HERE</h5>
              </article>

              <div className="divider"></div>
              <div className="mx-auto">
                <div className="w-full">
                  <div className="flex gap-x-2 w-full">
                    <div className="flex-grow grid h-auto card place-items-center">
                      <div className="form-control w-full">
                        <input
                          type="text"
                          placeholder="First Name"
                          id="fname"
                          className="input input-bordered input-md w-full focus:outline-none"
                          {...register("fName")}
                        />
                        {errors.fName && (
                          <span className="text-red-800 block mt-2">
                            {errors.fName?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex-grow grid h-auto card place-items-center">
                      <div className="form-control w-full">
                        <input
                          type="text"
                          placeholder="Last Name"
                          id="lname"
                          className="input input-bordered input-md w-full focus:outline-none"
                          {...register("lName")}
                        />
                        {errors.lName && (
                          <span className="text-red-800 block mt-2">
                            {errors.lName?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>


                <div className="w-full">
                  <div className="form-control py-1">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="input input-bordered input-md w-full focus:outline-none"
                      {...register("email")}
                    />
                    {errors.email && (
                          <span className="text-red-800 block mt-2">
                            {errors.email?.message}
                          </span>
                    )}
                  </div>
                  <div className="form-control py-1">
                    <input
                      type="number"
                      id="phone"
                      placeholder="Phone"
                      className="input input-bordered input-md w-full focus:outline-none"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <span className="text-red-800 block mt-2">
                        {errors.phone?.message}
                      </span>
                    )}
                  </div>
                </div> 

                <div className="w-full">
                  <div className="flex gap-x-2 w-full ">
                    <div className="flex-grow grid h-auto card place-items-center">
                      <label className="label">
                        <span className="label-text ">How many adults?</span>
                      </label>
                      <select 
                        className="w-full select select-bordered focus:outline-none" 
                        {...register("numAdult", { valueAsNumber: true })}
                      >
                        <option disabled defaultValue={1}>
                          # of adults
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                      </select>
                      {errors.numAdult && (
                        <span className="text-red-800 block mt-2">
                          {errors.numAdult?.message}
                        </span>
                      )}
                    </div>
                    <div className="flex-grow grid h-auto card place-items-center">
                      <label className="label">
                        <span className="label-text">How many children?</span>
                      </label>
                      <select
                        className="w-full select select-bordered focus:outline-none"
                        {...register("numChild", { valueAsNumber: true })}
                      >
                        <option disabled defaultValue={0}>
                          # of children
                        </option>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                      </select>
                      {errors.numChild && (
                        <span className="text-red-800 block mt-2">
                          {errors.numChild?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex gap-x-2 w-full ">
                    <div className="flex-grow grid h-auto card place-items-center">
                      <label className="label">
                        <span className="label-text ">Reservation Date</span>
                      </label>
                        <DatePicker 
                          className="w-full select select-bordered focus:outline-none" 
                          selected={startDate} 
                          onChange={(date) => setStartDate((!date ? new Date() : date))}
                          minDate={new Date()}   
                        />
                    </div>
                    <div className="flex-grow grid h-auto card place-items-center">
                      <label className="label">
                        <span className="label-text">Reservation Time (Hardcoded)</span>
                      </label>
                      <select className="w-full select select-bordered focus:outline-none">
                        <option disabled defaultValue={0}>
                          Reservation Time
                        </option>
                        <option value={"09:30:00"}>9:30AM</option>
                      </select>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="card-actions justify-end mx-auto pb-5">
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">SUBMIT</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
