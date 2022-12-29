import React from "react"
import { NavLink } from 'react-router-dom'
import Task02 from "../../02/Task02"



export const Product = ({ product }) => {
    return (
        <ul>
            <li><NavLink to={`/task02/product-${product.id}`}>Name: {product.name}</NavLink></li>
            <li>Price: {product.price}</li>
            <li>Description: {product.description}</li>
            <li>Category: {product.category}</li>
        </ul>
    )
}