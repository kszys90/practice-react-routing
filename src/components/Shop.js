import React from 'react';
import { Product } from './Product';

const Shop = (props) => {
    return (
        <section>
            {props.items.map(p => <Product product={p} key={p.id} />)}
        </section>
    );
}

export default Shop;