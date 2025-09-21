'use client'
import Image from "next/image";
import Link from 'next/link'
import Article from './article'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
    AOS.init();

  })
  return (
      <div className="mainSection">
      <header className="fixed w-full border-b-2 border-gray-300 flex justify-between p-4 pl-8 pr-8 z-1">
        <Link href="/ " className="text-3xl">Dailyshades</Link>
        <div className="text-xl flex gap-20">
          <Link href="/work" className="underline">Work</Link>
          <Link href="/about" className="underline">About Me</Link>
        </div>
      </header>
      <main className="absolute mt-20 sm:right-0 sm:top-20 sm:bottom-0 sm:left-0 sm:m-auto sm:w-full sm:p-6 md:absolute md:right-0 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:w-2/5">
        <p className="text-4xl 2xl:text-5xl ">
          This is my place of creativity. 
          Here, I share how I see the world I live in. <br />
          I believe beauty is so overrated that we often overlook the <span className="bg-gray-600 text-white p-1 text-3xl 2xl:text-4xl">perfectly imperfect</span> moments of everyday life.
        </p>
      </main>
      <footer className="absolute bottom-0 left-0 ">
          <div className="flex w-full items-end justify-center">
            <Image
            aria-hidden
            src="/home/h1.png"
            alt=" icon"
            width={130}
            height={500}
             className=""
             data-aos="fade-up"
          />
          {/* <Image
            aria-hidden
            src="/home/h2.png"
            alt=" icon"
            width={130}
            height={200}
             className=""
              data-aos="fade-up"
             data-aos-delay="50"
            data-aos-duration="1000"
          /> */}
          <Image
            aria-hidden
            src="/home/h3.png"
            alt=" icon"
            width={130}
            height={500}
             className=""
               data-aos="fade-up"
             data-aos-delay="150"
            data-aos-duration="1000"
          />
          <Image
            aria-hidden
            src="/home/h4.png"
            alt=" icon"
            width={130}
            height={500}
             className=""
               data-aos="fade-up"
             data-aos-delay="200"
            data-aos-duration="1000"
          />
          <Image
            aria-hidden
            src="/home/h5.png"
            alt=" icon"
            width={130}
            height={500}
             className=""
               data-aos="fade-up"
             data-aos-delay="250"
            data-aos-duration="1000"
          />
          <Image
            aria-hidden
            src="/home/h6.png"
            alt=" icon"
            width={130}
            height={500}
             className=""
               data-aos="fade-up"
             data-aos-delay="300"
            data-aos-duration="1000"
          />
          <Image
            aria-hidden
            src="/home/h7.png"
            alt=" icon"
            width={130}
            height={500}
             className=""
               data-aos="fade-up"
             data-aos-delay="350"
            data-aos-duration="1000"
          />
          </div>
      </footer>
    </div>

  );
}
