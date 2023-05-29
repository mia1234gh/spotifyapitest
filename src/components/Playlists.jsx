import React, { useEffect } from "react";
import axios from "axios";
import { reducerCase } from "./../utils/Constants";
import { useStateProvider } from "./../utils/StateProvider";
import { styled } from "styled-components";

const Playlists = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlayListsData = async () => {
      const response = await axios.get(
        " https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            // bearer后需要加空格,如果用+拼接，空格难处理
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCase.SET_PLAYLISTS, playlists });
    };
    getPlayListsData();
  }, [token, dispatch]);

  const handleClickChange = (selectedPlaylistId) => {
    dispatch({ type: reducerCase.SET_PLAYLIST_ID, selectedPlaylistId });
  };
  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => {
          return (
            <li key={id} onClick={() => handleClickChange(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  color: #b3b3b3;
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55%;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        color: white;
      }
    }
  }
`;

export default Playlists;
