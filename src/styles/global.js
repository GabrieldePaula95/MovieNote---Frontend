import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};    
        
        -webkit-font-smoothing: antialiased;
    }

    
    main::-webkit-scrollbar {
        width: 8px;  
    }

    main::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};       
    }

    main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};    
        border-radius: 20px;      
    }

    border-style, input, button, textarea, p, Link {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

`