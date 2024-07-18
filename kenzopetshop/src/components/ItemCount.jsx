import { useEffect, useState } from "react"

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setitemStock] = useState(stock);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        if (contador <= itemStock) {
            setitemStock(itemStock - contador);
            setContador(1);
        } // se puede agregar un alert 
    }

    useEffect(() => {
        setitemStock(stock)
    }, [stock])

    return (
        <>
            <div className="container">
                <div className="row my-1">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-primary rounded-start-pill"onClick={decrementar}>-</button>
                            <button type="button" className="btn btn-primary">{contador}</button>
                            <button type="button" className="btn btn-primary rounded-end-pill" onClick={incrementar}>+</button>
                        </div>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col">
                        <button type="button" className="btn btn-primary rounded-pill" onClick={onAdd}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount
