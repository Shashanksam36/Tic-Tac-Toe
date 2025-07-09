import React, { useState } from 'react'

export const GameCard = ({item}) => {
    const[xox,setxox]=useState();
    let add=()=>{
        if(item%2==0){
            setxox("O");
            console.log(item)
            item=item+1;
        } 
        else{
            setxox("X");
            console.log(item)
            item=item+1;
        }
    }
  return (
    <div onClick={add} className='w-[100px] h-[100px] bg-gray-800 rounded-md 
    hover:scale-105 flex justify-center items-center text-center cursor-pointer'>
        <p className='text-8xl text-white pb-2
        '>{xox}</p>
    </div>
  )
}
