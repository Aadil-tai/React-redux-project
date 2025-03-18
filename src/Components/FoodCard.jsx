import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/CartSlice';

const FoodCard = ({ id, name, price, desc, rating, img }) => {
    const dispatch = useDispatch();
    return (
        <div className="w-[20%] p-6 h-[350px] flex flex-col rounded-lg shadow-lg bg-gray-200 overflow-hidden">
            <div className="w-full h-[200px] overflow-hidden rounded-lg">  <img
                src={img}
                alt={name}
                className="w-full h-full   transition-transform duration-300 ease-in-out hover:scale-110"
            />
            </div>
            <div className="flex flex-col justify-between flex-1 p-3">
                <div className="flex justify-between items-center font-bold">
                    <h2 className="text-lg">{name}</h2>
                    <h3 className="text-md text-gray-700">${price}</h3>
                </div>

                <p className="text-sm text-gray-600 min-h-[40px]">{desc.slice(0, 60)}...</p>

                <div className="flex justify-between items-center mt-3">
                    <span className="flex items-center text-sm">
                        <AiFillStar className="text-yellow-500" />
                        {rating}
                    </span>
                    <button onClick={() => { dispatch(addToCart({ id, name, price, rating, img, price, qty: 1 })) }} className="px-3 py-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
