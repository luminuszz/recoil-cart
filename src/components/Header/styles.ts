import styled from 'styled-components'

export const Container = styled.header`
  width: 500px;
  height: 56px;
  padding: 16px 8px;
  display: flex;
  flex: 1;
  background: #ffff;
  filter: drop-shadow(0px 2px 4px rgba(38, 50, 56, 0.08));
`

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  strong {
    font-size: 20px;
    font-weight: bold;
    line-height: 26px;
  }
`
