import React, { useState } from 'react'
import FoodItems from './FoodItems';

const Category = () => {
    const categories = [
        { id: 1, name: "All" },
        { id: 2, name: "Lunch" },
        { id: 3, name: "Breakfast" },
        { id: 4, name: "Dinner" },
        { id: 5, name: "Snacks" },
    ];
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-3">Find the best food</h2>
            <div className='flex space-x-3'>
                {categories.map((category) =>

                (


                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${selectedCategory === category.name
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}


                    >
                        {category.name}
                    </button>

                ))}
            </div>

        </div>
    )
}

export default Category
