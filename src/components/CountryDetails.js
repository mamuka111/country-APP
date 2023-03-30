import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import arrowBack from  "../images/arrowBack.jpg";
export default function CountryDetails(props) {
    const {countryId} = useParams();
    const navigate = useNavigate();
     const {data} = props;
     const element = data.find((element)=>{
      return element.cca3 === countryId && element
  })



  return (
   <>
   <div className='nextCard'>
   <div className='nextCardLeft'>
    <div className='backDiv'>
      <img className='arrow' src={arrowBack}></img>
      <div className='back'>back</div>
    </div>
    
   <img className='bigImg' src={element.flags.png} alt={element.name.common} />
   </div>
  <div className='nextCardRigth'>
    <div className='empty'></div>
   <div className='textContainer'> 
   <div className='mainInformation'>
   <h1 className='topH'>{element.name.common}</h1>
   <h1 className='h'>Native name: <h2 className='h2'>{element.name.common}</h2></h1>
   <h1 className='h'>Population: <h2 className='h2'>{element.population}</h2></h1>
   <h1 className='h'>Region: <h2 className='h2'>{element.region}</h2></h1>
   <h1 className='h'>Subregion: <h2 className='h2'>{element.subregion}</h2></h1>
   <h1 className='h'>Capital: <h2 className='h2'>{element.capital}</h2></h1>
   </div>
   <div className='secondInformation'>
    <h1 className='h'>Top Level Domain: <h2 className='h2'>{element.tld}</h2></h1>
    <h1 className='h'>Currencies: <h2 className='h2'>{Object.values(element.currencies)[0].name}</h2></h1>
    <h1 className='h'>Language: <h2 className='h2'>{Object.values(element.languages)[0]}</h2></h1>
   </div>
   </div>
  </div>
   </div>
   </>
    )
}