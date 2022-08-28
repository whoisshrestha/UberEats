import React from 'react'
import dwnapple from '../assets/dwnapple.png'
import dwngoogle from '../assets/dwngoogle.png'

const Footer = () => {
  return (
    <div className='border-t-2 border-black/5'>
    <div className='max-w-[1640px] justify-between mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2'>
        <div className='justify-between'>
            <h1 className='text-2xl sm:text-3xl lg:text4xl px-2'>Nepro 
            <span className='font-bold'> Eats</span></h1>
            <div className='flex space-x-5 mt-28'>
                <img className='max-h-[120px] w-[150px] object-contain cursor-pointer py-2' src={dwnapple}/>
                <img className='max-h-[120px] w-[150px] object-contain cursor-pointer py-2'src={dwngoogle}/>
            </div>
        </div>
        {/*Menu */}
        <div className=' grid  grid-cols-1 sm:grid-cols-2'>
            <div className='w-[224] px-2 py-4 justify-between '>
                <ul>
                    <li className='py-2 hover:underline'><a href=''>Get Help</a></li>
                    <li className='py-2 hover:underline'><a href=''>Buy gift cards</a></li>
                    <li className='py-2 hover:underline'><a href=''>Add your restaurant</a></li>
                    <li className='py-2 hover:underline'><a href=''>Sign up to deliver</a></li>
                    <li className='py-2 hover:underline'><a href=''>Create a business account</a></li>
                </ul>
            </div>
            <div className='w-[224] px-2 py-4 justify-between'>
                <ul>
                    <li className='py-2 hover:underline'><a href=''>Restaurants Near Me</a></li>
                    <li className='py-2 hover:underline'><a href=''>View all cities</a></li>
                    <li className='py-2 hover:underline'><a href=''>View all countries</a></li>
                    <li className='py-2 hover:underline'><a href=''>Pick-up near me</a></li>
                    <li className='py-2 hover:underline'><a href=''>About Nepro Eats</a></li>
                </ul>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Footer
