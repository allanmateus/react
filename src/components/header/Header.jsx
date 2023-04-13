import { StyledHeader } from "./Header.style"
import { Link } from "react-router-dom"
export default function Header(){   
    return (
        <StyledHeader>
            <div className="logo">
            <Link to="/"><h2>Scar Store</h2></Link>
            </div>
            <nav className="menu">           
                <Link to="/produtos">Produtos</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/login">Login</Link>
            </nav>
        </StyledHeader>
    )
}

