import { StyledHeader } from "./Header.style"
function Header(){
    return (
        <StyledHeader>
            <div>
                <h2>Projeto React</h2>
            </div>
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

export default Header