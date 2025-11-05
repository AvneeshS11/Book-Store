import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center flex flex-col justify-center items-center pt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-500">About Us</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Welcome to our platform — a place where creativity meets technology.
            We are passionate developers and designers committed to building
            modern, responsive, and high-performance digital experiences. Our team
            believes in clean design, seamless user interaction, and robust
            functionality that helps businesses and individuals thrive in the
            digital world.
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission is to craft accessible and visually stunning applications
            that not only look great but perform flawlessly. From design to
            deployment, we focus on innovation, usability, and long-term customer
            satisfaction. Every line of code and every design choice is made with
            purpose — to create solutions that make a real impact.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
