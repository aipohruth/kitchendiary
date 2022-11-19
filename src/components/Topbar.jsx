import React from 'react'
import { BiSearch} from "react-icons/bi";
import { IoIosArrowDown} from "react-icons/io";
import { BsPlusLg} from "react-icons/bs";
import bell from  '../Assets/bell.png'
import prof from  '../Assets/prof.png'


const Topbar = () => {
  return (
    
      <div className='flex justify-between font-rail  mt-4 pt-3'>
        <div className='flex items-center font-rail  h-10 w-2/5 text-sm rounded-md pl-16 pr-4 text-neutral-400  border border-neutral-400 '>
        <BiSearch className=' text-neutral-400' />
      <input type='text' className='ml-4 text-xs'  placeholder='Search for recipes...' />
      </div>
      <div className=' inline-flex items-center justify-between gap-4 '>
        <div>
      <img src={bell} style={{width:'20px'}} alt='notification bell' />
      </div>
      <div>
      <img src={prof} alt='face' />
      </div>
      <div>
      <p className='flex items-center space-x-3' >Janet <IoIosArrowDown className='ml-4'/> </p>
      </div>
       
      <div>
      <button className='bg-orange-500 flex h-12 w-42 text-center px-12 rounded-md gap-1  text-white  items-center'><BsPlusLg/>Create Recipee</button>
      </div>
      
      </div>
      </div>
      
  )
}

export default Topbar
