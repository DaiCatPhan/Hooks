import {  useCallback, useState } from "react";
import Content from "./Content";


function App() {

  const [count , setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1)
  },[])
  
  return (
    <div className="App" style={{padding:50}}>
      <Content onIncrease={handleIncrease}/>
      <h1 >{count}</h1>
    </div>
  );
}

export default App;

// useCallback : tránh lặp lại những cái hàm  không cần thiết khi truyền props cho component con
// Phải sài react memo thì mới dùng useCallback

// lần 1 thì hàm handleIncrease được tạo ra và tham chiếu vào ô nhớ 1 
// khi bấm button thì setCount , chạy lại từ đầu và tạo ra function handleIncrease lại thì tham chiếu vào ô nhớ mới là 2
// bên Content thằng memo nó đón đâu và so sánh  props là onIncrease bằng toán tử === 
// thì 2 thằng có tham chiếu khác nhau nên nó tưởng là props hay đổi nên render lại 


// Khi sài thằng useCallback(callback , []) khi mà tạo hàm thì nó tham chiếu vào ô nhớ 1
// Thì nó trả về tham chiếu 1 đó cho useCallback lưu ra ngoài component luôn , tự nó lưu
// sau đó nó return lại cái tham chiếu đó cho biến handleIncrease 
// mà cái [deps] trống thì nó trả về tham chiếu trước đó 
// Nên tham chiếu được thêm vào không thay đổi thì k render lại