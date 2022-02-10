import React from 'react'
import { Link } from 'react-router-dom'
import { TemplateIcon, PlusIcon, MenuIcon } from '@heroicons/react/outline'

export const Menubar = () => {
    return (
        <nav className='bg-gray-800 p-4 absolute w-full bottom-0 text-white flex justify-center text-sm'>
            <Link to='/categories' className='flex flex-col justify-center items-center text-xs'>
                <TemplateIcon className='w-6 h-6'/>
                <span className='mt-1'>Categories</span>
            </Link>
            <Link to='/add' className='flex flex-col justify-center items-center mx-16'>
                <PlusIcon className='w-6 h-6'/>
                Add
            </Link>
            <Link to='/menu' className='flex flex-col justify-center items-center'>
                <MenuIcon className='w-6 h-6'/>
                Menu
            </Link>
        </nav>
    )
}