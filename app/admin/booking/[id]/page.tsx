"use client";

import { IBooking } from "@/app/models/IBooking";
import { ICustomer } from "@/app/models/ICustomer";
import { getBookingById } from "@/app/services/BookingService";
import { getCustomer } from "@/app/services/CustomerService";
import { useEffect, useState } from "react";
import "../../../style/bookingCard.scss";
import { Booking } from "@/app/models/Booking";

interface IAdminEditProps {
  bookings: Booking[];
  handleEditClick: (booking: Booking) => void;
  handleDeleteClick: (id: string) => void;
}

export default function Page({ params }: { params: { id: string } }) {
  const [booking, setBooking] = useState<IBooking | null>(null);
  const [customer, setCustomer] = useState<ICustomer | null>(null);

  useEffect(() => {
    if (params.id) {
      (async () => {
        const bookingResponse = await getBookingById(params.id);
        const customerResponse = await getCustomer(bookingResponse.customerId);

        setBooking(bookingResponse);
        setCustomer(customerResponse);
      })();
    }
  }, [params.id]);
  if (!booking || !customer) {
    return <div>ingen bokning</div>;
  }
  return (
    <ul style={{ marginTop: "200px" }}>
      <li>Förnamn: {customer.name}</li>
      <li>Efternamn: {customer.lastname}</li>
      <li>E-mail: {customer.email}</li>
      <li>Datum: {booking.date}</li>
      <li>Tid: {booking.time}</li>
      <li> Antal gäster {booking.numberOfGuests}</li>
      <button onClick={() => handleEditClick(booking)}>Ändra</button>
      <button onClick={() => handleDeleteClick(booking._id)}>Avboka</button>
    </ul>
  );
}
