import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import theme from "theme"

export const Navbar = styled.nav`
  display: flex;
  background: ${theme.colors.primary};
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  color: ${theme.colors.secondary};
`
export const NavbarTitle = styled.h3`
  font-weight: bold;
`
export const NavbarIconLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.secondary};
  border: 1px solid white;
  font-weight: bold;
  font-size: 30px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 38px;
`
