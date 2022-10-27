import React, { useState } from 'react';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

const SideArrays =({direction , moveSlide})=>{
    
//  icon components
    return (
         <button 
         onClick={moveSlide}
          className={ direction === "next" ? " absolute right-2 top-1/2 bg-gray-400 p-3 border border-black  rounded-md " : " absolute left-2 top-1/2 bg-gray-400 p-3 border border-black  rounded-md "} 
          >             
            <img className=' w-5 ' alt="arrayKay" src={ direction === "next" ? leftArrow : rightArrow} />
           </button>
  )
}
 


export const Slider = ()=>{

  const [ slideIndex, setSlideIndex] = useState(1)
   const nextSlie = ()=>{
     if(slideIndex !== 5){
        setSlideIndex( slideIndex +1)
     }else{
        setSlideIndex(1)
     }
   }
   const prevSlie = ()=>{
      if(slideIndex !== 1){
        setSlideIndex( slideIndex -1)
      }else{
        setSlideIndex(5)
      }
   }
const dotslide = a =>{
  setSlideIndex(a)
}




return(
    <div className='  flex flex-col items-center justify-center h-screen'>
    <div className=' flex items-center justify-center w-full'>
     {
      Array.from({ length: 5}).map((item, index) => (
     
       <div className={ slideIndex  === index + 1 ?'flex w-1/3 m-1 h-96 bg-red-700' : ' hidden' }>
          <img  
           className=' w-full h-full'
          src={ require(`./Imgs/img${index +1}.jpg`)} 
          alt="adsfasdf"
          />
        </div>
         

      
        
      ))
      
     }
     </div>
    <SideArrays direction={ "next" } moveSlide={nextSlie} />
    <SideArrays direction={ " " } moveSlide={prevSlie} />

     <div className=' flex justify-center '>
        {
          Array.from({ length:5}).map((item,index)=>(
           <>
             <div
             onClick={ ()=> dotslide( index +1)}
             className={ slideIndex === index+1 ?' w-4 h-4 rounded-full bg-gray-900 m-1' : ' m-1 w-4 h-4 rounded-full bg-gray-600'}></div> 
           </> 
          ))
        }
     </div>
    </div>
)
} 