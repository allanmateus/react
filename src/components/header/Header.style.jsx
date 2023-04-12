import  styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: #d4cfd4;
    padding-inline: 4em;
    height: 4em;
    color: black;    
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
  
    .logo:hover{
        color:  #3914ce;
        font-style: italic;
        cursor: pointer;
        transition: 0.10s;
    }

    ul{
        display:flex;
        flex-direction: row;
        gap: 1em;
        list-style-type: none;
        cursor: pointer;
    }

    ul li:hover{
        color:  #3914ce;
        transition: 0.8s;
        font-style: italic;
    }
`

