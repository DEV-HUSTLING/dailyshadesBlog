import Image from "next/image";
import Link from 'next/link'
import Article from './article'
export default function Home() {
  return (
      <div className="mainSection">
      <header className="fixed w-full  bg-gray-300 flex justify-between p-4 pl-8 pr-8">
        <Link href="/ " className="text-3xl">Dailyshades</Link>
        <div className="text-xl flex gap-20">
          <Link href="/work" className="underline">Work</Link>
          <Link href="/about" className="underline">About Me</Link>
        </div>
      </header>
      <main className="absolute mt-20 sm:right-0 sm:top-20 sm:bottom-0 sm:left-0 sm:m-auto sm:w-full sm:p-6 md:absolute md:right-0 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:w-2/5">
        <p className="text-4xl 2xl:text-5xl ">
          This is my place of creativity — a space not for impressing, but for expressing. 
          Here, I share how I see the world I live in. <br />
          I believe beauty is so overrated that we often overlook the <span className="bg-gray-600 text-white p-1 text-3xl 2xl:text-4xl">perfectly imperfect</span> moments of everyday life.
        </p>
      </main>
      <footer className="absolute bottom-0 left-0 ">
          <Image
            aria-hidden
            src="/nyOutline.png"
            alt=" icon"
            width={800}
            height={500}
             className="2xl:w-6xl"
          />
      </footer>
    </div>

  );
}
