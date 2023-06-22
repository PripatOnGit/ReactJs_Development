import './App';

export function MyButton({counter1 , onClick}){
    return(
            <button onClick={onClick}>Button Clicked {counter1} times!</button>
    );
}