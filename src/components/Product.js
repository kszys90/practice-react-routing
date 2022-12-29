import React from "react"

export const Product = ({ product }) => {
    return (
        <ul>
            <li>Category: {product.category}</li>
            <li>Name: {product.name}</li>
            <li>Price: {product.price}</li>
            <li>Description: {product.description}</li>
        </ul>
    )
}