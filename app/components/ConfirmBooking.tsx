"use client";

import "../style/confirmBooking.scss";
import { ICustomer } from "../models/ICustomer";
import { Section } from "./styled/Sections";
import { H4 } from "./styled/Headings";
import { PrimaryButton } from "./styled/Buttons";

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
      <Section className="confirmBooking">
        {confirmedBooking ? (
          <div className="confirmBookingCard">
            <span>
              Thank you for deciding to dine with us. We&apos;ll see you soon!
            </span>
          </div>
        ) : (
          <div className="confirmBookingCard">
            <H4>Confirm Booking</H4>
            <span>Name: {customer?.name}</span>
            <span>Lastname: {customer?.lastname}</span>
            <span>Date: {userDate}</span>
            <span>Time: {selectedTime}</span>
            <span>Number of guests: {userGuests}</span>
            <PrimaryButton onClick={createBooking}>
              Confirm booking
            </PrimaryButton>
          </div>
        )}
      </Section>
    </>
  );
}
