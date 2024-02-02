import { useState } from "react";
function Displayage(){
    const[age,setage]=useState(19)
    const[siblings,setsibling]=useState(3);

    return(
        <div>
            <p>My current age is {age}</p>
            <p>My siblings {siblings}</p>
            <button onClick={()=>setage((age)=>age+1)}>age</button>
            <button onClick={()=>setsibling((siblings)=>siblings+1)}>siblings</button>
        </div>
    )
}
export default Displayage;