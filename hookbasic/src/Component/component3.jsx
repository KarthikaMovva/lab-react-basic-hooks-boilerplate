import { useState } from "react";
function Saveinput(){
    const[values,setvalues]=useState({
        age : 20,
        siblings : 1,
    })
function whenclick(keytoget){
    setvalues({...values,[keytoget] : values[keytoget] + 1})
 }
 return(
    <div>
        <h1>My age is : {values.age}</h1>
        <h1>My siblings : {values.siblings}</h1>
        <button onClick={()=>whenclick("age")}>Get age</button>
        <button onClick={()=>whenclick("siblings")}>Get siblings</button>
    </div>
 )
}
export default Saveinput;