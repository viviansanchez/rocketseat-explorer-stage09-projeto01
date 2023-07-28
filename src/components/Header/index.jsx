import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { useNavigate } from 'react-router-dom'

export function Header(){
  const { SignOut, user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const navigate = useNavigate()

  function handleSignOut() {
    SignOut()
    navigate("/")
  }

  return(
    <Container>
      <Profile to="/profile">
        <img 
          src={avatarUrl}
          alt={user.name}
        />

        <div>
          <span>Bem vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}