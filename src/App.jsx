import { type } from "@testing-library/user-event/dist/type";
import { useMemo, useRef } from "react";
import {  useState } from "react";


function App() {

  const [name , setName] = useState('')
  const [price , setPrice] = useState('')
  const [products , setProducts] = useState([])

  const nameRef = useRef()

  



  const handleSubmit = () => {
    setProducts([...products , {
      name,
      price : +price
    }])

    setName('')
    setPrice('')
    nameRef.current.focus()
  }

  const total = useMemo(() => {
    const result = products.reduce((result , prod) => {
      console.log('hi');
      return result + prod.price
    },0)  
    return result 
  } , [products])

  return (
    <div className="App" style={{padding:50}}>
      <input type="text" 
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={e=>setName(e.target.value)}
      />

      <br />

      <input type="text" 
        value={price}
        placeholder="Enter price..."
        onChange={e=>setPrice(e.target.value)}
      />

      <br />
      <button onClick={handleSubmit}>Add</button>

      <br />

      Total: {total}
      {
        products.map((product , index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))
      }

    </div>
  );
}

export default App;

