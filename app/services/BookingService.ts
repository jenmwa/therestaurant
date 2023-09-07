import axios from "axios"
import { checkAvailability } from "../components/functions/checkAvailability";
import { CreateBooking } from "../models/CreateBooking";
import { IBooking } from "../models/IBooking";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net/booking/restaurant/"

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

export const createBookings = async (booking: CreateBooking) => {
  try {
    const response = await axios.post<CreateBooking>(BASE_URL + booking.restaurantId, booking);
    console.log('booking created:', response.data)
    return response.data
  } catch (error) {
    console.error("Error:", error);
  }
};




