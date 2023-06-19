import {  useEffect, useState } from "react";


function Content() {
    const [avatar , setAvatar] = useState()

    useEffect(() => {

        // Clean up
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])

    const handlePriviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file)
    }
    

    return ( 
        <>
            <input type="file" 
                onChange={handlePriviewAvatar}

            />

            {
                avatar && (
                    <img src={avatar.preview} alt="Dai Cat"  width="50%"/>
                )
            }
        </>
     );
}

export default Content;