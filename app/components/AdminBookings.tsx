import Link from "next/link";
import "../style/admin.scss";
import { Booking } from "../models/Booking";
import { ChangeEvent, useEffect, useState } from "react";
import { deleteBooking } from "../services/BookingService";

interface IAdminBookingsProps {
  bookings: Booking[];
  onBookingDelete: (bookingId: string) => void;
}

export const AdminBookings = ({
  bookings,
  onBookingDelete,
}: IAdminBookingsProps) => {
  const [filter, setFilter] = useState("");

  const filteredBookings = bookings.filter((b) => {
    return (
      b.customerInfo.name.toLowerCase().includes(filter.toLowerCase()) ||
      b.customerInfo.lastname.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <section className="admin-wrapper">
      <h1>Admin</h1>
      <p>Sök bokning via namn</p>
      <input
        className="admin-input"
        value={filter}
        onChange={updateFilter}
        type="text"
      />

      <ul className="admin-booking-list-wrapper">
        {filteredBookings.map((booking) => (
          <li className="admin-booking-list" key={booking._id}>
            <div className="list-details">
              <span>
                {booking.customerInfo.name} {booking.customerInfo.lastname}
              </span>
              <span> {booking.date}</span>
              <span> {booking.time}</span>
              <span>{booking.numberOfGuests}</span>
              <Link href={`/admin/booking/${booking._id}`}>Ändra</Link>
              <span>
                <button onClick={() => onBookingDelete(booking._id)}>
                  Avboka
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
