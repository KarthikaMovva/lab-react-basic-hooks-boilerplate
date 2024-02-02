import { createContext,useState } from "react";
import OnClickingtoggel from "./toggelbutton";
export const CreatedContext = createContext()

function Contexttotoggel(){
    const[boolean,setboolean]=useState(false)
    const needstyles={
        backgroundColor : boolean==true? "black":"grey",
        color : boolean==true? "white":"black",
    }
    return(
        <CreatedContext.Provider value={{state: boolean, ContextStyle: needstyles, setto :setboolean}}>
        <OnClickingtoggel/>
        </CreatedContext.Provider>
    )
}
export default Contexttotoggel;
