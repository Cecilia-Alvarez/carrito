import { useState } from 'react';
import TitleComponent from './TitleComponent';
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    const [name, setName] = useState('Diego');

    return ( 
        <div>
            <TitleComponent name={name}/>
            <ItemCount stock={5} initial={1}/>
        </div>
    );
}

export default ItemListContainer;