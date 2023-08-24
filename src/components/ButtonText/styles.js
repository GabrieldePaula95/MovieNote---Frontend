import styled from 'styled-components'

export const Container = styled.button`
  display: flex;

  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.PINK};
  background: none;
  border: none;

  height: 21px;
  margin-bottom: 24px;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 8px;
    font-size: 16px;
  }
`
