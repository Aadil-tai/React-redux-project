import React from 'react'
import Category from './Category'
import FoodItems from './FoodItems'
import Cart from './Cart'

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Category />
            <FoodItems />
            <Cart />
        </div>
    )
}

export default Home
