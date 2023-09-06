import axios from "axios";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net/booking";

export const getBookings = async (restaurantId: string) => {
  const response = await axios.get(`${BASE_URL}/restaurant/${restaurantId}`);
  return response.data;
};
