import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isNew }) => $isNew ? "black" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.WHITE}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            size: 20px;
        }
    }
        
    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

         color: ${({ theme }) => theme.COLORS.WHITE};
         background: transparent;

         border: none;

         &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            
         }
    }
`;