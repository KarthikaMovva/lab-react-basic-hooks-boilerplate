// import { createContext,useState } from "react";
// const CreateContext = createContext()

// function Usingcontext({ children }){
//     const[initial,setinitial]=useState(false)
//     const applystyles={
//         backgroundColor : initial==true? "black":"yellow",
//         color: initial==true ? "orange":"blue",
//     }
//     return(
//         <CreateContext.Provider value={{state: initial, ContextStyle: applystyles, setfnto :setinitial}}>
//             {children}
//         </CreateContext.Provider>
//     )
// }
// export default Usingcontext