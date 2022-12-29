import React from 'react'
import products from '../src/products.json'
import { Route, NavLink, useParams, Redirect } from 'react-router-dom'

const Product = () => {
    const { id } = useParams()
    const [product = null] = products.filter(p => p.id === Number(id))
    return (
        product ? (
            <ul>
                <li>Category: {product.category}</li>
                <li>Name: {product.name}</li>
                <li>Price: {product.price}</li>
                <li>Description: {product.description}</li>
            </ul>
        )
            :
            <Redirect to="/404" />
    )
}


const Task02 = () => {

    return (
        <>
            <h1>Task02</h1>
            <Route path="/task02/product-:id">
                <Product />
            </Route>

        </>
    );
}

export default Task02;

