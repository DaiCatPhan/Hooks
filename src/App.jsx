import { useRef, useState } from 'react';
import './App.css';



function App() {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs =JSON.parse( localStorage.getItem('jobs'))
    return storageJobs
  }) 
  const inputRef = useRef()

  console.log(job);

  const handleOnChange = (e) => {
    setJob(e.target.value)
  }


  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev , job];
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs',jsonJobs)

      return newJobs;
    })
    setJob('')
    inputRef.current.focus()
  }


  
  return (
    <div className="App" style={{padding:50}}>
      <input 
        type="text" 
        value={job}
        ref={inputRef}
        onChange={handleOnChange}
      />
     
      <button onClick={handleSubmit}>Add</button>
      
      <ul>
        {
          jobs.map((job , index) => (
            <li key={index}>{job}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
