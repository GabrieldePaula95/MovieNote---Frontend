import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
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

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    background-color: rgba(255, 133, 155, 0.05);
    padding: 32px;
    border-radius: 16px;
    margin-top: 40px;
`;

export const Rating = styled.button`
    display: flex;

    background: none;
    height: 40px;
    border: none;    
    size: 20px;

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 12px;
        margin-right: 6px;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical; 
    margin-bottom: 15px;
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
`;