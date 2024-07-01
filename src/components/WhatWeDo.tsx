import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StickyScrollComponent } from './StickyScrollComponent'
import InteractiveCircle from './ui/InteractiveCircle'
const WhatWeDo = () => {
  return (
    <section className="container pb-10" id="WwD">
      <div>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/gdsc_logo_left.png"
            height={50}
            width={50}
            alt="left_logo"
            className="moveLeft z-10 translate-x-[105px]"
          />
          <h2 className="title fadeInOut invert">WHAT WE DO</h2>
          <Image
            src="/assets/gdsc_logo_right.png"
            height={52}
            width={52}
            alt="right_logo"
            className="moveRight z-10 -translate-x-[105px]"
          />
        </div>
        {/* <p className="comtainer mx-80 text-center">
          GDSC CRCE boasts of a multifaceted community with members from various
          disciplines working together. By joining GDSC CRCE students get to
          work with an exceptionally skilled group of developers, connect with
          developers around the world, make projects,organized workshops and
          many more.
        </p> */}
      </div>

      <div className="min-h-screen">
      <InteractiveCircle />
    </div>
    </section>
  )
}

export default WhatWeDo
