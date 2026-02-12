export default function Event()
{
    function handleClick(name) {
    alert(`Button clicked by ${name}`)
}
    function handleClick2(name) {
    alert(`Button clicked by ${name}`)
}
    return (
        <div>
            <h1>Event Handling</h1>
            <button onClick={() => handleClick("Tarun")}>Click Me</button>
            <button onDoubleClick={()=> handleClick2("Walia")}>Double Click</button>
        </div>
    )
}