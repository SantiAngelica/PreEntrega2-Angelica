import data from "../assets/products.json"
import React, { useState } from 'react';
import ItemList from "./ItemList";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }
    pedirProductos()
        .then((res) => {
            setProductos(res)
        })
    return(
        <div className="container card-box">
            { <ItemList productos={productos}/> }
        </div>
    )
}
export default ItemListContainer