import React from 'react';
import Board from './components/Board';
import Card from './components/Card';
import "./assets/App.css"
import DropFileInput from './components/drop-file-input/DropFileInput';

function App() {
  return (
    <div className="App">
      <div className="box">
        <h2 className="header">
          Drop here
        </h2>
        <DropFileInput />
      </div>


      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </Board>

      </main>
    </div>
  );
}

export default App;
