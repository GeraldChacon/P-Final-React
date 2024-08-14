import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalProducts} = useContext(CartContext);

    if(totalProducts() > 0) {
        return (
            <Link to={"/cart"}>
                <button type="button" className="btn btn-primary position-relative">
                    <img src="/cart4.svg" alt="Carrito" width={20}/> 
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts()}</span>
                    {/* <span className="visually-hidden">unread messages</span> */}
                </button>
            </Link>
        )
    }
}

export default CartWidget