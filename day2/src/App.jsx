// import './App.css'
// import Wrapper from './components/Wrapper'
// import UserCard from './components/UserCard'
// import EventToDo from './components/EventToDo'
// import Counter from './components/Counter'
// import Score from './components/Score'
// import Search from './components/Search'
// function App() {
//   // const users = [
//   //   {
//   //     name: 'Virat Kohli',
//   //     role: 'Batsman',
//   //     country: 'India'
//   //   },
//   //   {
//   //     name: 'MS Dhoni',
//   //     role: 'WK - Batsman',
//   //     country: 'India'
//   //   }
//   // ]
//   return (
//     <>


//       {/* <h1>My To Do List</h1> */}
//       {/* <Search /> */}
//       {/* <Score /> */}
//       {/* <Counter /> */}
//       {/* <EventToDo /> */}
//       {/* <Wrapper title = "Users List">
//         {
//           users.map((use,index) => (<UserCard key = {index} user={use}/>))
//         }
//       </Wrapper> */}
//     </>
//   )
// }

// export default App



//newApp
//import './App.css'
import { useState } from 'react'
import Header from './newComponents/Header'
import ProductCard from './newComponents/ProductCard'
import ProductList from './newComponents/ProductList'
import Cart from './newComponents/Cart'
export default function App(){
  function addToCart(product){
    setCart([...cart, product])
    setAmt(totalAmt+product.price)
  }

  function removeFrontCart() {
    setCart([...cart, product])
    setAmt(totalAmt-product.price)
  
}


  const [cart, setCart] = useState([])
  const [totalAmt, setAmt] = useState(0);
  const products = [
    {
      id: 1,
      name: "laptop",
      price: 100000,
      image: "https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500"
    },
    {
      id: 2,
      name: "mobile",
      price: 50000,
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 3,
      name: "watch",
      price: 20000,
      image: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.titan.co.in%2Fproduct%2Ftitan-black-dial-analog-with-date-watch-for-men-1805qm04.html%3Fsrsltid%3DAfmBOoop3At05jxp4AuiAo6ZZGt8bth9jpWxCfRm5MVI8yh_l_dmMRLm&ved=0CBYQjRxqFwoTCMCyuYSs5ZIDFQAAAAAdAAAAABAI&opi=89978449"
    }
  ]

  return(
    <div>
      <Header cartCount={cart.length}/>
      <ProductList products={products} addToCart={addToCart} />
      <cart totalAmt={totalAmt}/>
    </div>
  )
}