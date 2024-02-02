import React from 'react'

const Contact = () => {
  return (
    <section className='bg-secondary px-5 py-32' id='contact'>
      <div className='text-left md:w-[60%] mx-auto text-accent'>
        <h2 className='text-4xl text-charcoal font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-charcoal'>Contact Me</h2>
        <p className='text-charcoal'>
          I am currently looking for a full-time Software Engineering position. If you would like to discuss my background or projects feel free to reach out.
        </p>
        <br />
        <p className='text-center text-charcoal text-lg font-bold'>Email: samuel.i.desantis@gmail.com</p>
      </div>
    </section>
  )
}

export default Contact