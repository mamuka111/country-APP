import React from 'react';

function Card(props) {
  const { data } = props;

  return (
    <div className="card">
        <img className='imgs' src={data.flags.svg} alt={data.name.common} />
      <h2>{data.name.common}</h2>
      <p>{data.region}</p>
      
    </div>
  );
}

export default Card;