import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';
import { Route, useHistory, Redirect } from 'react-router-dom'



const Task04 = () => {
    const history = useHistory()

    const handleClick = (e) => {
        const filters = e.target.value
        history.push(`/task04/${filters}`)
    }
    return (
        <>
            <h1>Task04</h1>
            <select name="filter" onClick={handleClick}>
                <option value='price-asc'>Ascending</option>
                <option value='price-dsc'>Descending</option>
            </select>
            <Route path="/task04/price-asc">
                <Shop items={[...products].sort((a, b) => a.price - b.price)} />
            </Route>
            <Route path="/task04/price-dsc">
                <Shop items={[...products].sort((a, b) => b.price - a.price)} />
            </Route>
        </>
    );
}

export default Task04;

