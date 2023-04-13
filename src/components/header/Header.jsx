import { StyledHeader } from "./Header.style"
// import { Link } from "react-router-dom"

function Header(){   
    return (
        <StyledHeader>
            <div className="logo">
                {/* <StyledLink to="/inicial" id="ln"><h2 id="logo-name">Scar Store</h2></StyledLink>  */}
                <a href="/inicial"><h2 id="logo-name">Scar Store</h2></a>
            </div>
            <nav className="menu">           
                {/* <span><StyledLink to="/produtos">Produtos</StyledLink></span>
                <span><StyledLink to="/cadastro">Cadastro</StyledLink></span> 
                <span><StyledLink to="/sobre">Sobre</StyledLink></span>           
                <span><StyledLink to="/login">Login</StyledLink></span>        */}

                <a href="/produtos">Produtos</a>
                <a href="/cadastro">Cadastro</a> 
                <a href="/sobre">Sobre</a>           
                <a href="/login">Login</a>

            </nav>
        </StyledHeader>
    )
}

export default Header