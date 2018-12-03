import React from "react"
import { StyledInput } from "./styled"

const Input = ({ onChange, ...rest }) => (
  <StyledInput {...rest} onChange={e => onChange(e.target.value)} />
)
export default Input
