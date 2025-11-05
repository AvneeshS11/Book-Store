import React from 'react'

function Cards({ item }) {
  return (
    <div className=" mt-4 my-3 p-3 flex justify-center">
      <div className="bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white card w-72 md:w-80 shadow-xl hover:scale-105 duration-300">
        <figure className="h-48">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">
            {item.name}
            <div className="badge badge-secondary ml-1">NEW</div>
          </h2>
          <p className="text-sm text-gray-600">{item.title}</p>
          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline text-sm">${item.price}</div>
            <button className="badge badge-outline hover:bg-primary hover:text-white transition">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
