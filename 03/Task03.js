import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';
import { Route, useParams, Redirect } from 'react-router-dom'

const SelectedCategory = () => {
    const { category } = useParams()
    const categoryItems = products.filter(p => category.toLowerCase() === p.category.toLowerCase())
    return (categoryItems.length > 0 ? <Shop items={categoryItems} /> : <Redirect to="/404" />)
}

const Task03 = () => {
    return (
        <>
            <h1>Task03</h1>
            <Route exact path="/task03">
                <Shop items={products} />
            </Route>
            <Route path="/task03/:category">
                <SelectedCategory />
            </Route>
        </>
    );
}

export default Task03;

