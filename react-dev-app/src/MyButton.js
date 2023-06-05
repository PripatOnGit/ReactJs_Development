import './App';

export function MyButton({counter , onClick}){
    return(
            <button onClick={onClick}>Button Clicked {counter} times!</button>
    );
}