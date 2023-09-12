"use client";

import { IBooking } from "@/app/models/IBooking";
import { ICustomer } from "@/app/models/ICustomer";
import {
  getBookingById,
  getBookings,
  updateBooking,
} from "@/app/services/BookingService";
import { getCustomer } from "@/app/services/CustomerService";
import { useContext, useEffect, useState } from "react";
import "../../../style/bookingCard.scss";
import { StyledInput } from "@/app/components/styled/Inputs";
import { checkAvailability } from "@/app/functions/checkAvailability";
import { IRestaurant } from "@/app/models/IRestaurant";
import { RestaurantContext } from "@/app/contexts/RestaurantContext";
import { UpdateBooking } from "@/app/models/UpdateBooking";
import { SelectTime } from "@/app/components/SelectTime";

export default function Page({ params }: { params: { id: string } }) {
  const restaurant = useContext<IRestaurant>(RestaurantContext);
  const [booking, setBooking] = useState<IBooking | null>(null);
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [availability, setAvailability] = useState({
    availableTables1800: false,
    availableTables2100: false,
  });
  const [selectedTime, setSelectedTime] = useState("");

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
    <>
      <ul style={{ marginTop: "200px" }}>
        <li>Förnamn: {customer.name}</li>
        <li>Efternamn: {customer.lastname}</li>
        <li>E-mail: {customer.email}</li>
        <li>Datum: {booking.date}</li>
        <li>Tid: {booking.time}</li>
        <li> Antal gäster {booking.numberOfGuests}</li>
      </ul>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await updateBooking(
              booking._id,
              new UpdateBooking(
                booking._id,
                booking.restaurantId,
                selectedDate,
                selectedTime,
                booking.numberOfGuests,
                customer._id
              )
            );
            location.reload();
          } catch (error) {}
        }}
      >
        <StyledInput
          type="date"
          onChange={async (e) => {
            const bookings = await getBookings(restaurant._id);
            setAvailability(checkAvailability(bookings, e.target.value));
            setSelectedDate(e.target.value);
            console.log(e.target.value);
          }}
        ></StyledInput>
        {selectedDate && (
          <SelectTime
            setSelectedTime={setSelectedTime}
            availability={availability}
          />
        )}
        {selectedTime && <button type="submit">Spara ändring</button>}
      </form>
    </>
  );
}
