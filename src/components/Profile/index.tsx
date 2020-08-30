import React from 'react'

import avatar from '../../assets/Avatar.png'
import { Container, Avatar, ProfileDetails, ProfileOrder } from './styles'

const Profile: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <img src={avatar} alt="" />
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
