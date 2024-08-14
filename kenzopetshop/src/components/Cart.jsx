import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, removeItem, clear, totalProducts, sumProducts} = useContext(CartContext);

    if (totalProducts() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p><img src="/cart4.svg" alt="carrito" width={60} /></p>
                        <h1>Tu carrito esta vacio</h1>
                        <h4>Te ayudamos a encontrar lo que buscas</h4>
                        <Link to={"/"} className="btn btn-primary rounded-pill mt-5">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={5} className="text-end"><button className="btn btn-light" title="Vaciar Carrito">Vaciar Carrito<img src="trash-fill.svg" alt="Eliminar Producto" width={24} onClick={clear}/></button></td>  
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.title} width={80} /></td>
                                    <td className="align-middle">{item.title}</td>
                                    <td className="align-middle text-center">${item.price} X {item.quantity}</td>
                                    <td className="align-middle text-center">${item.price * item.quantity}</td>
                                    <td className="align-middle text-end"><button className="btn btn-light" title="Eliminar Producto">
                                            <img src="trash-fill.svg" alt="Eliminar Producto" width={24} onClick={() => {removeItem(item.id)}}/>
                                        </button>
                                    </td>    
                                </tr>
                            ))}
                            <tr>
                            <td className="align-middle text-center" colSpan={3}>Total a Pagar</td>
                            <td className="align-middle text-center">${sumProducts()}</td>
                            <td className="align-middle text-center">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart