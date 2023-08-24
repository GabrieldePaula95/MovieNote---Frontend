import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    margin: 40px 123px;
    overflow-y: auto;

    > a {
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
    }
  }
`

export const Form = styled.form`
  margin: auto;

  > div {
    display: flex;
    gap: 40px;
    height: 55px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  > h2 {
    margin-top: 40px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
  }
`

export const Section = styled.section`
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  gap: 24px;

  background-color: black;
  padding: 16px;
  border: none;
  border-radius: 10px;
`
