import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  
`

export const Form = styled.form`
  padding: 0 8.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 > h1 {
  font-size: 3rem;
  color: ${({ theme }) => theme.COLORS.ORANGE};
 }

 > h2 {
  font-size: 1.5rem;
  margin: 3rem 0;
 }

 > p {
  font-size: 0.875rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
 }

 > a {
  margin-top: 7.75rem;
  color: ${({ theme }) => theme.COLORS.ORANGE};
 }

`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`

