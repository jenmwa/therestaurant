import axios from "axios"
import { checkAvailability } from "../functions/checkAvailability";
import { CreateBooking } from "../models/CreateBooking";
import { IBooking } from "../models/IBooking";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net/booking/";

export const getBookings = async (restaurantId: string) => {
  try {
    const response = await axios.get<IBooking[]>(
      BASE_URL + `restaurant/${restaurantId}`
    );
    console.log(response.data);
    const bookingData = response.data;
    if (response.data.length >= 15) {
      checkAvailability(bookingData);
    } else {
      return bookingData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const createBookings = async (booking: CreateBooking) => {
  try {
    const response = await axios.post<CreateBooking>(
      BASE_URL + "create",
      booking
    );
    console.log("booking created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

// https://school-restaurant-api.azurewebsites.net/booking/delete/:id

export async function deleteBooking(id: string) {
  try {
    const response = await axios.delete(`${BASE_URL}delete/${id}`);
    console.log("delete service", response.data);
  } catch (error) {
    console.log("Error", error);
  }
}

// import axios from "axios";

// const BASE_URL = "https://school-restaurant-api.azurewebsites.net/booking";

// export const getBookings = async (restaurantId: string) => {
//  const response = await axios.get(`${BASE_URL}/restaurant/${restaurantId}`);
//   return response.data;
// };

export const getBookingById = async (id: string): Promise<IBooking> => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data[0];
};
