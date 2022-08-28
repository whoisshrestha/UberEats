import React from 'react'
import cardImage1 from '../assets/cardImage1.jpg'
import cardImage2 from '../assets/cardImage2.jpg'
import cardImage3 from '../assets/cardImage3.jpg'

const HeadCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Card */}
        <div className='rounded-xl relative'>
            {/*Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2 '>Salad's & Healthy</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={cardImage1} alt=''/>
        </div>
        <div className='rounded-xl relative'>
            {/*Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Hunger Tammer</p>
                <p className='px-2 '>New in Town</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={cardImage2} alt=''/>
        </div>
        <div className='rounded-xl relative'>
            {/*Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Let's Try</p>
                <p className='px-2 '>Burger & Fries</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={cardImage3} alt=''/>
        </div>
        
    </div>
  )
}

export default HeadCards
