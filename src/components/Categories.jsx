import React from 'react'
import  Card  from './Card';
import { cardData1 } from './Dummydata';

const Categories = () => {
  return (
    <div >
      <h1 className='text-3xl my-6 font-rail mt-12  font-bold'>Categories</h1>
      <div className='grid grid-cols-3 w-full  gap-12'>
        {cardData1.map((info, id)=>(
           <div key={id}>
  <Card logo={info.logo} title={info.title}/>
           </div>
              
      
       ))}
       </div>
    </div>
  )
}

export default Categories
