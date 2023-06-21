import Paragraph from "./Paragraph";

function Content({onIncrease}) {
    console.log('re-render');
    
    
    return ( 
        <>
            <Paragraph />
        </>
     );
}

export default (Content);

// useCallback : tránh tạo ra những cái hàm mới không cần thiết trong component của bạn
// Phải sài react memo thì mới dùng useCallback