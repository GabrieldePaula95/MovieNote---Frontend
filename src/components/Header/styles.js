import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  gap: 64px;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 123px;

  > div {
    display: flex;

    button {
      position: relative;
      right: 99px;
      top: 10px;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      background: none;
      border: none;
      color: none;
    }
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;
    align-items: end;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-bottom: 15px;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS.PINK};
`
export const Search = styled.input`
  display: flex;
  flex: auto;
  margin: auto;

  height: 24px;
  padding: 24px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  align-items: flex-start;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;
  font-weight: 400;
`
