import logo from './logo.svg';
import './App.css';
import { Button } from './Button';

export default function Board() {
  return (
    <>
        <h1>Tic-Tac-Toe Game!</h1>
        <div className='board-row'>
          <Button />
          <Button />
          <Button />
        </div>
        <div className='board-row'>
          <Button />
          <Button />
          <Button />
        </div>
        <div className='board-row'>
          <Button />
          <Button />
          <Button />
        </div>
    </>
  );
}
