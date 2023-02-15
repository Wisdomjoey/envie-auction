import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SpinnerC = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 7px solid lightgray;
  border-top: 7px solid blue;
  animation: spinner 1.5s linear infinite;
`

export default function Spinner() {
  return (
    <Container>
      <SpinnerC></SpinnerC>
    </Container>
  )
}
