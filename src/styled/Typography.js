import styled from "styled-components/macro"

export const Text = styled.p`
  margin: 0;

  color: black;
  font-size: ${p => p.fs || 15}px;
`

export const Subtitle = styled.h4`
  margin: 0;
  color: black;
`
