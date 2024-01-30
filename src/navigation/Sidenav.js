import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";

function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://png2.cleanpng.com/sh/916656337bbbcc3077e9972ffc7016d0/L0KzQYm3UsA3N5ZriZH0aYP2gLBuTfRiepwyi9HAbIOwebrwTfRmdZDzi598b4Xvg37pjP9wbJN0itDuLXTkgry0kB92dKQyhNHwbz33grL1kCBiepZzjJ95bnewRbKAWcZmbGNnTKZsM0mxRIGCVsc2OWg2TaMCOUC6Roe9V8M5PV91htk=/kisspng-dark-souls-iii-demons-souls-bloodborne-dark-souls-logo-transparent-png-5a796ed2b44c39.4096751715179076667385.png"
        alt=""
      />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>

        <button className="sidenav__button">
          <SearchIcon />
          <span>Suchen</span>
        </button>

        <button className="sidenav__button">
          <ExploreIcon />
          <span>Entdecken</span>
        </button>

        <button className="sidenav__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>

        <button className="sidenav__button">
          <ChatIcon />
          <span>Nachrichten</span>
        </button>

        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Benachrichtigungen</span>
        </button>

        <button className="sidenav__button">
          <AddCircleIcon />
          <span>Erstellen</span>
        </button>
      </div>

      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span>Mehr</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
