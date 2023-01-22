import React from 'react'


export default function searchBar({setInputVal}) {
  return (
    <div>
        <input type="text" placeholder='search here ...' onChange={(e)=>{setInputVal(e.target.value)}}/>
    </div> 
  )
}
