import { useEffect, useState } from "react";

export default function Useeffect() {
    const[count,setCount]=useState(0)
    // run once on mount
    useEffect(() => { console.log("Called at Mount") }, [])
    // run when  state changed
    useEffect(()=>{console.log(count)},[count])
    return (
        <div>
            <h3>Count:{count}</h3>
            <button onClick={()=>count=>count+1}>increase</button>
        </div>
    )
}