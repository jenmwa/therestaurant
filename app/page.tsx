"use client";

import styles from "./page.module.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";

//vi ska kalla på createrestaurant och få svar och svaret tillgängligt i hela appen
export default function Home() {
//   const [restaurant ,dispatch] = useReducer(RestaurantReducer, {} as IRestaurant)
//   // const [restaurant, setRestaurant] = useState<ICreateRestaurant | null>(null)

//   useEffect(() => {
//     createRestaurant()
//     .then((data) => {
//       dispatch({ type: "SET_RESTAURANT", payload: data });
//     })
//     .catch((error) => {
//       console.error('Error', error)
//     })
//   },[])
// console.log(restaurant)

  return (
    <main className={styles.main}>
      <Hero></Hero>
      <About></About>
    </main>
  );
}
