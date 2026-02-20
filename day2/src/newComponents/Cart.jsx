export default function Cart({ totalAmt,cart,removeFromCart }) {
    return (
        <div>
            <h2>Your cart:</h2>
            {Cart.map((element, index) => <span>{ ProductCard.name}</span>)}
            <button onClick={() => { removeFromCart }}></button>
            <h3>total cart amount:{ totalAmt}</h3>
        </div>
    )
}