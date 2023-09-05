"use client";

import { useEffect, useState } from "react";
import { ICreateRestaurant } from "./models/ICreateRestaurant";
import styles from "./page.module.css";
import axios from "axios";
import { log } from "console";

//vi ska kalla på createrestaurant och få svar och svaret tillgängligt i hela appen
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>MAIN</div>
    </main>
  );
}
