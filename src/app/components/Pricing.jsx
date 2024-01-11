
import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
import PricingCard from "./PricingCard";
import Stripe from "stripe";

const Pricing = async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const prices = await stripe.prices.list({
        limit: 4,
    })

    const reversedPrices = prices.data.reverse()


    
    // const [prices, setPrices] = useState([]);
    
    // useEffect(() => {
    //     fetchPrices()
    // }, [])

    // const fetchPrices = async () => {
    //     const {data} = await axios.get('/api/getproducts')
    //     setPrices(data)
    //     console.log(data)
    // }
 


  return (
    <section className="text-white w-full" id="pricing">
        <div className="mx-auto max-w-4xl text-center mt-10 items-center">
            <h2 className="text-3xl font-semibold leading-7">Products</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Things I made that you can buy</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 sm:text-center">Thanks for your contribution!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1040px] items-center mx-auto">
            {reversedPrices && reversedPrices.map((price) => (
            <PricingCard price={price} key={price.id} />
            ))}


        </div>



        </section>
  )
}

export default Pricing