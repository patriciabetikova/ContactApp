import styled from "styled-components/macro"
import { Body } from "styled/Body"
import { Subtitle, Text } from "styled/Typography"
import theme from "theme"

export const OrdersBody = styled(Body)`
  padding-top: 120px;
`

export const Contact = styled.div`
  padding: 10px 25px;
  height: 60px;
  position: fixed;
  top: 60px;
  width: 100%;
  background: rgb(177, 63, 89);
`
export const ContactSubtitle = styled(Subtitle)`
color:#581f2c;
  /* color: ${theme.colors.primary}; */
`
export const ContactText = styled(Text)`
  color: ${theme.colors.secondary};
`
export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55px;
  margin: 0;
  border-bottom: 1px solid ${theme.colors.primary};
`
