import { useState } from 'react';
import Content from './Content'

function App() {

  const [on , setOn] = useState(false)

  const handleSubmit = () => {
    setOn(!on);
  }
  
  return (
    <div className="App" style={{padding:50}}>
      <button onClick={handleSubmit}> Submit</button>
      {on && <Content />}
    </div>
  );
}

export default App;
