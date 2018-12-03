import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import theme from "theme"

export const ContactPanel = styled(Link)`
  display: flex;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.primary};
  text-decoration: none;
`
export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
`
