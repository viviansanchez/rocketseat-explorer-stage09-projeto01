import styled from 'styled-components'

export const Container = styled.span`
  font-size: 0.75rem;
  padding: 0.313rem 0.875rem;
  border-radius: 5px;
  margin-right: 0.375rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`