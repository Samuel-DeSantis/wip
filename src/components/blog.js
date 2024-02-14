import React from 'react'
import { blogPosts } from './data/blogPosts'

const Blog = () => {

  return (
    <section className='bg-primary text-accent px-5 py-32' id='blog'>
      <div className='container mx-auto items-center md:justify-between'>
        <div className='about-info mb-5'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-cloudy-day pb-2'>Blog</h2>
          <p className='text-left text-lg'>Check out some of my blogs below!</p>
        </div>
        <div className='projects container mx-auto grid md:grid-cols-3 gap-10'>
          {blogPosts.map( item => {
            return (
              <a href={ item.url } target='_blank' rel='noreferrer noopener' className='blog-link p-2 rounded-lg text-charcoal font-bold bg-cloudy-day'>
                <img src={ item.img } alt={ item.title } className='pt-5 pb-3' />
                <h3 className='py-2 text-2xl border-t-[5px] border-charcoal'>{ item.title }</h3>
              </a>
          )})}
        </div>
      </div>
    </section>
  )
}

export default Blog