"use client";

import { useEffect } from "react";
import { ICreateRestaurant } from "./models/ICreateRestaurant";
import styles from "./page.module.css";
import axios from "axios";

//vi ska kalla på createrestaurant och få svar och svaret tillgängligt i hela appen
export default function Home() {
  useEffect(() => {
    const postUrl =
      "https://school-restaurant-api.azurewebsites.net/restaurant/create";
    const postData: ICreateRestaurant = {
      name: "the restaurant",
      address: {
        street: "Drottninggatan 1",
        zip: "123 45",
        city: "Stockholm",
      },
    };

    const getRestaurant = async (id: string) => {
      await axios.get(
        `https://school-restaurant-api.azurewebsites.net/restaurant/:${id}`
      );
    };

    const createRestaurant = async () => {
      try {
        const response = await axios.post(postUrl, postData);
        console.log("POST Response:", response.data);

        const id = response.data;
        getRestaurant(id);
        console.log(id);
      } catch (error) {
        console.error("POST Error:", error);
      }
    };
  });

  return (
    <main className={styles.main}>
      <div className={styles.description}>MAIN</div>
    </main>
  );
}
