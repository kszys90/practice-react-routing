import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';
import { Route, useHistory, Redirect, useParams } from 'react-router-dom'

const SearchPage = () => {
    const { minPrice, maxPrice, searchedPhrase } = useParams()
    console.log(searchedPhrase)
    const minPriceNumber = Number(minPrice)
    const maxPriceNumber = Number(maxPrice)
    const filterMin = !Number.isNaN(minPriceNumber) ? products.filter(p => p.price >= minPriceNumber) : products
    const filterMax = !Number.isNaN(maxPriceNumber) ? filterMin.filter(p => p.price <= maxPriceNumber) : filterMin
    const filterPhrase = searchedPhrase !== undefined ? filterMax.filter(p => p.name.toLowerCase().includes(searchedPhrase.toLowerCase()) || p.description.toLowerCase().includes(searchedPhrase.toLowerCase())) : filterMax

    return (<Shop items={filterPhrase} />)
}

const Task05 = () => {
    const history = useHistory()
    const initSearch = {
        text: '',
        minPrice: '',
        maxPrice: ''
    }
    const [result, setResult] = React.useState(initSearch)

    function handleChange(e) {
        const value = e.target.value
        const name = e.target.name
        setResult((state) => {
            return ({ ...state, [name]: value })
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        history.push(`/task05/${result.minPrice},${result.maxPrice}-${result.text}`)
    }

    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Searched phrase: </label>
                    <input onChange={handleChange} name="text" value={result.text} />
                </div>
                <div>
                    <label>Min Price: </label>
                    <input onChange={handleChange} name="minPrice" value={result.minPrice} />
                </div>
                <div>
                    <label>Max Price: </label>
                    <input onChange={handleChange} name="maxPrice" value={result.maxPrice} />
                </div>
                <div><input type="submit" /></div>
            </form>
            <div>

            </div>
            <Route path="/task05/:minPrice?,:maxPrice?-:searchedPhrase?">
                <SearchPage></SearchPage>
            </Route>
        </>
    );
}

export default Task05;

