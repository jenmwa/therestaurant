"use client";

import "../style/confirmBooking.scss";
import { ICustomer } from "../models/ICustomer";

interface IConfirmBookingProps {
  customer: ICustomer | undefined;
  userGuests: number;
  selectedTime: string | null;
  userDate: string;
  createBooking: () => void;
}

export function ConfirmBooking({
  customer,
  userGuests,
  selectedTime,
  userDate,
  createBooking,
}: IConfirmBookingProps) {
  return (
    <>
      <section className="confirmBoooking">
        <h3>Confirm Booking</h3>
        <span>Name: {customer?.name}</span>
        <span>Lastname: {customer?.lastname}</span>
        <span>Date: {userDate}</span>
        <span>Time: {selectedTime}</span>
        <span>Number of guests: {userGuests}</span>
        <button onClick={createBooking}>Confirm booking</button>
      </section>
    </>
  );
}
