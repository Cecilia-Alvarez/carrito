import React from 'react';
import Item from './Item';

const ItemLoader = () => {
    return (
        <>
        <div className="ui grid">
            {
                [new Array(3)].map((_, index) => (
                    <div className="three wide column" key={index}>
                        <Item item={{
                            id:0,
                            title:'Cargando...',
                            image:'http://i.stack.imgur.com/ATB3o.gif',
                            price:'',
                            category:'',
                            stock:'',
                            description:'',
                        }} />
                    </div>
                    ))
                }
        </div>
        </>
    )
}
export default ItemLoader;