import React from "react";
import CurrentTrack from "./CurrentTrack";
import PlayerControls from "./PlayerControls";
import Volume from "./Volume";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  background-color: #181818;
  border-top: 1px solid #282828;
`;

export default Footer;
