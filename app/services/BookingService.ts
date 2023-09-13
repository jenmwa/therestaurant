import axios from "axios";
import { checkAvailability } from "../functions/checkAvailability";
import { CreateBooking } from "../models/CreateBooking";
import { IBooking } from "../models/IBooking";
import { UpdateBooking } from "../models/UpdateBooking";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net/booking/";

export const getBookings = async (
  restaurantId: string
): Promise<IBooking[]> => {
  // ^kolla om den fungerar som det ska efter merge

  // export const getBookings = async (restaurantId: string) => {

  try {
    const response = await axios.get<IBooking[]>(
      BASE_URL + `restaurant/${restaurantId}`
    );
    console.log(response.data);
    const bookingData = response.data;
    // if (response.data.length >= 15) {
    //   checkAvailability(bookingData, userDate);
    // } else {
    //   return bookingData;
    // }
    return bookingData;
  } catch (error) {
    console.error("Error:", error);
    return [];
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

export async function updateBooking(bookingId: string, booking: UpdateBooking) {
  try {
    const response = await axios.put(`${BASE_URL}update/${bookingId}`, booking);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

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
