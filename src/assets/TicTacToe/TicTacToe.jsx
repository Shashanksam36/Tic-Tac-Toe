import React, { useEffect, useState } from 'react'
import { GameCard } from './GameCard'

export const TicTacToe = () => {
const [table,settable]=useState(Array(9).fill(""));
const [xo,setxo]=useState(true);
const [winner,setwinner]=useState(true);
const [draw,setdraw]=useState(true);
const add=(item,index)=>{
  if(winner&&table[index]===""){
      const updatetable=[...table]
      updatetable[index]=xo?"X":"O";
      settable(updatetable);
      setxo(!xo);
      // xo?setxo(false):setxo(true);
      }
}
useEffect(()=>{
  //winning condition
    if((table[0]===table[1]&&table[2]===table[1]&&table[0]!=="")||
    (table[0]===table[3]&&table[3]===table[6]&&table[0]!=="")||
    (table[0]===table[4]&&table[4]===table[8]&&table[0]!=="")||
    (table[2]===table[4]&&table[4]===table[6]&&table[4]!=="")||
    (table[3]===table[4]&&table[3]===table[5]&&table[5]!=="")||
    (table[6]===table[7]&&table[8]===table[6]&&table[8]!=="")||
    (table[1]===table[4]&&table[4]===table[7]&&table[1]!=="")||
    (table[2]===table[5]&&table[8]===table[5]&&table[8]!==""))
      setwinner(false);
      //draw condition
    if(table[0]!==""&&table[1]!==""&&table[2]!==""&&table[3]!==""&&
      table[4]!==""&&table[5]!==""&&table[6]!==""&&table[7]!==""&&table[8]!=="")
      setdraw(false);
 },[xo])
const reset=()=>{
  const resettable=Array(9).fill("");
  settable(resettable)
  setwinner(true);
  setdraw(true);
}
  return (
    <div className='bg-stone-900 min-h-screen mx-auto text-center 
    items-center text-white pt-[10vh]'>
        <div className='h-[310px] w-[310px] mx-auto'>
            <h1 className=' text-3xl'>Tic Tac Toe</h1>
            {!winner&&<p className='my-1 text-green-700 text-xl'>Winner: {xo?"player2":"player1"}</p>}
            {winner&&!draw&&<p className='my-1 text-yellow-600 text-xl'>Match Draw please Click on Restart for a Rematch</p>}
            <p className='my-1'>Turn: {xo?"player1":"player2"}</p>
            <div className='grid grid-cols-3 gap-1'>
              {/* x and o */}
              {table.map((item,index)=>(
                  <div key={index} onClick={()=>add(item,index)} className='w-[100px] h-[100px] bg-gray-800 rounded-md 
                  hover:scale-105 flex justify-center items-center text-center cursor-pointer'>
                    <input type='hidden' value={item}/>
                      <p className='text-8xl text-white pb-2
                      '>{item}</p>
                  </div>
              ))}
            </div>
            <button onClick={reset} className='mt-6 shadow-[0px_0px_2px_rgba(200,200,200,1)] rounded-md w-[200px]'>Restart the game?</button>
        </div>
    </div>
  )
}
