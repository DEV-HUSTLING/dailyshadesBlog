import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='work'>
      <header className="fixed z-10 w-full drop-shadow-sm  bg-gray-300 flex justify-between p-4 pl-8 pr-8 ">
        <Link href="/ " className="text-3xl">Dailyshades</Link>
        <div className="text-xl flex gap-20">
          <Link href="/work" className="underline">Work</Link>
          <Link href="/about" className="underline">About Me</Link>
        </div>
      </header>
      <div className='absolute m-auto top-32 left-0 right-0 grid-main md:grid md:grid-cols-3 md:place-content-center md:gap-4 md:justify-items-center flex-col flex items-center gap-8 2xl:grid-cols-4'>
        <div className='gallery-card bg-gray-200 rounded-md drop-shadow-sm flex flex-col gap-8 w-md h-48 p-4'>
          <h3 className='text-4xl'><a href='https://anushkabio.netlify.app/' target='blank'>Perspective</a></h3>
          <p>A small try to find calmness during chaos. </p><br/>
          <span className='absolute bottom-0 flex w-full pr-8 justify-between align-center'>
            <p className='text-xs'><b>1/2020-2/2021</b></p>
            <p>blog</p>
          </span>
        </div>
        <div className='gallery-card bg-gray-200 rounded-md drop-shadow-sm flex flex-col gap-8 h-48 w-md p-4'>
          <h3 className='text-4xl'> <a href='' target='blank'>New York</a></h3>
          <p>New phase, New angle but same old me</p><br/>
          <span className='absolute bottom-0 flex w-full pr-8  justify-between align-center'>
            <p className='text-xs'><b>1/2023-present</b></p>
            <p>blog</p>
          </span>
        </div>
        <div className='gallery-card bg-gray-200 rounded-md drop-shadow-sm flex flex-col gap-8 h-48 w-md p-4'>
          <h3 className='text-4xl'>Yummy !!</h3>
            <p>Amatuer cook but professional jugaadu </p><br/>
          <span className='absolute bottom-0 flex w-full pr-8  justify-between align-center'>
            <p className='text-xs'><b>1/2020-present</b></p>
            <p>blog</p>
          </span>
        </div>

         <div className='gallery-card bg-gray-200 rounded-md drop-shadow-sm overflow-hidden  text-wrap flex flex-col gap-8 h-48 w-md p-4 overflow-auto'>
          <h3 className='text-4xl'>Resume</h3>
            <p><a href="https://resumifyy.netlify.app/" target='blank'>Simple Resume Enhancer with the support of LLM </a></p><br/>
          <span className='absolute bottom-0 flex w-full pr-10 justify-between align-center'>
            <p className='text-xs'><b>6/2025-1/7/2025</b></p>
            <p >blog</p>
          </span>
        </div>


      </div>
      
    </div>
  )
}

export default page