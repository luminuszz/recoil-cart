import styled from 'styled-components'

import image from '../../assets/Image.png'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 500px;
  height: 200px;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
    url(${image}) no-repeat;

  background-size: cover;
`

export const Avatar = styled.div`
  margin-top: 32px;

  > img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
  }
`

export const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  justify-content: space-around;
  padding: 0 32px;
`

export const ProfileOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > span {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.54);
    line-height: 15px;
  }

  > strong {
    font-size: 24px;
    line-height: 31px;
    color: rgba(0, 0, 0, 0.87);
  }

  & + div {
    margin-left: 16px;
  }
`
