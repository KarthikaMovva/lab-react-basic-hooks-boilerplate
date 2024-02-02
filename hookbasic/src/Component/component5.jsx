import { useEffect,useState } from "react";
// import Usingcontext from "./ContextComponent";

function Usehooks(){
    // const number=useContext(Usingcontext);
    // console(number)
    const[age,setage]=useState(19)
    const[sib,setsib]=useState(3);

    useEffect(
        function (){
            if(age>19){
                alert("Something is changed "+age )
            }
        },
        [age]
    )

    return(
        <div>
            <p>My age is {age}</p>
            <p>My siblings {sib}</p>
            <button onClick={()=>{setage(age+1)}}>get older</button>
            <button onClick={()=>{setsib(sib+1)}}>get siblings</button>
        </div>
    )
}
export default Usehooks;