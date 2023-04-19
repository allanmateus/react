import { StyledHeader } from "./Header.style"
// import { Link } from "react-router-dom"

function Header(){   
    return (
        <StyledHeader className="max-w-full w-full min-w-full">
            <div className="container shadow-md py-5 px-10">
                <div className=" flex flex-row justify-between flex flex-row">
                    <div className="logo">
                        <a className="hover:text-blue-600" href="/inicial"><h2 id="logo-name">Scar Store</h2></a>
                    </div>  
                    <nav className="space-x-3">           
                        <a href="/produtos" className="hover:text-blue-600">Produtos</a>
                        <a href="/cadastro" className="hover:text-blue-600">Cadastro</a> 
                        <a href="/sobre" className="hover:text-blue-600">Sobre</a>           
                        <a href="/login" className="hover:text-blue-600">Login</a>
                    </nav>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header