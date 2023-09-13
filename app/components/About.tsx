import { useContext } from "react";
import "../style/about.scss";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { IRestaurant } from "../models/IRestaurant";
import { Section } from "./styled/Sections";
import { H1 } from "./styled/Headings";
import Image from "next/image";

export const About = () => {
  const restaurant = useContext<IRestaurant>(RestaurantContext);

  return (
    <>
      <Section className="about">
        <H1>{restaurant.name}</H1>
        <div className="about-container">
          <div className="about--text">
            {" "}
            <p>
              <span className="about--name">The Restaurant</span> is a lavish
              sanctuary of gastronomy, blending Swedish opulence with
              world-class cuisine.
            </p>
            <p>
              {" "}
              Indulge in a decadent 7-course culinary journey amidst the golden
              ambiance and plush velvet dark green surroundings.{" "}
            </p>
            <p>
              Frequented by Hollywood&apos;s elite, it&apos;s where every dish
              is a masterpiece and every moment, a taste of luxury.
            </p>
            <span className="about--tagline">
              Where Culinary Opulence Meets Swedish Elegance
            </span>
          </div>
          <div className="img-container">
            <Image
              src="/img/img.webp"
              alt="the Restaurant"
              width={700}
              height={350}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              // layout="responsive"
            />
          </div>
        </div>
      </Section>
    </>
  );
};
