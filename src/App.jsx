import { useState } from 'react';
import './App.css';

// response from API
const courses = [
  {
    id: 1,
    name : 'HTML , CSS'
  },
  {
    id: 2,
    name: 'Javasript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function App() {

  const [checked , setChecked] = useState()

  console.log((checked));
  

  const handleSubmit = () => {
    console.log({id : checked});
  }

  
  return (
    <div className="App" style={{padding:50}}>
      {
        courses.map((course ) => (
          <div key={course.id}>
            <input 
              type="radio" 
              checked={checked === course.id}
              onChange={() => setChecked(course.id)}
            /> 
            {course.name}
          </div>
         ) )
      }
     
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
