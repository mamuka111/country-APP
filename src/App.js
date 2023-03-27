import './App.css';
import Header from './components/Header';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Filter from './components/Filter';
import Card from './components/Card';

function App() {
  const [data,setData] =useState();
  const [fetched, setFetched] = useState(false);



  
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setData(response.data);
      setFetched(true);
      
    });
  }, []);

  return (
    <>
    <div className='mainContainer'>
    <Header/>
    <Filter/>
    <div className='mainDiv'>
    {fetched && data.map((element) => (
       <div className='container'> <Card key={element.name.common} data={element} /></div>
      ))}
      </div>
      </div>
    </>
  );
}

export default App;
