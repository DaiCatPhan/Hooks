import { memo } from "react";

function Content() {
    console.log('re-render');
    
    
    return ( 
        <>
           <h2>Hello anh em F8</h2>
        </>
     );
}

export default memo(Content);

// memo check các props của component Content xem nó có thay đỏi hay không
// Nếu có thay đổi thì nó render lại component Content
// Nếu k thay đổi thì nó khong render lại Content