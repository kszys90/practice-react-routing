import React from 'react';
import Home from '../src/components/Home'
import Contact from '../src/components/Contact'
import { Route, NavLink } from 'react-router-dom'

const Task01 = () => {
    return (
        <>
            <h1>Task01</h1>
            <div>
                <p>
                    <NavLink activeStyle={{ fontWeight: 700 }} to="/task01/home"> Home</NavLink>
                </p>
                <p>
                    <NavLink activeStyle={{ fontWeight: 700 }} to="/task01/contact"> Contact</NavLink>
                </p>
            </div>
            <Route path="/task01/home">
                <Home />
            </Route>
            <Route path="/task01/contact">
                <Contact />
            </Route>
        </>
    );
}

export default Task01;

