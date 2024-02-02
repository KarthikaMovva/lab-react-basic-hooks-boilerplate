import { useContext} from "react";
import {CreatedContext} from "./createcontext";
import { useState,useEffect } from "react";
import "../App.css"

function OnClickingtoggel(){
    const value=useContext(CreatedContext);
    console.log(value);

    const[button,setbutton]=useState(false);
    const[ok,setok]=useState(false);
    const[num,setnum]=useState(0);
    const[like,setlike]=useState(false);

    
    useEffect(
        function (){
        if(button){
          alert("Context button is clicked!")
          setbutton(false)
          setok(prevok=>!prevok)
        }[button]})

    useEffect(
        function (){
            if(like){
                setnum(prevnum=>prevnum+1)
                setlike(false)
            }[like]
        }
    )
    const letlikedisplay={
        display : num>=0 ? "block":"none",
    }
    const letsstyle={
        display : ok? "block":"none"
    }

    return(
        <div>
            <button onClick={()=>value.setto(!value.state)} style={{display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"20px", padding:"10px"}}className="toggel">Toggle</button>
            <div style={value.ContextStyle} className="box">
            <div className="para" style={letsstyle}>Displaying content on clicking context button. In the heart of a bustling city, there was a quaint little coffee shop known for its charming ambiance and delicious brews. Every morning, people from all walks of life would flock to this haven, seeking the comfort of the aromatic coffee that wafted through the air. The shop was adorned with vintage decor, giving it a cozy and welcoming feel. The baristas, always wearing warm smiles, moved with a rhythmic grace, crafting each cup of coffee with meticulous care. Amidst the city’s relentless chaos, this coffee shop remained a serene sanctuary, a testament to the simple pleasures of life.</div>
                <button className="context" onClick={()=>setbutton(true)}>Context</button>
                <div style={letlikedisplay} className="number" onClick={()=>setnum(0)}>{num}</div>
                <button onClick={()=>setlike(true)} className="like">Like</button>
            </div>
        </div>
    )
}
export default OnClickingtoggel;