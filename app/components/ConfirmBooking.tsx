"use client";

import "../style/confirmBooking.scss";
import { ICustomer } from "../models/ICustomer";

interface IConfirmBookingProps {
  customer: ICustomer | undefined;
  userGuests: number;
  selectedTime: string | null;
  userDate: string;
  createBooking: () => void;
  confirmedBooking: boolean;
}

export function ConfirmBooking({
  customer,
  userGuests,
  selectedTime,
  userDate,
  confirmedBooking,
  createBooking,
}: IConfirmBookingProps) {
  return (
    <>
      <section className="confirmBoooking">
        {confirmedBooking ? (
          <div className="confirmBookingCard">
            <span>
              Thank you for deciding to dine with us. We'll see you soon!
            </span>
          </div>
        ) : (
          <div className="confirmBookingCard">
            <h3>Confirm Booking</h3>
            <span>Name: {customer?.name}</span>
            <span>Lastname: {customer?.lastname}</span>
            <span>Date: {userDate}</span>
            <span>Time: {selectedTime}</span>
            <span>Number of guests: {userGuests}</span>
            <button onClick={createBooking}>Confirm booking</button>
          </div>
        )}
      </section>
    </>
  );
}
