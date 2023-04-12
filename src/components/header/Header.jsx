import { useState } from "react"
import { StyledHeader } from "./Header.style"
export default function Header(){
    let [nome, setNome] = useState("user");
    let nomeAtual = document.getElementById("inputNome");
    return (
        <StyledHeader>
            <div className="logo">
                <h2>Scar Store</h2>
            </div>
            <span>{nome}</span>
           <form>
                <input type="text" name="inputNome" id="inputNome"/>
                <button onClick={()=>setNome(nomeAtual.value)}>Submit</button>
           </form>
            <nav>
                <ul>
                    <li>Produtos</li>
                    <li>Cadastro</li>
                    <li>Sobre</li>
                    <li>Perfil</li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

