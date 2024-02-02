import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";
import FollowBtn from "../buttons/Button";

function Suggesstions() {
  return (
    <div className="suggestions">
      <div className="suggestions__titel">Vorschläge für dich</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">rick_sanchez</span>
              <span className="relation">Neu auf Instagram</span>
            </div>
          </div>
          <button className="follow__button">
            <FollowBtn />
            Folgen
          </button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>G</Avatar>
            </span>
            <div className="username__info">
              <span className="username">groot1337</span>
              <span className="relation">Neu auf Instagram</span>
            </div>
          </div>
          <button className="follow__button">Folgen</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>U</Avatar>
            </span>
            <div className="username__info">
              <span className="username">uwu_uwe</span>
              <span className="relation">Neu auf Instagram</span>
            </div>
          </div>
          <button className="follow__button">Folgen</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="username__info">
              <span className="username">crypto$bro$</span>
              <span className="relation">Neu auf Instagram</span>
            </div>

            {/* <button text={"Follow"} onClick={onClickFollow}>
              Follow
            </button> */}
          </div>
          <button className="follow__button">Folgen</button>
        </div>
      </div>
    </div>
  );
}

export default Suggesstions;

// rfce
