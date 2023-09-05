"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {
  const [restaurant, setRestaurant] = useState([]);

  async function handleClick() {
    const response = await axios.get("/api/restaurant");
  }

  return (
    <>
      HOME
      <button onClick={handleClick}>Get Restaurant</button>
      <span>{restaurant}</span>
    </>
  );
}

export default Home;
