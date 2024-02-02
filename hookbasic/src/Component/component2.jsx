import { useState } from "react";
function Calculatesiblings(){
    const[agenum,setagenum]=useState(19);
    const[sibnum,setsibnum]=useState(1);

    function Clickage(){
        setagenum(agenum+1)
    }

    function Clicksibling(){
        setsibnum(sibnum+1)
    }

    return(
        <div>
           <p>My age is {agenum}</p> 
           <button onClick={Clickage}>get older</button>
           <p>My siblings: {sibnum}</p>
           <button onClick={Clicksibling}>get more siblings</button>
        </div>
    )
}
export default Calculatesiblings;