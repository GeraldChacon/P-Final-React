import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {
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
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail