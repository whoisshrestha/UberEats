import React, { useState } from 'react'
import { data, categories } from '../data/data.js'
const Food = () => {
    const [foods, setFoods] = useState(data);
    //filter Type 
    const filterType = (category)=> {
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            }
        ));
    };

    //filter price

    const filterPrice = (price) =>{
        setFoods(
            data.filter((item)=>{
                return item.price === price;
            }
        ));
    };
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-black font-bold text-4xl text-center'>Best in Menu</h1>
        {/*Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/*Filter Type */}
            <div>
                <p className='font-bold text-gray-600'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=>setFoods(data)} className='border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white '>All</button>
                    <button onClick={()=>filterType('burger')} className='border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>Burgers</button>
                    <button onClick={()=>filterType('pizza')} className='border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>Pizza</button>
                    <button onClick={()=>filterType('salad')} className='border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>Salads</button>
                    <button onClick={()=>filterType('chicken')}className='border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'>Chicken</button>
                </div>

            </div>
            {/*Filter Price */}
            <div>
                <p className='font-bold text-gray-600'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=>filterPrice('$')} className='border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white '>$</button>
                    <button onClick={()=>filterPrice('$$')} className='border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white '>$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white '>$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className='border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white '>$$$$</button>
                </div>
            </div>
        </div>
        {/*Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item,index)=>(
                <div key={index}
                    className='border shadow-lg hover:scale-105 duration-300 rounded-lg'
                >
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food
