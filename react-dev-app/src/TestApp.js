import {useState} from 'react';
import {MyButton} from './Test.js';

export function TestApp(){
    const [counter, setCounter] = useState(0);
    function handleClick(){
        setCounter(counter + 1);
    }
    let content = "Priyanka";

    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ]

    const listItems = products.map(product =>
            <li key={product.id}> {product.title}</li>
        )

    
    return(
        <div>
            <h1 className='disp'>Hello {content}</h1>
            <ol style={{backgroundColor:'green', color:'yellowgreen'}}>{listItems}</ol>
            <h2>Passing Information using this.props.</h2>
            <MyButton counter={counter} onClick={handleClick}/>
            <MyButton counter={counter} onClick={handleClick}/>
        </div>
        
    )
}