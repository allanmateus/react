import './App.css';
// import { useState } from "react";
import Header from './components/header/Header';
import { Outlet } from "react-router-dom";

// import {StyledHeader} from './components/header/Header.style'
function App() {
  // let [nome, setNome] = useState('user');
  // const btn = document.getElementById("enviar");
  // btn.addEventListener("click", function(e){
  //   e.preventDefault();
  //   const name = document.getElementById("inputNome");
  //   const value = name.value;
  //   setNome(value);
  // });
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      {/* <span>{nome}</span>
      <form action="">
        <input type="text" name="inputNome" id="inputNome"/>
        <input type="submit" id="enviar" value="Enviar"/>
      </form> */}
    </div>
  );
}

export default App;
