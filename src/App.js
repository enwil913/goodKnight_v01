import {useState} from 'react'
import React from 'react'
import Header from "./components/Header";
import Trainers from './components/Trainers';


function App() {
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: 'ABC',
      shortName: 'A',
      totalWin: 0,
      winHistory: [],
    
    },
    {
      id: 2,
      name: 'DEF',
      shortName: 'D',
      totalWin: 0,
      winHistory: [],
    
    },
    {
      id: 1,
      name: 'GHI',
      shortName: 'G',
      totalWin: 0,
      winHistory: [],
   
    }
  ])

  return (
    <div className="container">
      <Header title={'手影 1.0'} />
      <Trainers trainers = {trainers} />
    </div>
  );
}

export default App;
 