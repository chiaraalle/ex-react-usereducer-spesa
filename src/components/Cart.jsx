

function Cart( {cartItems} ){
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
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    )
}

export default Cart;