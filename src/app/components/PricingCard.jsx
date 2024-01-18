'use client'
import React from 'react';
import axios from 'axios';

import {AiFillCheckCircle} from 'react-icons/ai'

const PricingCard = ({price}) => {

const dynamicSubtitle = (price) => {
        if(price.nickname === 'Product 1'){
            return <p className='mt-1'>Product 1</p>;
        } else if (price.nickname === 'Product 2'){
            return <p className='mt-1'>Product 2</p>;
        } else if (price.nickname === 'Product 3'){
            return <p className='mt-1'>Product 3</p>
        }
    }
const dynamicDescription = (price) => {
    if(price.nickname === "Product 1") {
        return (
            <div className='mt-6 space-y-4'>
                <div className='flex space-x-3'>
                    <AiFillCheckCircle
                    className='h-5 w-5 flex-shrink-0 text-green-500 ml-2'
                    aria-hidden='true'
                    />
                    <h2 className='text-sm text-gray-500'>Perk 1</h2>
                </div>
                <div className='border' />
                <div className='flex space-x-3'>
                    <AiFillCheckCircle 
                    className='h-5 w-5 flex-shrink-0 text-green-500 ml-2'
                    aria-hidden='true'
                    />
                    <h2 className="text-sm text-gray-500">Perk 2</h2>
                </div>
                <div className='border' />
                <div className='flex space-x-3'>
                    <AiFillCheckCircle 
                    className='h-5 w-5 flex-shrink-0 text-green-500 ml-2'
                    aria-hidden='true'
                    />
                    <h2 className='text-sm text-gray-500'>Perk 3</h2>
                </div>
                
            </div>
        );
    } else if (price.nickname === 'Product 2') {
        return (
            <div className='mt-6 space-y-4'>
                <div className='flex space-x-3'>
                    <AiFillCheckCircle
                    className='h-5 w-5 flex-shrink-0 text-green-500 ml-2'
                    aria-hidden='true'
                    />
                    <h2 className='text-sm text-gray-500'>Perk 1</h2>
                </div>
                <div className='border' />
                <div className='flex space-x-3'>
                    <AiFillCheckCircle 
                    className='h-5 w-5 flex-shrink-0 text-green-500 ml-2'
                    aria-hidden='true'
                    />
                    <h2 className="text-sm text-gray-500">Perk 2</h2>
                </div>
                <div className='border' />
                <div className='flex space-x-3'>
                    <AiFillCheckCircle 
                    className='h-5 w-5 flex-shrink-0 text-green-500 ml-2'
                    aria-hidden='true'
                    />
                    <h2 className='text-sm text-gray-500'>Perk 3</h2>
                </div>
                
            </div>
        );
    } else if (price.nickname === 'Product 3') {
        return (
            <div className='mt-6 space-y-4'>
                <div className='flex space-x-3'>
                    <AiFillCheckCircle
                    className='h-5 w-5 flex-shrink-0 text-green-500 ml-2'
                    aria-hidden='true'
                    />
                    <h2 className='text-sm text-gray-500'>Perk 1</h2>
                </div>
                <div className='border' />
                <div className='flex space-x-3'>
                    <AiFillCheckCircle 
                    className='h-5 w-5 flex-shrink-0 text-green-500 ml-2'
                    aria-hidden='true'
                    />
                    <h2 className="text-sm text-gray-500">Perk 2</h2>
                </div>
                <div className='border' />
                <div className='flex space-x-3'>
                    <AiFillCheckCircle 
                    className='h-5 w-5 flex-shrink-0 text-green-500 ml-2'
                    aria-hidden='true'
                    />
                    <h2 className='text-sm text-gray-500'>Perk 3</h2>
                </div>
                
            </div>
        )
    }
}

const handlePurchase = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/payment',
    {
        priceId: price.id
    },
    {
        headers: {
            "Content-Type": "application/json",
        }

    }
    );
    window.location.assign(data)
}
   
  return (
    <div className="shadow-2xl border-1 text-center mt-10 max-w-[1040px]">
        <div>
            <div className='h-28 items-center font-bold'>
                <h4 className='text-3xl'>{price.nickname}</h4>
                <p>{dynamicSubtitle(price)}</p>
                <h3>Text</h3>

            </div>
            <div className="flex flex-col items-center justify-center pt-4">
                <h1 className="text-5xl font-bold">
                    {(price.unit_amount / 100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })}
                </h1>
                <h3>Additonal Text Here</h3>
            </div>
            <ul className='flex justify-center'>
                <li className="text-xl font-bold">{dynamicDescription(price)}</li>
            </ul>
            <button className='mt-8 flex w-full justify-center rounded-md border border-transparent bg-purple-700 py-2 px-4 text-sm font-medium text-white shadow-sm'onClick={handlePurchase}>
                Purchase

            </button>
        </div>

    </div>
  )
}

export default PricingCard