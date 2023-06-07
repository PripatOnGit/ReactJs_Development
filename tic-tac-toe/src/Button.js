import { useState } from "react";
export function Button(){

    const [value, setValue] = useState(null);

    function handleClick(){
        setValue('X');
        
    }
    return(
        <button className="square" onClick={handleClick}>{value}</button>
    );
}