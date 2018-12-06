import styled from "styled-components/macro"
import theme from "theme"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  button {
    margin-top: 200px;
  }
`
export const Label = styled.label`
  color: ${theme.colors.primary};
  margin-top: 25px;
  &:first-child {
    margin-top: 0;
  }
`
export const Error = styled.div`
  font-size: 14px;
  color: red;
`
