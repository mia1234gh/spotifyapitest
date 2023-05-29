import React from "react";
import { styled } from "styled-components";
import {
  BsShuffle,
  BsRepeat,
  BsPlayCircleFill,
  BsPauseCircleFill,
} from "react-icons/bs";
import { CgPlayTrackPrevR, CgPlayTrackNextR } from "react-icons/cg";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCase } from "../utils/Constants";

const PlayerControls = () => {
  const [{ token, playerState }, dispatch] = useStateProvider();

  const changeState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: reducerCase.SET_PLAYER_STATE, playerState: !playerState });
  };

  const changeTrack = async (type) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: reducerCase.SET_PLAYER_STATE, playerState: true });
    const response1 = await axios.get(
      `https://api.spotify.com/v1/me/player/currently-playing`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response1.data !== "") {
      const currentPlaying = {
        id: response1.data.item.id,
        name: response1.data.item.name,
        artists: response1.data.item.artists.map((artist) => artist.name),
        image: response1.data.item.album.images[2].url,
      };
      dispatch({ type: reducerCase.SET_PLAYING, currentPlaying });
    } else {
      dispatch({ type: reducerCase.SET_PLAYING, currentPlaying: null });
    }
  };

  return (
    <Container>
      <div className="shuffle">
        <BsShuffle />
      </div>

      <div className="prev">
        <CgPlayTrackPrevR onClick={() => changeTrack("previous")} />
      </div>
      {/* state */}
      <div className="state">
        {playerState ? (
          <BsPauseCircleFill onClick={changeState} />
        ) : (
          <BsPlayCircleFill onClick={changeState} />
        )}
      </div>
      <div className="next">
        <CgPlayTrackNextR onClick={() => changeTrack("next")} />
      </div>

      <div className="repeat">
        <BsRepeat />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  svg {
    color: #b3b3b3;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }
  .state {
    svg {
      color: white;
    }
  }

  .prev,
  .next,
  .state {
    font-size: 2rem;
  }
`;

export default PlayerControls;
