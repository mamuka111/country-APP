import React, { useState } from 'react'
import search from "../images/search.png";


export default function Filter(props) {
    let array = [];


   props.arai.map((element) => {
    return !array.includes(element.region) && array.push(element.region) 
   })
   console.log(array);


  return (
        <>
        <div className='section'>
        <div className='searchDiv'>
        <img className='searchImg' src={search}></img>
        <input className='search' placeholder='search for a country...'></input>            
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
