
export function MyButton({counter, onClick}){
return(
    <div>
       <button onClick={onClick}>Button Clicked {counter} times</button>
    </div>
    );
}