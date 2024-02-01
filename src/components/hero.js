import React from 'react'
// import HeroImg from '../assets/smaller_image.jpeg'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const fullSizeIcon = { fontSize:'1.5em' }

const Hero = () => {

  return (
    <section className='bg-primary px-5 text-accent py-32'>
      <div className='container mx-auto  items-center justify-center md:justify-between'>
        <div className='hero-info pb-5 md:pb-0'>
          <h1 className='text-4xl lg:text-6xl text-left'>
            Hi, <br /> I am a <span className='text-accent-feature'>S</span>amuel<br /> Software Engineer
          </h1>
          <p className='py-5 text-left'>
            <code>
              &#123;
              <br />
              &nbsp; 'languages': ['<span className='code-text'>javascript</span>', '<span className='code-text'>python</span>', '<span className='code-text'>ruby</span>', '<span className='code-text'>c/c++</span>'], <br />
              &nbsp; 'frameworks': ['<span className='code-text'>reactjs</span>', '<span className='code-text'>ruby on rails</span>', '<span className='code-text'>django</span>', '<span className='code-text'>django_rest_framework</span>']
              <br />
              &#125;
            </code>
          </p>
          <div  className='flex py-5 space-x-4'>
            <a href="https://github.com/Samuel-DeSantis" target='_blank' rel='noreferrer noopener'><FaGithub style={fullSizeIcon} alt='Github'/></a>
            <a href="https://www.linkedin.com/in/samuel-i-desantis/" target='_blank' rel='noreferrer noopener'><FaLinkedin style={fullSizeIcon} alt='LinkedIn'/></a>
          </div>

        </div>
      </div>
    </section>
  )

}

export default Hero