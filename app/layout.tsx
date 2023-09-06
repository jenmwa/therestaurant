"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useReducer } from "react";
import { RestaurantReducer } from "./reducers/RestaurantReducer";
import { IRestaurant } from "./models/IRestaurant";
import { createRestaurant } from "./services/RestaurantService";
import { RestaurantContext } from "./contexts/RestaurantContext";
import { RestaurantDispatchContext } from "./contexts/RestaurantDispatchContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  metadata,
}: {
  children: React.ReactNode;
  metadata: Metadata;
}) {
  const [restaurant, dispatch] = useReducer(
    RestaurantReducer,

    {} as IRestaurant
  );

  useEffect(() => {
    async function getData() {
      const restaurant = await createRestaurant();
      dispatch({ type: "SETRESTAURANT", payload: restaurant });
    }
    getData();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <RestaurantContext.Provider value={restaurant}>
          <RestaurantDispatchContext.Provider value={dispatch}>
            <Header />
            {children}
            <Footer />
          </RestaurantDispatchContext.Provider>
        </RestaurantContext.Provider>
      </body>
    </html>
  );
}
