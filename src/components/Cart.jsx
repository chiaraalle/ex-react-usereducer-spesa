import { FaTrash } from "react-icons/fa";

function Cart( {cartItems, removeFromCart } ){

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0).toFixed(2); 
    };

    return (
        <>
        <div className="cart">
            <h2>Carrello</h2>
            {cartItems.length === 0 ? (
                <p>Il carrello è vuoto</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <p>Prezzo: {item.price}€</p>
                            <p>Quantità: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item)}>
                                <FaTrash style={{marginRight: '5px'}}/>
                                Rimuovi dal carrello
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <div className="cart-total">
            <h3>Totale da pagare: {calculateTotal()}€</h3>
         </div>
        </>
    )
}

export default Cart;