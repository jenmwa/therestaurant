"use client";

import { useContext, useEffect, useState } from "react";
import "../style/admin.scss";
import { IRestaurant } from "../models/IRestaurant";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { deleteBooking, getBookings } from "../services/BookingService";
import { AdminBookings } from "../components/AdminBookings";
import { getCustomer } from "../services/CustomerService";
import { Booking } from "../models/Booking";

export function Admin() {
  const restaurant = useContext<IRestaurant>(RestaurantContext);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const onBookingDelete = async (bookingId: string) => {
    await deleteBooking(bookingId);
    setBookings(bookings.filter((b) => b._id !== bookingId));
  };

  //Hämtar alla bokningar
  useEffect(() => {
    const id = restaurant._id;
    if (id) {
      (async () => {
        const response = await getBookings(id);
        const bookingsWithCustomer = await Promise.all(
          response.map(async (b) => {
            const c = await getCustomer(b.customerId);
            return new Booking(
              b._id,
              b.restaurantId,
              b.date,
              b.time,
              b.numberOfGuests,
              b.customerId,
              c
            );
          })
        );

        setBookings(bookingsWithCustomer);
      })();
    }
  }, [restaurant._id]);

  if (bookings.length < 1) {
    return <div>Laddar...</div>;
  }

  return (
    <AdminBookings
      onBookingDelete={onBookingDelete}
      bookings={bookings}
    ></AdminBookings>
  );
}

export default Admin;
