import React from "react";
import { styled } from "styled-components";
import Logo from "../assets/Spotify_Logo_RGB_White.png";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdLibraryMusic } from "react-icons/md";
import Playlists from "./Playlists";

const Sidebar = () => {
  return (
    <Container>
      <div className="top_links">
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        {/* items */}
        <ul>
          <li>
            <AiOutlineHome />
            <span>主页</span>
          </li>
          <li>
            <AiOutlineSearch />
            <span>搜索</span>
          </li>
          <li>
            <MdLibraryMusic />
            <span>我的</span>
          </li>
        </ul>
      </div>

      {/* playlists */}
      <Playlists />
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .top_links {
    display: flex;
    flex-direction: column;
  }
  .logo {
    margin: 1rem 0;
    text-align: center;
    img {
      max-inline-size: 80%;
      block-size: auto;
    }
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    li {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        color: white;
      }
    }
  }
`;

export default Sidebar;
