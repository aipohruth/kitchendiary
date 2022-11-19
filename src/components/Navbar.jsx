import React from 'react'
import { AiOutlineHome} from "react-icons/ai";
import { MdFavoriteBorder} from "react-icons/md";
import { MdOutlineExplore} from "react-icons/md";
import { TbTemplate} from "react-icons/tb";
import { FiSettings} from "react-icons/fi";
import { FiLogOut} from "react-icons/fi";
import Topbar from './Topbar'
import Categories from './Categories';


const Navbar = () => {
  return (
    <div className="flex">
    <div className='bg-red-50  h-full w-48 xs:hidden'>
        <div className='pt-8 px-4'>
    <div className='text-2xl font-inter mt-4 font-bold'>Kitchen<span className='text-orange-500'>Diary</span></div>

            <nav className='my-20 font-rail text-sm text-neutral-500'>
            <ul>
                <li>
                <a className="flex items-center space-x-3 rounded-md pb-7" href='/'><AiOutlineHome className='mr-3'/>Home</a>
                </li>
                <li>
                <a className="flex items-center space-x-3 text-orange-500 rounded-md pb-7" href='/'><AiOutlineHome className='mr-3'/>Recipee</a>
                </li>
                <li>
                <a className="flex items-center space-x-3 rounded-md pb-7" href='/'><MdFavoriteBorder className='mr-3'/>Favourite</a>
                </li>
                <li>
                <a className="flex items-center space-x-3 rounded-md pb-7" href='/'><MdOutlineExplore className='mr-3'/>Explore</a>
                </li>
                <li>
                <a className="flex items-center space-x-3 rounded-md pb-7" href='/'><TbTemplate className='mr-3'/>Templates</a>
                </li>    
            </ul>
            </nav>

            <nav className='flex items-end   mt-96 font-rail text-sm text-neutral-500'>
                <ul>
                    <li>
                    <a className="flex items-center space-x-3 rounded-md pb-7" href='/'><FiSettings className='mr-3'/>Settings</a> 
                    </li>
                    <li>
                    <a className="flex items-center text-orange-700 space-x-3 rounded-md pb-7" href='/'><FiLogOut className='mr-3'/>Log out</a> 
                    </li>
                </ul>
            </nav>

        </div>
      
    </div>

    <div className='flex-1 p-7 mx-10  h-full'>
        <Topbar/>
        <Categories />
        </div>
       





    </div>
  )
}

export default Navbar
