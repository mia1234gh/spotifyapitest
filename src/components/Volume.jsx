import React from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { styled } from "styled-components";

const Volume = () => {
  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    await axios.get("https://api.spotify.com/v1/me/player/volume", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Container>
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  input {
    width: 15rem;
    border-radius: 2rem;
    height: 0.5rem;
  }
`;

export default Volume;
