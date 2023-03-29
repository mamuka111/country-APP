import './App.css';
import Header from './components/Header';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Filter from './components/Filter';
import Card from './components/Card';

function App() {
  const [data,setData] =useState([]);
  const [fetched, setFetched] = useState(false);
  const [clickedRegion,setClickedRegion] = useState("Filter by Region")
  const [searched, setsearched] = useState("")

  function searchChange(el){
    setsearched(el.target.value)
   
  } 

  function onChange(event){
    setClickedRegion(event.target.value)
    // console.log(event.target.value);
   }
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      // console.log(response.data);
      setData(response.data);
      setFetched(true);
    });
  }, []);

  // console.log(data);
  
  if(data.length === 0){
    return 
  }
  
  return (
    <>
    <div className='mainContainer'>
    <Header/>
    <Filter arai={data} onChange={onChange} search={searchChange} searched={searched}/>
    <div className='mainDiv'>
    {fetched && data.map((element) => (
  (clickedRegion === "Filter by Region" || element.region === clickedRegion) ? 
    <div className='container'>
      <Card key={element.name.common} data={element} />
    </div> : null
))}
      </div>
      </div>
    </>
  );
}

export default App;
