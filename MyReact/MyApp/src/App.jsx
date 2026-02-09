import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const y = [12, 13, 14];
  const c={name:"  Yatin  ", age:22}
    return (
        <>
            <Header title="My first React App"/>
            <Header title="Tarun Walia"/>
            <Footer year={y} company={c} />
            
            <card>
                <h2 class="Sund">Sundaramm</h2>
                <p>Description:</p>
                <p>Price:</p>
            </card>




        </>


    )
}

export default App