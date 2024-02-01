import React from 'react'
import HeroImg from '../assets/smaller_image.jpeg'

const About = () => {
  return (
    <section className='bg-secondary text-secondary px-5 py-32' id='about'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='about-info'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-charcoal pb-2'>About Me</h2>
          <p className='pb-5 text-left '>
            My name is Samuel DeSantis and I like rock climbing, hiking, camping, traveling, and programming!
          </p>
          <p className='pb-5 text-left'>
            I am a Software Engineer who enjoys both Front and Back end work. My favorite Front end framework is
            ReactJS with various styling tools, such as, BootStrap, Material UI, and Tailwind CSS.
          </p>
          <p className='pb-5 text-left'>
            I really enjoy diving into the logic and building out Back end applications whether it is a RESTful API
            the Front end is grabbing information from or full MVC/MVT architecture. I am proficient with both Ruby
            on Rails and Django for full applications and RESTful API's.
          </p>
        </div>
        <div className='m-6 rounded-full bg-charcoal border-1 border-charcoal'>
          <img 
            src={ HeroImg }
            alt="Profile"
            className='p-2 border-charcoal rounded-full '
          />
        </div>
      </div>
    </section>
  )
}

export default About