import {useContext} from "react";
import Usingcontext from "./ContextComponent";

function Clicktoggel(){
    const number=useContext(Usingcontext);
    console.log(number);

    return(
        <div>
            <button onClick={()=>number.setfnto(!number.state)}>Toggle</button>
            <div style={number.ContextStyle}>This is made by Kalvium</div>
        </div>
    )
}
export default Clicktoggel