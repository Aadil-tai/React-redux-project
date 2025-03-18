import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import ItemCard from './itemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
    const [activeCart, setActiveCart] = useState(false); // Set to true so it's initially visible
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <>
            <div
                className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${activeCart ? 'translate-x-0' : 'translate-x-full'
                    } z-50`}
            >
                {/* Header Section */}
                <div className="flex justify-between items-center p-4 my-3">
                    <span className="text-xl font-bold text-gray-500">My Order</span>
                    <IoMdClose
                        onClick={() => setActiveCart(!activeCart)}
                        className="border-2 border-gray-800 font-bold p-1 text-xl rounded-md hover:text-red-400 text-gray-500 cursor-pointer"
                    />
                </div>
                {cartItems.length > 0 ? (
                    cartItems.map((food, index) => (
                        <ItemCard
                            key={food.id || `cart-item-${index}`}  // Fallback to index-based key
                            id={food.id}
                            name={food.name}
                            price={food.price}
                            img={food.img || 'fallback-image-url'}  // Default image if missing
                            qty={food.qty}
                        />
                    ))
                ) : (
                    <h2 className='text-center text-lg font-semibold'>Your cart is empty</h2>
                )}







                {/* Order Summary */}
                <div className="absolute bottom-0 w-full bg-white p-4">
                    <h3>Items :</h3>
                    <h3>Total Amount :</h3>
                    <hr />
                    <button className="bg-fuchsia-500 font-bold text-white p-2 rounded-md w-[18vw] mx-auto">
                        Place Order
                    </button>
                </div>
            </div>
            <FaShoppingCart onClick={() => { setActiveCart(!activeCart) }} className='rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4' />
        </>
    );
};

export default Cart;
