import styled from 'styled-components'

export const Container = styled.span`
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
`
