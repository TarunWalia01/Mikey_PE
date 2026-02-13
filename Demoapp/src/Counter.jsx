import { useState }  from "react"
export default function Counter() {
    const [count, setCount] = useState(0);
    const [age, setage] = useState(18)

    function handleIncrement() {
        setCount(count => count + 1);
    }
    function handleDecrement() {
      setCount(count => count - 1);
    }
    function handleAge() {
        setage(age=>age+1)
    }
    function handleAgeC() {
        setage(age => age - 1)
        if (age < 18) {
            alert("Under Age")
        }
        
    }
    return (
        <>
        <h1>Counter App</h1>
            <h3>Count: {count}</h3>
        <button class="inc" onClick={handleIncrement}>+</button>
        <button class="dec" onClick={handleDecrement}>-</button> <br />
            <h1>Election Age</h1>
            <h3>Age: {age}</h3>
        <button class="inc" onClick={handleAge}>+</button>
        <button class="dec" onClick={handleAgeC}>-</button>
        </>
    )
}