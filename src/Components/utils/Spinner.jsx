import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  position: fixed;
  height: 100vh;
  display: flex;
  background: white;
  align-items: center;
  justify-content: center;
  z-index: 300;
`
const SpinnerC = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 5px solid lightgray;
  border-top: 5px solid blue;
  animation: spinner 1.5s linear infinite;
`

export default function Spinner({show}) {
  return (
    <Container style={{display: show ? 'flex' : 'none'}}>
      <SpinnerC></SpinnerC>
    </Container>
  )
}
