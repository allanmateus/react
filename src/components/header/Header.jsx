import { StyledHeader } from "./Header.style"
import { Link } from "react-router-dom"
export default function Header(){   
    return (
        <StyledHeader>
            <div className="logo">
            <Link to="/"><h2>Scar Store</h2></Link>
            </div>
            <nav className="menu">           
                <Link to="/produtos"><span>Produtos</span></Link>
                <Link to="/cadastro"><span>Cadastro</span></Link>
                <Link to="/sobre"><span>Sobre</span></Link>
                <Link to="/login"><span>Login</span></Link>
            </nav>
        </StyledHeader>
    )
}

