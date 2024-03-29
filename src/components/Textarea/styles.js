import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 280px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: none;
  border-radius: 10px;
  padding: 12px;

  &placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
