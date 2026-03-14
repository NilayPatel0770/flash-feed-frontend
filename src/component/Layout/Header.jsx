import React from 'react'
import ThemeSwitcher from '../UI/ThemeSwitcher'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Button from '../UI/Button'

const Header = () => {
  return (
    <div className='grid grid-cols-3 p-3 bg-base shadow'>
            <div className='flex items-center'>
                <label htmlFor='toggle-sidebar'>
                    <Bars3Icon className='h-8 px-5 text-base cursor-pointer' />
                </label>

                <div className='border border-muted flex rounded-full px-6 py-2 ms-5'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='outline-none bg-transparent placeholder:text-base text-base'
                        id='search'
                    />
                    <label htmlFor='search'>
                        <MagnifyingGlassIcon className='h-6 text-base' />
                    </label>
                </div>
            </div>

            <div className='text-center'>
                <h1 className=' text-3xl font-normal font-serif'>
                    Inshorts
                </h1>
            </div>

            <div className='flex justify-end items-center'>
                <Button text='Sign-In' />
                <ThemeSwitcher />
            </div>
        </div>
  )
}

export default Header
