import '../style/hero.scss';

import Image from "next/image"
import Link from "next/link"

export const Hero = () => {

  return <>
  <div className='hero-img'>
      <div className='hero-info'>
        <div className='logo-container'>
          <Image src='/img/logo_light.png' alt='the Restaurant' width={350} height={125} />
        </div>
        <Link href='/booking'>
          <button>Book a Table</button>
        </Link>
      </div>
    </div>
  </>
}