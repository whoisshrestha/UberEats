import React from 'react'
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'

const EndFooter = () => {
  return (
    <div className='border-t-2 border-black/5'>
        <div className='max-w-[1640px] justify-between mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2'>
            <div className='flex space-x-5 py-2'>
                <AiFillFacebook className='cursor-pointer' size={25}/>
                <AiFillTwitterSquare className='cursor-pointer' size={25}/>
                <AiFillInstagram className='cursor-pointer'  size={25}/>
            </div>
            <div className='justify-between py-2'>
                <ul className='flex space-x-10 justify-end '>
                    <li className='cursor-pointer'>Privacy Policy</li>
                    <li className='cursor-pointer'>Terms</li>
                    <li className='cursor-pointer'>Pricing</li>
                </ul>
                <p className='flex justify-end py-4'>© 2022 Nepro Media</p>
            </div>
        </div>
      
    </div>
  )
}

export default EndFooter
