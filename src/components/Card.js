import React from 'react';
import { AiOutlineHeart} from "react-icons/ai";
import {BsStarFill} from "react-icons/bs";
import { BsBookmark} from "react-icons/bs";
import { BsStarHalf} from "react-icons/bs";
import { MdTimer} from "react-icons/md";
import { CiForkAndKnife} from "react-icons/ci";








const Card = ({title, time, ingr, desc, logo}) => {


  return (
    <div className='border border-neutral-400 w-60 p-2'>
      <div>
        <img src={logo} alt='food'/>
        </div>
        <div className='flex justify-between mt-4 items-center'>
        <div className='font-raleway font-bold'>
            <h1>{title}</h1>
            
        </div>
        <div className=' items-end text-sm inline-flex'>
        <BsBookmark className='mr-2'/>
            <AiOutlineHeart/>
        </div>
        </div>
        <div className='inline-flex text-yellow-200 text-sm'>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarHalf/>
            </div>
            <div className='flex justify-start items-center text-sm mt-2 mb-6'  >
                <div >
                <p className='inline-flex text-xs items-center space-x-3 mr-4' > <MdTimer className='text-orange-600 text-sm' />120 mins</p>
                </div>
                <div>
                <p className='inline-flex items-center text-xs space-x-3'><CiForkAndKnife className='text-orange-600 text-sm'/>12 Ingredients</p>
                </div>
            </div>
            <div className='flex justify-start items-center text-sm mb-2'  >
                <div >
                <button className='inline-flex text-xs items-center bg-orange-200 rounded p-0.5 space-x-3 mr-4'>Easy</button>
                </div>
                <div>
                <button className='inline-flex text-xs items-center  bg-orange-200 rounded p-0.5  space-x-3'>4 Steps</button>
                </div>
            </div>
    </div>
  )
}

export default Card;
