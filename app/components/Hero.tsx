import "../style/hero.scss";

import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "./styled/Buttons";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();

  const goToBookTable = () => {
    router.push("/booking");
  };

  const goToContact = () => {
    router.push("/contact");
  };
  return (
    <>
      <div className="hero-img">
        <div className="hero-info">
          <div className="logo-container">
            <Image
              src="/img/logo_light.png"
              alt="the Restaurant"
              width={350}
              height={125}
            />
          </div>
          {/* <div className="button-container"> */}
          <PrimaryButton onClick={goToBookTable}>Book a Table</PrimaryButton>
          <SecondaryButton onClick={goToContact}>Contact Us</SecondaryButton>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
