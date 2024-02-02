import { useState } from "react";
import styles from "./FollowButtons.modules.css";
import btntest from "../timeline/Suggesstions";

function FollowBtn() {
  const [isFollowing, setIsFollowing] = useState(false);

  function onClickFollow() {
    setIsFollowing(true);
  }

  function onClickUnfollow() {
    setIsFollowing(false);
  }

  if (isFollowing) {
    return (
      <button className={styles.follow__button} onClick={onClickUnfollow}>
        Gefolgt
      </button>
    );
  }

  return (
    <button className={btntest.Suggesstions} onClick={onClickFollow}>
      Folgen
    </button>
  );
}

export default FollowBtn;
