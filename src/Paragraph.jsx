//  3 Dùng Consumer để nhận dữ liều từ thằng cha App.js

import { useContext } from "react";
import { ThemeContext } from "./App";


function Paragraph() {
    const theme  = useContext(ThemeContext)
    return ( 
        <p className={theme}>
            Context provides a way to pass data throught the 
            component tree without having to pass props down manually at every
            component tree without having to pass props down manually at every
            component tree without having to pass props down manually at every
        </p>
     );
}

export default Paragraph;