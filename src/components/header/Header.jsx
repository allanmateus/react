import { StyledHeader } from "./Header.style"
// import { Link } from "react-router-dom"

function Header(){   
    return (
        <StyledHeader className="p-5 flex flex-row justify-between w-screen  h-2/6">
            <div className="logo">
                <a className="" href="/inicial"><h2 id="logo-name">Scar Store</h2></a>
            </div>
            <nav className="space-x-3">           
                <a href="/produtos">Produtos</a>
                <a href="/cadastro">Cadastro</a> 
                <a href="/sobre">Sobre</a>           
                <a href="/login">Login</a>
            </nav>
        </StyledHeader>
    )
}

export default Header