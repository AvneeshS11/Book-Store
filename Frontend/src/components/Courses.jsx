import React from 'react'
import list from '../../public/list.json'
import Cards from './cards'
import {Link} from 'react-router-dom'
const Courses = () => {
  return (
    <>
      <div className='max-w-screen-2xl container  mx-auto md:px-20 px-4'>
        <div className='mt-28 justify-center items-center text-center '>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='font-semibold text-pink-500'>Here!:)</span></h1>
          <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum sequi aut porro, quae corporis eligendi, laboriosam doloribus facilis perspiciatis beatae autem velit maxime culpa dignissimos? Animi quibusdam, qui assumenda asperiores odio ipsa quasi delectus rerum laborum placeat eveniet voluptatum quidem saepe rerum odio vero, possimus amet dolorem et laborum necessitatibus corrupti nulla sed hic natus consectetur sequi?</p>
          <Link to={'/'}>
            <button className='bg-pink-500 font-semibold text-white m-5 px-4 py-2 rounded-md text-lg hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-1'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Courses