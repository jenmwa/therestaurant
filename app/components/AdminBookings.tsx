import Link from "next/link";
import { IBooking } from "../models/IBooking";

interface IAdminBookingsProps {
  bookings: IBooking[];
}

export const AdminBookings = ({ bookings }: IAdminBookingsProps) => {
  return (
    <>
      {" "}
      <section className="admin-wrapper">
        <h1>Admin</h1>
        {/* hämta bokningar från booking */}
        <button>Visa alla bokningar</button>
        {/* visa bokningar via namn på bokningen i en lista */}
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <Link href={`/admin/booking/${booking._id}`}>
                <span>{booking._id}</span>
                <span>
                  {booking.date}
                  {booking.time}
                </span>
                <span>{booking.numberOfGuests}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* när man trycker på en bokning så får man fram ett kort med information som går att editera  */}
      </section>
      ;
    </>
  );
};
