import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const { cart, clear, totalProducts, sumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        if (nombre == "") {
            return false;
        }

        if (email == "") {
            return false;
        }

        if (telefono == "") {
            return false;
        }

        const fecha = new Date();

        const order = {
            buyer:{name:nombre, phone:telefono, email:email},
            items:cart.map (item => ({id:item.id, title:item.title, price:item.price})),
            date:`${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total:sumProducts()
        }
        
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(response => {
            setOrderId(response.id);
            clear();
        }) 

    }

    if (totalProducts() == 0 && orderId) {
        return (
            <div className="container my-5">
                <div className="row my-5">
                    <div className="col text-center">
                        {orderId ? <div className="alert alert-light" role="alert">
                            <p><img src="/cart4.svg" alt="carrito" width={60} /></p>
                            <h3>Gracias por tu compra</h3>
                            <p>Tu numero de orden es: <b>{orderId}</b></p>
                            <Link to={"/"} className="btn btn-primary rounded-pill mt-5">Volver al Inicio</Link>
                        </div> : ""}
                    </div>
                </div>
            </div> 
        )
    }

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
    } else {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Telefono</label>
                                <input type="text" className="form-control"onInput={(e) => {setTelefono(e.target.value)}} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                        </form>
                    </div>
                    <div className="col">
                        <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.image} alt={item.title} width={80} /></td>
                                        <td className="align-middle">{item.title}</td>
                                        <td className="align-middle text-center">${item.price} X {item.quantity}</td>
                                        <td className="align-middle text-center">${item.price * item.quantity}</td>
                                    </tr>
                                ))}
                                    <tr>
                                        <td className="align-middle text-center" colSpan={3}>Total a Pagar</td>
                                        <td className="align-middle text-center">${sumProducts()}</td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout
