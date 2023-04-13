import React from "react";
import { useState } from "react";


function Inicial(){
    
    let [nome, setNome] = useState('user');
    const btn = document.getElementById("enviar");

    btn?.addEventListener("click", function(e){
        e.preventDefault();
        const name = document.getElementById("inputNome");
        const value = name.value;
        setNome(value);
    });
    
    return(
        <div>
            <div>
                <h1>Inicial</h1>
            </div>
            <div>
                <span>{nome}</span>
                <form action="">
                    <input type="text" name="inputNome" id="inputNome"/>
                    <input type="submit" id="enviar" value="Enviar"/>
                </form> 
            </div>
        </div>
    )
}

export default Inicial