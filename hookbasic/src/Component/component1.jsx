import { useState } from "react";
// import "./App.css"
function Calculateage(){

const[agenum,setagenum]=useState(19);

function Clickage(){
    setagenum(agenum+1)
}
return(
    <div className="age" style={{textAlign:"center"}}>
        <p>My age is {agenum}</p>
        <button onClick={Clickage}>Get older</button>
    </div>
)
}
export default Calculateage;