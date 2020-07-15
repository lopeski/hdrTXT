import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
// className="App-header"
const arrayGrande = ["algo"];
        // {conteúdo.map(item =>
//<Input type="text" id="fname" name="fname" onKeyDown={Preciosas}></Input>
  //      )}

const App = () => {
  const [conteúdo, setConteúdo] = useState(arrayGrande);

  const Preciosas = (evento) => {
    if (evento.key == "Enter") {
      incursao();
    }
  };
  const incursao = () => {
    setConteúdo(conteud => [...conteud,'outroalgo']);  }
  return (
    <div className="App">
      <div className="App-header">
        {conteúdo.map(item =>
          <Input type="text" id="fname" name="fname" onKeyDown={Preciosas}></Input>
        )}
       </div>
    </div>
  );
}


const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #000;
  background: #FFFF;
  border: none;
  border-radius: 3px;
`;

export default App;
