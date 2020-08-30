import styled from 'styled-components'

export const Container = styled.div`
  width: 360px;
  height: 64px;
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #eceff1;
`

export const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.54);
    line-height: 18px;
  }
`

export const ClearButton = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 500;
`
