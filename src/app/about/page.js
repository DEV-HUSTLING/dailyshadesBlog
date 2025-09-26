import React from 'react'
import Image from "next/image";
import Link from 'next/link'

function page() {
  return (
    <div className="mainSection">
      <header className="fixed w-full  bg-gray-300 flex justify-between p-4 pl-8 pr-8">
        <Link href="/ " className="text-3xl">Dailyshades</Link>
        <div className="text-xl flex gap-20">
          <Link href="/work" className="underline">Work</Link>
          <Link href="/about" className="underline">About Me</Link>
        </div>
      </header>
      <main className="flex flex-col-reverse gap-8 absolute mt-40 sm:right-0 sm:top-20 sm:bottom-0 sm:left-0 sm:m-auto sm:w-full sm:flex-col-reverse sm:p-6 md:absolute md:right-0 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:w-1/2 md:flex-col-reverse">
        <a href='https://www.instagram.com/dailyshades_explore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='blank'>
          <p><u>Follow Me!</u></p><br />
          <Image
            aria-hidden
            src="/insta.png"
            alt=" icon"
            width={100}
            height={500}
            className="2xl:w-20"
          />

        </a>
        <div className="text-3xl 2xl:text-3xl font-light">
          <div className='flex gap-6 text-8xl '>
            <div
              data-aos-delay="200"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos="fade-down">About</div>
            <div
              data-aos-delay="250"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos="fade-down">me,</div>
          </div>
          <div className='font-300 text-wrap list-disc text-lg mt-12 text-gray-500'>
            I’m a proud Hyderabadi girl, grounded by my humble family roots. My passion lies in building and creating — whether it’s designing art, coding an app, or experimenting with new ideas that push boundaries.
            I’m deeply in love with the process of creation. For me, the joy isn’t just in winning but in learning, experimenting, and evolving through every win and every setback. Each challenge is a chance to grow. I thrive at the intersection of creativity and technology, turning ideas into tangible impact.
          </div>
        </div>
      </main>
      <footer className="-z-10 absolute bottom-0 left-50 ">
        <Image
          aria-hidden
          src="/HydIcon.png"
          alt=" icon"
          width={350}
          height={450}
          className="2xl:w-lg "
        />
      </footer>
    </div>
  )
}

export default page