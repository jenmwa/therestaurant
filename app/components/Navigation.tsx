'use client'
import Link from "next/link"
import Image from 'next/image';

import '../style/header.scss';

export const Navigation = () => {

  return <>
    <div className="container">
      <Link href='/'>
        <div className="header__logo">
          <Image src='/img/logo_light.png' width={150} height={50} alt='the restaurant'/>
        </div>
      </Link>
      <nav>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
          <li className='CTA'><Link href='/booking'>Book a Table</Link></li>
        </ul>
      </nav>
    </div>
    </>;
}
