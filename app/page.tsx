"use client";

import { useEffect, useState } from "react";
import { ICreateRestaurant } from "./models/ICreateRestaurant";
import styles from "./page.module.css";
import axios from "axios";
import { log } from "console";
import { Hero } from "./components/Hero";
import { About } from "./components/About";

//vi ska kalla på createrestaurant och få svar och svaret tillgängligt i hela appen
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <About></About>
    </main>
  );
}
