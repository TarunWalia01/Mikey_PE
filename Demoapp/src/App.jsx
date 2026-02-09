import { UserCard } from "./UserCard"
import { Wrapper } from "./Wrapper"

export default function App() {
  const users = [
    {
      name: "Tarun Walia",
      role: "Student",
      country:"India"
    },
    {
      name: "Sundaram Yadav",
      role: "Gymming", 
      country:"India"
    },

  ]
  return (
    <div>
    <h1>Users Dashboard</h1>
    <Wrapper title="Users List" >
        {
          users.map((use, index)=>(<UserCard key={index} user={use}/>))
    }
    </Wrapper>
      
    </div>
    )

}