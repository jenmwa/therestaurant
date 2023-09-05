'use client'

import styles from "./page.module.css";
import axios from "axios";

export default function Home() {

  const postUrl = 'https://school-restaurant-api.azurewebsites.net/restaurant/create';
  const postData = {
    name: 'the restaurant',
    address: {
      street: 'Drottninggatan 1',
      zip: '123 45',
      city: 'Stockholm',
    },
  };

  const createRestaurant = async () => {
    try {
      const response = await axios.post(postUrl, postData);
      console.log('POST Response:', response.data);

      const id = response.data;
      console.log(id)

    } catch (error) {
      console.error('POST Error:', error);
    }
  };



  return (
    <main className={styles.main}>
      <div className={styles.description}>MAIN</div>
      <button onClick={createRestaurant}>Create Restaurant</button>
    </main>
  );
}
