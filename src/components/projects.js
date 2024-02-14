import React from 'react'
import { projectList } from './data/projectList'

const Projects = () => {

  return (
    <section className='bg-primary text-accent px-5 py-32' id='projects'>
      <div className='container mx-auto  items-center justify-center md:justify-between'>
        <div className='about-info pb-5 md:pb-0'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[160px] border-cloudy-day pb-2'>Projects</h2>
          <p className='pb-5 text-left'>
            Check out some of my completed and active projects below!
          </p>
        </div>
        <div className='about-img'></div>
      </div>
      <div className='projects container mx-auto grid md:grid-cols-2 gap-10'>
        {projectList.map( ( project, index ) => {
          return (
            <a href={ project.github } className='relative border rounded-2xl bg-cloudy-day px-4 pt-4' target='_blank' rel='noreferrer noopener' key={index}>
              <h2 className='text-2xl font-bold text-charcoal text-center pb-3'>{ project.title }</h2>
              <img src={ project.img } alt={ project.title } />
              <p className='text-charcoal pt-4'>{ project.description }</p>
              <p className='text-charcoal py-4'>Built with: { project.technologies }</p>
            </a>
        )})}
      </div>
    </section>
  )
}

export default Projects