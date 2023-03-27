import React from 'react';

function Card(props) {
  const { data } = props;

  return (
    <div className="card">
        <img className='imgs' src={data.flags.png} alt={data.name.common} />
      <h2 className='countryNames'>{data.name.common}</h2>
      <div className='h4tags'>
      <h4>population: <h3>{data.population}</h3></h4>
      <h4>region: {data.continents}</h4>
      <h4>capital: {data.capital}</h4>
      </div>
    </div>
  );
}

export default Card;