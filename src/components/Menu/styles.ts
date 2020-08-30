import styled, { css } from 'styled-components'

interface MenuActionProps {
  isSelectd?: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  background: #ffff;
`

export const MenuAction = styled.div<MenuActionProps>`
  padding: 15px 15px;
  position: relative;

  > button {
    border: 0;
    outline: 0;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 18px;
    font-weight: ${props => (props.isSelectd ? 'bold' : 500)};
    background: #ffff;

    color: rgba(0, 0, 0, 0.87);

    &:active {
      font-weight: bold;
    }
  }

  ${props =>
    props.isSelectd &&
    css`
      border-bottom: 5px solid;
      border-color: #1be1af;
      box-shadow: 0px 4px 8px rgba(38, 50, 56, 0.08);

      }
    `}
`
