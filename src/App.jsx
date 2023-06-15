import { useState } from 'react';
import './App.css';

function App() {

  const gifts = [
    'CPU',
    'RAM',
    "ROM"
  ]

  const [gift , setGift] = useState()

  
  const handleGift = () =>{
    setGift(gifts[Math.floor(Math.random()*3)])
  }

  return (
    <div className="App" style={{padding:50}}>
      <h1>{gift || "Chua co phan thuong"}</h1>
      <button onClick={handleGift}>Lay thuong</button>
    </div>
  );
}

export default App;
