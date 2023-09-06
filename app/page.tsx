"use client";

import { useEffect, useReducer, useState } from "react";
import { ICreateRestaurant } from "./models/ICreateRestaurant";
import styles from "./page.module.css";
import axios from "axios";
import { log } from "console";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { IRestaurant } from "./models/IRestaurant";
import { createRestaurant } from "./services/RestaurantService";
import { RestaurantReducer } from "./reducers/RestaurantReducer";
import { RestaurantContext } from "./contexts/RestaurantContext";
import { RestaurantDispatchContext } from "./contexts/RestaurantDispatchContext";

//vi ska kalla på createrestaurant och få svar och svaret tillgängligt i hela appen
export default function Home() {
  const [restaurant, dispatch] = useReducer(RestaurantReducer, []);

  useEffect(() => {
    async function getData() {
      const restaurant = await createRestaurant();
      dispatch({ type: "SETRESTAURANT", payload: JSON.stringify(restaurant) });
    }
    getData();
  }, []);

  return (
    <main className={styles.main}>
      <RestaurantContext.Provider value={restaurant}>
        <RestaurantDispatchContext.Provider value={dispatch}>
          <Hero></Hero>
          <About></About>
        </RestaurantDispatchContext.Provider>
      </RestaurantContext.Provider>
    </main>
  );
}
