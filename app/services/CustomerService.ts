import axios from "axios";
import { CreateCustomer } from "../models/CreateCustomer";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net/customer/";

export async function getCustomer(newCustomerId: string) {
  const response = await axios.get(`${BASE_URL}${newCustomerId}`);
  return response.data[0];
}

export async function createNewCustomer(postData: CreateCustomer) {
  try {
    const postUrl = `${BASE_URL}create`;
    const response = await axios.post(postUrl, postData);

    const newCustomerId = response.data;
    const newCustomer = await getCustomer(newCustomerId);
    return newCustomer;
  } catch (error) {
    console.error("POST Error:", error);
  }
}
