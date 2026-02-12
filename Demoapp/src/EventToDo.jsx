export default function EventToDo() {
    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target.value;
        const taskValue = input.trim();
        if (task ==="") {
            alert("Can not  empty task");
            return;
        }
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskValue}</span>
        <button class="deleteBtn">Delete</button>`;

        document.getElementById("taskList").appendChild(li)
    }

    function handleListClick(e) {
        if (e.target.className === "deleteBtn") {
            e.target.parentElement.remove();
        }
    }


    return (
        <>
            <h1>To Do Submit</h1>
            <form action="submit" onSubmit={()=>handleSubmit(e)}>
            <input type="text" name="task" placeholder="enter task"/>
            <button type="submit">Add task</button>
        </form >
            <ul id="tasklist" onClick={handleListClick}></ul>
        
        </>
    );
}