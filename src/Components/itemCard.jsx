import React from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../Redux/Slices/CartSlice'

const ItemCard = ({ id, name, rating, img, price, qty }) => {
    const dispatch = useDispatch()

    return (
        <div className="relative flex gap-4 items-center shadow-md rounded-md p-3 bg-white">
            {/* Delete Button (Fixed Positioning) */}
            <button
                onClick={() => dispatch(removeFromCart(id))}
                className="absolute top-2 right-2 text-fuchsia-500 hover:text-red-500 transition"
            >
                <MdDelete className="text-2xl" />
            </button>

            {/* Food Image */}
            <img src={img} alt={name} className="w-[50px] h-[50px] object-cover rounded-md" />

            {/* Item Details */}
            <div className="flex-1">
                <h1 className="text-gray-700 font-semibold">{name}</h1>

                {/* Price & Quantity Controls */}
                <div className="flex justify-between items-center mt-1">
                    <span className="text-fuchsia-500 font-bold">${price}</span>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                        <button className="text-gray-500 hover:text-white rounded-full border border-gray-500 hover:bg-fuchsia-500 p-1">
                            <AiOutlinePlusCircle className="text-xl" />
                        </button>
                        <span className="text-lg font-bold">{qty}</span>
                        <button className="text-gray-500 hover:text-white rounded-full border border-gray-500 hover:bg-fuchsia-500 p-1">
                            <AiOutlineMinusCircle className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
