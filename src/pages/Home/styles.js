import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px 42px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: 40px 123px;   
    overflow-y: auto;   
`;

export const NewNote = styled.div`
    display: flex;
    justify-content: space-between;   
    margin: 40px 123px 0; 

    > h1 {

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

     
`;

export const Add = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        
    height: 40px;
    border: 0;
    padding: 0px 32px;
    border-radius: 10px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:disabled {
        opacity: 0.5;
    }

    > svg {
        font-size: 18px;
        margin-right: 8px;
    }
`;



