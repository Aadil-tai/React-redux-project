import React from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../Redux/Slices/CartSlice'
const ItemCard = ({ id, name, rating, img, price, qty }) => {

    const dispatch = useDispatch()
    return (
        <div className='flex gap-2 shadow-md rounded-md p-2 mb-4'>
            <MdDelete
                onClick={() => dispatch(removeFromCart(id, name, price, img, qty))}
                className='text-fuchsia-500 absolute right-4 cursor-pointer'
            />
            <img src={img} alt="" className='w-[50px] h-[50px]' />
            <div>
                <h1>{name}</h1>
                <div className='flex justify-between '>
                    <span className='text-fuchsia-400 font-bold'>{price}</span>
                    <div className=' flex justify-center items-center gap-3  absolute right-8 '>
                        <AiOutlinePlusCircle className="text-2xl text-gray-500 hover:text-white rounded-full border border-gray-500 hover:bg-fuchsia-500" />
                        <span>{qty}</span>
                        <AiOutlineMinusCircle className="text-2xl text-gray-500 hover:text-white rounded-full border border-gray-500 hover:bg-fuchsia-500" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemCard
