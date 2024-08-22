import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    //Importar 
    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");
        
    //     arrayProdutos.forEach(item => {
    //         addDoc(itemsCollection, item)
    //     })

    //     console.log("finalizado");
    // }, [])

    //Acceder con Consultas
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(q).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})));
            } else {
                console.log("Error");
            }
        })
    }, [id])


    return (
        <>
            {id ? "" : <Carousel/>}
            <div className="container">
                <div className="row">
                    <ItemList items={items} />
                </div>
            </div>
        </>
        
    )
}

export default ItemListContainer