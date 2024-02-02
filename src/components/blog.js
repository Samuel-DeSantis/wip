import React from 'react'
import RoRBcryptAuth from '../assets/RoR_Bcrypt_Auth.png'
import JSClosest from '../assets/JS_Closest.png'
import FetchAPIExample from '../assets/Fetch_API_Ex.png'

const Blog = () => {

  const posts = [
    {
      img: RoRBcryptAuth,
      title: 'Ruby on Rails with Bcrypt Auth',
      url: 'https://medium.com/@samuel-desantis/ruby-on-rails-with-bcrypt-auth-047d7122583c'
    },
    {
      img: FetchAPIExample,
      title: 'JavaScript Fetech API Example',
      url: 'https://medium.com/@samuel-desantis/javascript-fetch-api-example-57115af5d52e'
    },
    {
      img: JSClosest,
      title: 'JavaScript Element.closest()',
      url: 'https://medium.com/@samuel-desantis/javascript-element-closest-9dc11162123c'
    },
  ]

  return (
    <section className='bg-primary text-accent px-5 py-32' id='blog'>
      <div className='container mx-auto items-center md:justify-between'>
        <div className='about-info mb-5'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-cloudy-day pb-2'>Blog</h2>
          <p className='text-left text-lg'>Check out some of my blogs below!</p>
        </div>
        <div className='projects container mx-auto grid md:grid-cols-3 gap-10'>
          {posts.map( item => {
            return (
              <a href={ item.url } target='_blank' rel='noreferrer noopener' className='blog-link p-2 rounded-lg text-charcoal font-bold bg-cloudy-day'>
                <img src={ item.img } alt={ item.title } className='pb-3' />
                <h3 className='py-2 text-2xl border-t-[5px] border-charcoal'>{ item.title }</h3>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog