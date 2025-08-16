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
      <main className="flex gap-8 absolute mt-40 sm:right-0 sm:top-20 sm:bottom-0 sm:left-0 sm:m-auto sm:w-full sm:flex-col-reverse sm:p-6 md:absolute md:right-0 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:w-1/2 md:flex-col-reverse">
        <a href='https://www.instagram.com/dailyshades_explore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='blank'>
        <p><u>Follow Me!</u></p><br/>
        <Image
            aria-hidden
            src="/insta.png"
            alt=" icon"
            width={100}
            height={500}
             className="2xl:w-20"
          />
          
          </a>
          <div  className="text-3xl 2xl:text-3xl font-light">
        <p>
          A Little about me, <br />
            <br />
        </p>
        <ul className='font-300 text-wrap list-disc'>
          <li>Hyderabadi girl.</li>
            <li>Humble Family,</li>
            <li className=''>Passion to build and create  anything from art to tech.</li>
            <li>Love the process, win or lose</li>
            </ul>
            </div>
      </main>
      <footer className="-z-10 absolute bottom-0 left-50 ">
          <Image
            aria-hidden
            src="/HydIcon.png"
            alt=" icon"
            width={400}
            height={500}
             className="2xl:w-lg"
          />
      </footer>
    </div>
  )
}

export default page