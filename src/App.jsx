import { useState } from 'react';
import './App.css';

function App() {

  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('')


  const handleSubmit = () => {
    console.log({
      username : username,
      email : email,
    }); 
  }

  
  return (
    <div className="App" style={{padding:50}}>
      <label >User name : </label>
      <input  
        onChange={e => setUsername(e.target.value)} 
        value={username}
      />

      <br />
      <label >Email : </label>
      <input  
        onChange={e => setEmail(e.target.value)} 
        value={email}/>

      <br />
      <button onClick={handleSubmit}>Gui</button>
    </div>
  );
}

export default App;
