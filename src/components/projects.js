import React from 'react'

const constProjects = [
  {
    img: '1',
    title: '2',
    description: '3',
    code: '4'
  },
  {
    img: '',
    title: '',
    description: '',
    code: ''
  },
  {
    img: '',
    title: '',
    description: '',
    code: ''
  },
  {
    img: '',
    title: '',
    description: '',
    code: ''
  },
]

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
        {constProjects.map( ( project, index ) => {
          return (
            <div className='relative' key={index}>
              <img src={ project.img } alt={ project.title } />
              <div className='flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%]  h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100'>
                <p></p>
                <div>
                  <a href=""></a>
                  <a href=""></a>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Projects