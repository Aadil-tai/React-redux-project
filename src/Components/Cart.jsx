import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import ItemCard from './itemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
    const [activeCart, setActiveCart] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);

    // Calculate total price
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <>
            <div
                className={`fixed right-0 top-0 w-full lg:w-[20vw] h-[90vh] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${activeCart ? 'translate-x-0' : 'translate-x-full'
                    } z-50 flex flex-col`}
            >
                {/* Header Section */}
                <div className="flex justify-between items-center p-4 border-b shadow-sm">
                    <span className="text-xl font-bold text-gray-700">My Order</span>
                    <IoMdClose
                        onClick={() => setActiveCart(!activeCart)}
                        className="border border-gray-400 p-1 text-xl rounded-md hover:text-red-500 text-gray-700 cursor-pointer"
                    />
                </div>

                {/* Scrollable Cart Items Section */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cartItems.length > 0 ? (
                        cartItems.map((food, index) => (
                            <ItemCard
                                key={food.id || `cart-item-${index}`}
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                img={food.img || 'fallback-image-url'}
                                qty={food.qty}
                            />
                        ))
                    ) : (
                        <h2 className="text-center text-lg font-semibold text-gray-500">
                            Your cart is empty
                        </h2>
                    )}
                </div>

                {/* Order Summary (Fixed at the Bottom) */}
                <div className="w-full bg-white p-4 border-t shadow-md">
                    <div className="flex justify-between text-lg font-semibold text-gray-700">
                        <span>Items:</span>
                        <span>{cartItems.length}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold text-gray-700">
                        <span>Total Amount:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <hr className="my-3" />
                    <button className="bg-fuchsia-500 font-bold text-white py-2 rounded-md w-full hover:bg-fuchsia-600 transition">
                        Place Order
                    </button>
                </div>
            </div>

            {/* Floating Cart Button */}
            <FaShoppingCart
                onClick={() => setActiveCart(!activeCart)}
                className="rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer hover:scale-105 transition"
            />
        </>
    );
};

export default Cart;
