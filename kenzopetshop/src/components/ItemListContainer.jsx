import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import arrayProdutos from "../assets/json/productos.json";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout (() => {
                resolve(id ? arrayProdutos.filter(item => item.category == id) : arrayProdutos)
            },2000)
        })

        promesa.then(response =>{
            setItems(response)
        })
    }, [id])

    return (
        <>
            {id ? "" : <Carousel/>}
            <div className="container">
                <div className="row">
                    <ItemList items={items}/>
                </div>
            </div>
        </>
        
    )
}

export default ItemListContainer