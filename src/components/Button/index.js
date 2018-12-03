import React from "react"
import { StyledButton } from "./styled"

const Button = p => <StyledButton {...p}>{p.text}</StyledButton>
export default Button
