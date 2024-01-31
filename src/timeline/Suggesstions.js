import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";

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
              <span className="username">firstuser_</span>
              <span className="relation">Neu auf Instagram</span>
            </div>
          </div>
          <button className="follow__button">Folgen</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">firstuser_</span>
              <span className="relation">Neu auf Instagram</span>
            </div>
          </div>
          <button className="follow__button">Folgen</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">firstuser_</span>
              <span className="relation">Neu auf Instagram</span>
            </div>
          </div>
          <button className="follow__button">Folgen</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">firstuser_</span>
              <span className="relation">Neu auf Instagram</span>
            </div>
          </div>
          <button className="follow__button">Folgen</button>
        </div>
      </div>
    </div>
  );
}

export default Suggesstions;

// rfce
