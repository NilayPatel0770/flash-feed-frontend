import { ArrowRightStartOnRectangleIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

const Sidebar = ({ isSidebarOpen, onCloseSidebar }) => {
      const dummyCategories = [
        { id: 1, name: 'Technology', active: true },
        { id: 2, name: 'Science', active: false },
        { id: 3, name: 'Sports', active: false },
        { id: 4, name: 'Entertainment', active: false },
        { id: 5, name: 'Business', active: false },
    ];

    const [categories, setCategories] = useState(dummyCategories);

    /**
     * to display active category
     * @param {*} categoryId 
     */
    const setActiveCategory = (categoryId) => {
        const updatedCategories = categories.map(category => ({
            ...category,
            active: category.id === categoryId,
        }));
        setCategories(updatedCategories);
    };
    return (
         // sidebar started
        <div className={`bg-inv-bg text-primary  shadow absolute transition-all duration-300 ease-in-out top-0  w-64 h-full z-[60] ${isSidebarOpen ? 'left-[0]' : 'left-[-270px]'}`} >
            {/* Your sidebar content */}
            <div className='flex flex-col h-full justify-between'>
                <div className="">
                    <div className='flex items-center my-3'>
                        <ChevronLeftIcon className='text-inv-text h-6 md:h-12 cursor-pointer' onClick={onCloseSidebar} />
                        <span className='text-inv-text font-normal'>Back to Home</span>
                    </div>
                    <h2 className="text-xl font-semibold text-inv-text 50 mb-2 p-4   ">News Categories</h2>
                    <div className='border border-muted font-thin  mx-4'></div>
                    {/* news categories */}
                    <ul className="mt-2">
                        {categories.map((category) => (
                            <li key={category.id}
                                className={`cursor-pointer text-inv-text px-4 py-3 ${category.active ? 'bg-gray-400' : ''} `} onClick={() => setActiveCategory(category.id)}>
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* for logout button */}
                <div className='flex px-4 py-3'>
                    <ArrowRightStartOnRectangleIcon className='text-inv-text h-6 cursor-pointer' />
                    <span className='ps-3 text-inv-text'>Logout</span>
                </div>
            </div>
        </div>
        // sidebar end
    )
}

export default Sidebar
