import { useState } from "react"

export default function EventToDo() {
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const input = e.target.task;
    //     const taskValue = input.value.trim();
    //     if (taskValue ==="") {
    //         alert("Can not  empty task");
    //         return;
    //     }
    //     const li = document.createElement("li");
    //     li.innerHTML = `<span>${taskValue}</span>
    //     <button class="deleteBtn">Delete</button>`;

    //     document.getElementById("taskList").appendChild(li)
    // }

    // function handleListClick(e) {
    //     if (e.target.className === "deleteBtn") {
    //         e.target.parentElement.remove();
    //     }
    // }


    // return (
    //     <>
    //         <h1>To Do List</h1>
    //         <form onSubmit={handleSubmit}>
    //         <input type="text" name="task" placeholder="enter task" class="enter"/>
    //         <button type="submit">Add task</button>
    //     </form >
    //         <ul id="taskList" onClick={handleListClick}></ul>
    //         <p class="para">This is my Professional Elective Lecture</p>
        
    //     </>
    // );
        const [task, setTask] = useState("");
        const [tasks, setTasks] = useState([]);
    return (
    

        <>
            <h1>To Do App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
            
            <ul>
                {
                    tasks.map((item, index)=>(
                        <li key={index}>
                            <span>{item}</span>
                        </li>
                    ))
                }

            </ul>
        
        
        
        </>
);





}