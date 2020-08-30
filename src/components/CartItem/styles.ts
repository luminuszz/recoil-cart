import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 56px;
  padding: 16px 16px;
  margin-top: 8px;
`

export const CartImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #7c4dff;
`

export const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  > strong {
    font-size: 18px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
    line-height: 21px;
  }

  > span {
    font-size: 16px;
    line-height: 18px;
    color: #2c9611;
  }
`
