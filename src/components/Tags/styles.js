import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    flex-direction: row;

    padding: 5px 16px;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    width: fit-content;
    border: none;

    margin-right: 8px;

    color: ${({ theme }) => theme.COLORS.GRAY_50};
    text-align: center;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`;