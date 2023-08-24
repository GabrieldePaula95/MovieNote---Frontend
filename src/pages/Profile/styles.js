import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    padding: 0 144px;

    width: 100%;
    height: 144px;

    background: rgba(255, 133, 155, 0.05);

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;

      > svg {
        font-size: 16px;
        margin-right: 8px;
      }
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto 0;

  > div:nth-child(3) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -90px auto 64px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`
