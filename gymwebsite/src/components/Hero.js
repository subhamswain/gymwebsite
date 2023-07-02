import React from 'react';
import styled from 'styled-components';
import bg from "../assets/img_6.jpg"
import H1 from "./resusable/H1";
import Button from './resusable/Button';
import { Header } from './Header';

export const Hero = () => {
  return (
    <Main>
      <Header/>
      <Container>
        <RightBox>
          <HeroH1>
            "Take care of your <BodySpan>body</BodySpan>.<br/>
            It's the only place you have to <LiveSpan>live</LiveSpan>."
          </HeroH1>
          <Button>
            Join with us
          </Button>
        </RightBox>
        <LeftBox></LeftBox>
      </Container>
    </Main>
  )
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`;

const LeftBox = styled.div`
  width: 50%;
`;

const RightBox = styled.div`
  width: 50%;
  padding: 0px 100px;
`;

const HeroH1 = styled(H1)`
  color: white;
`;

const BodySpan = styled.span`
  color: red;
  white-space: nowrap;
`;

const LiveSpan = styled.span`
  color: red;
`;
