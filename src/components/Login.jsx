import React from "react";
import Logo from "../assets/Spotify_Logo_RGB_Black.png";
import { styled } from "styled-components";

const Login = () => {
  const handleClick = async () => {
    const clientId = "4f856e935afa46a989aa467d7e818f6c";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      " user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <button onClick={handleClick}>进入</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

export default Login;
