import React from 'react'
import search from "../images/search.png";
 
export default function Filter() {
  return (
        <>
        <div className='section'>
        <div className='searchDiv'>
        <img className='searchImg' src={search}></img>
        <input className='search' placeholder='search for a country...'></input>            
        </div>
        <select className='select'>
            <option value="Filter by Region">Filter by Region</option>
            <option value="africa">africa</option>
            <option value="america">america</option>
            <option value="asia">asia</option>
            <option value="europe">europe</option>
            <option value="oceania">oceania</option>
        </select>
         </div>
        </>
    )
}
