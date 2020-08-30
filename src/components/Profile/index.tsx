import React from 'react'

import avatar from '../../assets/Avatar.png'
import { Container, Avatar, ProfileDetails, ProfileOrder } from './styles'

const Profile: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <img
          src="https://avatars2.githubusercontent.com/u/48535259?s=460&u=06d85ab11a1bdb43207be7c6b2a2c491a48ca0b2&v=4"
          alt=""
        />
      </Avatar>

      <ProfileDetails>
        <ProfileOrder>
          <span>Orders</span>
          <strong>1342</strong>
        </ProfileOrder>
        <ProfileOrder>
          <span>Orders</span>
          <strong>1342</strong>
        </ProfileOrder>
        <ProfileOrder>
          <span>Orders</span>
          <strong>1342</strong>
        </ProfileOrder>
      </ProfileDetails>
    </Container>
  )
}

export default Profile
