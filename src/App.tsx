import { ClipLoader } from 'react-spinners';
import './App.css';
import EventBox from './components/eventBox';
import {useEffect, useState} from "react";
import { Events } from './types/events';

function App() {

  const[eventsList, setEventsList] = useState<Events[]>([]);

  useEffect(() =>{
    fetch('./events.json',{
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json())
    .then(res =>  res.data  as Events[])
    .then(res => setEventsList(res))
  }, [])


  return (
    <div className="App">
      <div className='EventsDiv'>
          {
            !eventsList ? <ClipLoader color={"#43715D"} size={150} speedMultiplier={1}/> :
            eventsList?.map((eventUnit, i) => {
              return <EventBox key={i} {...eventUnit}/>
            })
          }
        </div>
    </div>
  );
}

export default App;
