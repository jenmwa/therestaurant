import Link from "next/link";
import { IBooking } from "../models/IBooking";
import { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { IRestaurant } from "../models/IRestaurant";
import { getBookings } from "../services/BookingService";

interface IAdminBookingsProps {
  bookings: IBooking[];
  handleAllBookings: () => void;
  handleEditClick: (booking: IBooking) => void;
  handleDeleteClick: (id: string) => void;
}

export const AdminBookings = ({
  bookings,
  handleAllBookings,
  handleEditClick,
  handleDeleteClick,
}: IAdminBookingsProps) => {
  const restaurant = useContext<IRestaurant>(RestaurantContext);

  return (
    <>
      {" "}
      <section className="admin-wrapper">
        <h1>Admin</h1>
        {/* hämta bokningar från booking */}
        <button onClick={handleAllBookings}>Visa alla bokningar</button>
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
              <button onClick={() => handleEditClick(booking)}>Edit</button>
              <button onClick={() => handleDeleteClick(booking._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        {/* när man trycker på en bokning så får man fram ett kort med information som går att editera  */}
      </section>
      ;
    </>
  );
};
