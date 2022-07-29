import React from 'react';
import Board from './components/Board';
import Card from './components/Card';
import "./assets/App.css"
import DropFileInput from './components/drop-file-input/DropFileInput';

function App() {
  const onFileChange = (files) => {
    console.log(files);
  }


  return (
    <div className="App">
      <div className="box">
        <h2 className="header">
          Drop here
        </h2>
        <DropFileInput>
          onFileChange={(files) => onFileChange(files)}
        </DropFileInput>
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


function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

const output = makeid(32);
console.log(output);

function parseBirthday(remarkString) {
  var regex = /year(?<year>\d{4})|month(?<month>\d{1,2})|day(?<day>\d{1,2})/gm;

  let m;
  var matches = [];
  var formattedDate = '';

  while ((m = regex.exec(remarkString)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    // console.log(m.input)
    let str = m.input
    let matches = str.match(/\d+/g);
    console.log(matches);


    // for (let i = 0; i < str.length; i++) {
    //   const str = array[i];
    //   console.log(str )
    // }

    if (matches.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    formattedDate += matches[1];
  }

  return formattedDate;
}
