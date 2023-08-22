import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: rgba(255, 133, 155, 0.05);
    padding: 32px;
    border-radius: 16px;
    margin-top: 40px;
    border: none;
    cursor: pointer;

    &:hover{
        filter: brightness(0.9);
    }

    > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; // Quantidade de linhas
        -webkit-box-orient: vertical; 
        margin-bottom: 15px;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 15px;
    }
`;