import './App.css';
import { useState } from 'react';
import { MyButton } from './MyButton';

export default function App(){
    const [counter, setCounter] = useState(0);

    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
      ];

    let listItems = products.map(product =>
        <li key={product.id}
        style={{
            color: product.isFruit ? 'green' : 'blue',
            backgroundColor: 'lightblue',
        }}
        >
            {product.title}</li>
    );

    let name = 'Priyanka';

    function handleClick(){
        setCounter(counter + 1);
    }

    return(
        <div className='App'>
            <h1>Hello {name}</h1>
            <MyButton counter1={counter} onClick={handleClick}/>
            <MyButton counter1={counter} onClick={handleClick}/>
            <ol>{listItems}</ol>
        </div>
    );
}