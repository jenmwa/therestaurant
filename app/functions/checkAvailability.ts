import { IBooking } from "@/app/models/IBooking"


export const testGETObject = [
  {
    "_id": "64d46dde4f6c87df0eff5817",
    "restaurantId": "623b85d54396b96c57bde7c3",
    "date": "2022-01-01",
    "time": "21:00",
    "numberOfGuests": 10,
    "customerId": "64bf66be184ed5f9dbd9f7f5"
  },
  {
    "_id": "64d47b5d4f6c87df0eff5819",
    "restaurantId": "623b85d54396b96c57bde7c3",
    "date": "2022-01-01",
    "time": "18:00",
    "numberOfGuests": 6,
    "customerId": "64bf66be184ed5f9dbd9f7f5"
  },
  {
    "_id": "64f8bd62ef6dc0cc407751d0",
    "restaurantId": "623b85d54396b96c57bde7c3",
    "date": "2022-01-01",
    "time": "18:00",
    "numberOfGuests": 4,
    "customerId": "624aad28df8a9fb11c3ea8af"
  },
  {
    "_id": "64f9d85b5eecc88857a6a2c9",
    "restaurantId": "623b85d54396b96c57bde7c3",
    "date": "2022-01-01",
    "time": "21:00",
    "numberOfGuests": 1,
    "customerId": "624aad28df8a9fb11c3ea8af"
  },
  {
    "_id": "64f9d97d5eecc88857a6a2cd",
    "restaurantId": "623b85d54396b96c57bde7c3",
    "date": "2022-01-01",
    "time": "21:00",
    "numberOfGuests": 1,
    "customerId": "624aad28df8a9fb11c3ea8af"
  },
  {
    "_id": "64fa1f935eecc88857a6a2f1",
    "restaurantId": "623b85d54396b96c57bde7c3",
    "date": "2022-01-01",
    "time": "18:00",
    "numberOfGuests": 4,
    "customerId": "624aad28df8a9fb11c3ea8af"
  },
  {
    "_id": "64fa1f935eecc88857a6a2g6",
    "restaurantId": "623b85d54396b96c57bde7c3",
    "date": "2022-01-01",
    "time": "18:00",
    "numberOfGuests": 6,
    "customerId": "624aad28df8a9fb11c3ea8af"
  }
]

// export const checkAvailability = (bookings: IBooking[]) => {
export const checkAvailability = (testObject: IBooking[]) => {
  const MAXTABLES = 4;
  console.log(testObject.length)
  if (testGETObject.length >= MAXTABLES) {
    console.log('we have to check if its the same date')
    console.log(testObject)
    // om det stämmer, så måste vi kolla OM datumen är samma.
    //och om detta stämmer, så måste vi kolla OM Tiderna är samma.
    // OM detta stämmer, SESSIONEN FULL!
    // disabla knappen med samma värde som tiderna.
  }

}