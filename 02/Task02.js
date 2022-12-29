import React from 'react'
import products from '../src/products.json'
import { Product } from '../src/components/Product'
import { Route, NavLink, useParams, Redirect } from 'react-router-dom'

const RenderProduct = () => {
    const { id } = useParams()
    const [product = null] = products.filter(p => p.id === Number(id))
    return (product ? <Product product={product} /> : <Redirect to="/404" />)
}
const Task02 = () => {

    return (
        <>
            <h1>Task02</h1>
            <Route path="/task02/product-:id">
                <RenderProduct />
            </Route>

        </>
    );
}

export default Task02;

