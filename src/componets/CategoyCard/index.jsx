import React from 'react'

const CategoryCard = () => {
    return (
        <div className="flex items-start">
            <img
                className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt=""
            />

            <div className="ml-6">
                <p className="text-sm">Vibrant Trainers</p>
                <dl className="mt-1 space-y-1 text-xs text-gray-500">
                    <div>
                        <dt className="inline">Color:</dt>
                        <dd className="inline">Blue</dd>
                    </div>
                </dl>

            </div>
            <div className="ml-6">
                <button
                    className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                    type="submit"
                >
                    Get Meals!
                </button>

            </div>
        </div>
    )
}

export default CategoryCard