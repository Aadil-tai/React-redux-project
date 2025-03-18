import React from 'react';
import FoodData from '../data/FoodData';
import FoodCard from './FoodCard';

const FoodItems = () => {
    return (
        <div className='min-h-screen flex flex-wrap justify-center gap-6 p-6 bg-gray-100'>
            {FoodData.map((food) => (
                <FoodCard
                    key={food.id}
                    name={food.name}
                    price={food.price}
                    desc={food.desc}
                    rating={food.rating}
                    img={food.img}
                />
            ))}
        </div>
    );
};

export default FoodItems;
