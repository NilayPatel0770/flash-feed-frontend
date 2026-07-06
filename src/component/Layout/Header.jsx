import React from 'react'
import ThemeSwitcher from '../UI/ThemeSwitcher'
import { Bars3Icon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../context/AuthContext";

const Header = ({ handleSidebarToggle }) => {
    const navigate = useNavigate();
    const { user, logout, isAuthenticated } = useAuth();
      /**
     * for opening the sidebar 
     */
    const handleMenu = () => {
        handleSidebarToggle()
    }
  return (
   <div className='sticky top-0 z-50 grid grid-cols-3 p-3 bg-main-bg text-main-text shadow items-center transition-colors duration-300'>
            <div className='flex items-center'>
                <label htmlFor='toggle-sidebar'>
                    <Bars3Icon  className='h-5 md:h-8 px-3 md:px-5 text-base cursor-pointer' onClick={handleMenu}/>
                </label>

                <div className='hidden md:flex border border-muted rounded-full px-6 py-2 ms-5 items-center'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='outline-none bg-transparent placeholder:text-base text-base'
                        id='search'
                    />
                    <label htmlFor='search'>
                        <MagnifyingGlassIcon className='h-4 md:h-6 text-base' />
                    </label>
                </div>
            </div>

            <div className='text-center'>
               <h1 className='text-lg md:text-3xl font-normal font-serif'>
                    Flash Feed
                </h1>
            </div>

           <div className='flex justify-end items-center gap-3'>
    
    {/* Desktop Sign-In Button */}
    <div className="hidden md:block">

    {!isAuthenticated ? (

        <Button
            text="Sign In"
            onClick={() => navigate("/login")}
        />

    ) : (

        <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2 cursor-pointer"
        >

            <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                className="w-9 h-9 rounded-full"
            />

            <span className="text-main-text">

                {user.name}

            </span>

        </button>

    )}

</div>

    {/* Mobile Sign-In Icon */}
    <div className='md:hidden cursor-pointer'>
        <div
    onClick={() =>
        isAuthenticated
            ? navigate("/profile")
            : navigate("/login")
    }
>

    <UserIcon className="h-6 cursor-pointer text-main-text"/>

</div>
    </div>

    <ThemeSwitcher />

</div>
        </div>
  )
}

export default Header
