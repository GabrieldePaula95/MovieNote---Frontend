import styled from 'styled-components';

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
export const Name = styled.div`
    display: flex; 
    align-items: baseline;
    height: 47px;  
    margin-bottom: 24px;

    > h1 {
        margin-right: 20px;
        font-size: 36px;
        font-weight: 500;
        text-align: center;
        line-height: normal;        
        height: 40px;
    }
`;
export const Rating = styled.button`
    display: flex;

    background: none;
    height: 40px;
    border: none;    
    size: 20px;

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 25px;
        margin-right: 10px;
    }
`;

export const Section = styled.div`
    display: flex;
    margin-bottom: 40px;
    align-items: center;

    > img {
        border-radius: 50%;
        width: 16px;
        height: 16px;
    }
    > p {
        margin-left: 8px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: justify;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px;
        margin-left: 8px;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
`;
