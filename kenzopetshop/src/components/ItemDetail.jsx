import ItemCount from "./ItemCount"
import { CartContext } from "./Context/CartContext"
import { useContext } from "react"

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.title}</h1>
                    <p>${item.price}</p>
                    <div className="alert alert-light" role="alert">Hasta 6 cuotas sin interes</div>
                    <p>{item.description}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail