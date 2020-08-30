import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 500px;
  height: 56px;
  background: #ffff;
  padding: 15px 24px;
`

export const SidebarContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;

  > button {
    outline: 0;
    border: 0;
    background: #fff;

    cursor: pointer;

    > img {
      width: 30px;
      height: 30px;
    }

    &:active,
    &:hover {
      opacity: 0.7;
    }
  }
`
