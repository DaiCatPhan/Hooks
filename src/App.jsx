import {  useState } from "react";
import Content from "./Content";


function App() {

  const [count , setCount] = useState(0)

  const handleIncrease = () => {
      setCount(prev => prev + 1)
  }
  
  return (
    <div className="App" style={{padding:50}}>
      <Content/>
      <h1 >{count}</h1>
      <button onClick={handleIncrease}>Click me !</button>
    </div>
  );
}

export default App;
