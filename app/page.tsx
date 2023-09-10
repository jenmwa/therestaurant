"use client";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Contact from "./contact/page";

//vi ska kalla på createrestaurant och få svar och svaret tillgängligt i hela appen
export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Contact></Contact>
    </>
  );
}
