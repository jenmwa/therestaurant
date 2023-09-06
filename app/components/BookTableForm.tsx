import { ChangeEvent, FormEvent, useState } from "react";

class UserBookingData {
  constructor(
    public restaurantId: string | undefined,
    public date: string,
    public numberOfGuests: number
  ) {}
}

export const BookTableForm = ({ restaurantId }: { restaurantId?: string }) => {
  const [userDate, setUserDate] = useState("");
  const [userGuests, setUserGuests] = useState(1);

  const booking = new UserBookingData(restaurantId, userDate, userGuests);
  console.log(booking);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    console.log(date);
    setUserDate(date);
  };

  function handleGuests(e: ChangeEvent<HTMLSelectElement>) {
    const guests = Number(e.target.value);
    console.log("you selected:", guests + " guests");
    setUserGuests(guests);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Select Date:<br></br>
          <input type="date" value={userDate} onChange={handleDate}></input>
        </label>

        <label>
          Number of Guests:<br></br>
          <select
            name="number of guests"
            value={userGuests}
            onChange={handleGuests}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
      </form>
    </>
  );
};

function useContext() {
  throw new Error("Function not implemented.");
}
// POST
// 'http://localhost:3000/booking/create' \
// [
//   {
//     "restaurantId": "623b85d54396b96c57bde7c3",
//     "date": "2022-01-01",
//     "time": "18:00",
//     "numberOfGuests": 4,
//     "customer": {
//       "name": "Franzén",
//       "lastname": "Sebastian",
//       "email": "someone@somedomain.com",
//       "phone": "070-1112233"
//     }
//   }
