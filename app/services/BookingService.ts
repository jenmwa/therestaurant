import axios from "axios"
import { checkAvailability } from "../components/functions/checkAvailability";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net/booking/restaurant/"

export interface IBooking {
  id: string,
  restaurantId: string,
  date: string,
  time: string,
  numberOfGuests: number,
  customerId: string
}

export const getBookings = async (restaurantId: string) => {
  try {
    const response = await axios.get<IBooking[]>(BASE_URL + restaurantId);
    console.log(response.data)
    const bookingData = response.data
    if (response.data.length === 0) {
      return bookingData;
    } else {
      checkAvailability(bookingData)
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


