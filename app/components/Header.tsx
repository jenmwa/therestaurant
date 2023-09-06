import { Navigation } from "./Navigation"
import '../style/header.scss';
import { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";


export const Header = () => {
  const restaurant = useContext(RestaurantContext)
  console.log(restaurant);
  return <>
    <header>
      <Navigation></Navigation>
    </header>
   
    
  </>
}