import { IBooking } from "../models/IBooking"

const MAXTABLES = 4;
export const checkAvailability = (bookingData: IBooking[], userDate: string,) => {
  const bookingsForUserDate = bookingData.filter((booking) => booking.date === userDate);
  console.log(bookingsForUserDate);
  if (bookingsForUserDate.length > 0) {
    console.log("Bookings found for the same date.");
    const availableTables1800 = bookingsForUserDate.filter((booking) => booking.time === '18:00').length < MAXTABLES;
    const availableTables2100 = bookingsForUserDate.filter((booking) => booking.time === '21:00').length < MAXTABLES;
    console.log('available at 18:', availableTables1800);
    console.log('available at 21:', availableTables2100);
    return { availableTables1800, availableTables2100 };
  } else {
    console.log("No bookings found for the same date.");
    return { availableTables1800: true, availableTables2100: true };
  }
}


// export const testGETObject = [
//   {
//     "_id": "64d46dde4f6c87df0eff5817",
//     "restaurantId": "623b85d54396b96c57bde7c3",
//     "date": "2022-01-01",
//     "time": "21:00",
//     "numberOfGuests": 10,
//     "customerId": "64bf66be184ed5f9dbd9f7f5"
//   },
//   {
//     "_id": "64d47b5d4f6c87df0eff5819",
//     "restaurantId": "623b85d54396b96c57bde7c3",
//     "date": "2022-01-01",
//     "time": "18:00",
//     "numberOfGuests": 6,
//     "customerId": "64bf66be184ed5f9dbd9f7f5"
//   },
//   {
//     "_id": "64f8bd62ef6dc0cc407751d0",
//     "restaurantId": "623b85d54396b96c57bde7c3",
//     "date": "2022-01-01",
//     "time": "18:00",
//     "numberOfGuests": 4,
//     "customerId": "624aad28df8a9fb11c3ea8af"
//   },
//   {
//     "_id": "64f9d85b5eecc88857a6a2c9",
//     "restaurantId": "623b85d54396b96c57bde7c3",
//     "date": "2022-01-01",
//     "time": "21:00",
//     "numberOfGuests": 1,
//     "customerId": "624aad28df8a9fb11c3ea8af"
//   },
//   {
//     "_id": "64f9d97d5eecc88857a6a2cd",
//     "restaurantId": "623b85d54396b96c57bde7c3",
//     "date": "2022-01-01",
//     "time": "21:00",
//     "numberOfGuests": 1,
//     "customerId": "624aad28df8a9fb11c3ea8af"
//   },
//   {
//     "_id": "64fa1f935eecc88857a6a2f1",
//     "restaurantId": "623b85d54396b96c57bde7c3",
//     "date": "2022-01-01",
//     "time": "18:00",
//     "numberOfGuests": 4,
//     "customerId": "624aad28df8a9fb11c3ea8af"
//   },
//   {
//     "_id": "64fa1f935eecc88857a6a2g6",
//     "restaurantId": "623b85d54396b96c57bde7c3",
//     "date": "2022-01-01",
//     "time": "21:00",
//     "numberOfGuests": 6,
//     "customerId": "624aad28df8a9fb11c3ea8af"
//   },
//   {
//     "_id": "64fa1f935eecc88857a6a234",
//     "restaurantId": "623b85d54396b96c57bde7c3",
//     "date": "2022-01-01",
//     "time": "18:00",
//     "numberOfGuests": 6,
//     "customerId": "624aad28df8a9fb11c3ea8af"
//   }
// ]


// export const checkAvailability = (bookings: IBooking[]) => {
// console.log(testGETObject.length)
// if (testGETObject.length >= MAXTABLES) {
//   console.log('we have to check if its the same date')
//   console.log(JSON.stringify(userDate), testObject)
//   const bookingsForUserDate = testObject.filter((booking) => booking.date === userDate);
//   if (bookingsForUserDate.length > 0) {
//     console.log("It's true. Bookings found for the same date.");
//     checkMaxSession(bookingsForUserDate)
//   } else {
//     console.log("It's false. No bookings found for the same date.");
//     // returnera både 18:00 och 21:00 available
//   }
// }

//   if (bookingsForUserDate.length >= MAXTABLES) {
//     console.log(JSON.stringify(userDate), bookingsForUserDate);

//     const availableTables1800 = checkMaxSession(bookingsForUserDate, "18:00")
//     const availableTables2100 = checkMaxSession(bookingsForUserDate, "21:00")

//     if (availableTables1800 && availableTables2100) {
//       console.log('Both 18:00 and 21:00 are available.');
//     }
//     else if (availableTables1800) {
//       console.log('Only 18:00 is available.');
//       return availableTables1800;
//     }
//     else if (availableTables2100) {
//       console.log('Only 21:00 is available.');
//     } else {
//       console.log('No tables are available for 18:00 and 21:00.');
//     }
//   } else {
//     console.log('Both sessions Available.');
//   }
// }

// export const checkMaxSession = (bookingsForUserDate: IBooking[], time: string) => {
//   console.log('date checked, lets check time:', time, bookingsForUserDate);

//   const bookingsPerTime = bookingsForUserDate.filter((booking) => booking.time === time);
//   console.log(bookingsPerTime)
//   return bookingsPerTime.length < MAXTABLES;
// }


