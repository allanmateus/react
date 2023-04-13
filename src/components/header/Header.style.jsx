import  styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
    background-color: #f3eff3;
    padding-inline: 4em;
    height: 4em;
    color: black;    
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    
    a{
        text-decoration: none;
        color: black;
    }

    a:hover{
        color:  #3914ce;
        font-style: italic;
        cursor: pointer;
        transition: 0.10s;
        text-decoration: none;
        
    }

    nav{
        display:flex;
        flex-direction: row;
        gap: 1em;
        list-style-type: none;
        cursor: pointer;
        text-decoration: none;
    }

    nav span:hover{
        color:  #3914ce;
        transition: 0.8s;
        font-style: italic;
        text-decoration: none;
    }
`
