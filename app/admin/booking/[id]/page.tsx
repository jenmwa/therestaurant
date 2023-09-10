"use client";

import { getBookingById } from "@/app/services/BookingService";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    if (params.id) {
      (async () => {
        const response = await getBookingById(params.id);
        console.log(response);

        setBooking(response);
      })();
    }
  }, [params.id]);
  return (
    <div style={{ marginTop: "200px" }}>
      My Post: {params.id}, Antal gäster {booking.numberOfGuests}
    </div>
  );
}
