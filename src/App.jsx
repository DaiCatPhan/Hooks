import { createContext, useState } from "react";
import Content from "./Content";
import './App.css'

// use Context
// Comp A -> CompB -> CompC

// 1 Create content : Không gian để truyền dữ liệu
// 2 Provider 
// 3 Consumer


// 1 tạo conent và sẽ bao nó qua thằng lớn nhất để có thể truyền cho tất cả thằng con 
export const ThemeContext = createContext() 

function App() {

  const [theme , setTheme] =useState('dark')

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light': 'dark');
  }
// 2 . truyền dữ liệu từ thằng cha đến cho tất cả thằng con bằng Provider .
//     trong Provider có nhận thằng value nhận dữ liệu
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{padding:50}}>
        <button onClick={handleTheme}>Toggle theme</button>
        <Content />
      </div>  
    </ThemeContext.Provider>
  );
}

export default App;

