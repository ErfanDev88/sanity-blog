import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className='flex flex-col items-center justify-center text-center h-screen gap-y-5'>
      <h1 className='text-4xl uppercase font-bold tracking-wide md:text-6xl lg:text-8xl'>WebLearn's Blog</h1>
      <button>
        <Link to={'/blog'} className='pt-3 pb-2 px-6 rounded shadow text-white bg-gray-800 hover:bg-transparent border-2 border-gray-800 duration-500 transition-all hover:text-gray-800 font-bold'>Read my blog posts</Link>
      </button>
    </section>
    )
}

export default HomePage