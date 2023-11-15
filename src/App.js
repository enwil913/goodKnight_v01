import {useState, useEffect } from 'react'
import React from 'react'
import Header from "./components/Header";
import Trainers from './components/Trainers';



function App() {
  const [trainers, setTrainers] = useState([])

  useEffect(() => {
    const getTrainers = async () => {
      const trainersFromServer = await fetchTrainers()
      setTrainers(trainersFromServer)
    }
    getTrainers()
  }, [])

  const fetchTrainers = async () => {
    const res = await fetch('https://json-server-vercel-khaki.vercel.app/trainers')
    const data = await res.json()
    return data
  }

  return (
    <div className="container">
      <Header title={'手影...'} version={'v1.xx'}/>
      <Trainers trainers = {trainers} />
    </div>
  );
}

export default App;


  // const [trainers, setTrainers] = useState([
  //   {
  //     id: 1,
  //     name: 'ABC',
  //     shortName: 'A',
  //     totalWin: 0,
  //     winHistory: [],
    
  //   },
  //   {
  //     id: 2,
  //     name: 'DEF',
  //     shortName: 'D',
  //     totalWin: 0,
  //     winHistory: [],
    
  //   },
  //   {
  //     id: 3,
  //     name: 'GHI',
  //     shortName: 'G',
  //     totalWin: 0,
  //     winHistory: [],
   
  //   }
  // ])
