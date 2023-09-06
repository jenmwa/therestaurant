import axios from "axios";
import { ICreateCustomer } from "../models/ICreateCustomer";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net/customer/";

const getCustomer = async (newCustomerId: string) => {
  const response = await axios.get(`${BASE_URL}${newCustomerId}`);
  return response.data[0];
};

export const createCustomer = async () => {
  try {
    const postUrl = `${BASE_URL}create`;
    const postData: ICreateCustomer = {
      name: 'te',
      lastname: 'st',
      email: 'te@st.com',
      phone: '012456789'
    };
    const response = await axios.post(postUrl, postData);
    console.log("POST Response:", response.data);

    const newCustomerId = response.data;
    const newCustomer = await getCustomer(newCustomerId);
    console.log(newCustomer);
    return newCustomer;
  } catch (error) {
    console.error("POST Error:", error);
  }
};
