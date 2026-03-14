import React from 'react'
import ThemeSwitcher from '../UI/ThemeSwitcher'
import { Bars3Icon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import Button from '../UI/Button'

const Header = ({ handleSidebarToggle }) => {
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
    <div className='hidden md:block'>
        <Button text='Sign-In' />
    </div>

    {/* Mobile Sign-In Icon */}
    <div className='md:hidden cursor-pointer'>
        <UserIcon className='h-5 text-base' />
    </div>

    <ThemeSwitcher />

</div>
        </div>
  )
}

export default Header
