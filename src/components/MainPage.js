import React from 'react'
import { Link } from 'react-router-dom';
import Filter from './Filter';
import Card from './Card';

export default function MainPage(props) {
    const {fetched} = props;
    const {filteredData} = props;
    console.log(filteredData);

    return (<>
    <Filter  arai={props.data} onChange={props.onChange} search={props.searchChange} searched={props.searched}  />
    <div className='mainDiv'>
      {fetched  && 
        filteredData.map((element) => (
          <div className='container' key={element.name.common}>
            <Link to={`/${element.cca3}`}>
         <Card data={element} />
            </Link>
          </div>
        ))}
    </div>
    </>
  )
}
