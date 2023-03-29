import React, { useState } from 'react'
import search from "../images/search.png";


export default function Filter(props) {
    let array = [];

    console.log(props.searched);
   props.arai.map((element) => {
    return !array.includes(element.region) && array.push(element.region) 
   })
//    console.log(array);


  return (
        <>
        <div className='section'>
        <div className='searchDiv'>
        <img className='searchImg' src={search}></img>
        <input onInput={(e)=>props.search(e)} className='search' placeholder='search for a country...' value={props.searched}></input>            
        </div>
        <select className='select' onChange={props.onChange}>
            <option value="Filter by Region">Filter by Region</option>
            {array.map((e) => {
                return <option>{e}</option>
            })}
        </select>
         </div>
        </>
    )
}
