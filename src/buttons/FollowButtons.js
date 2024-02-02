import { useState } from "react";
import styles from "./FollowButtons.modules.css";

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
      <button
        className={styles.follow__button}
        style={{ backgroundColor: "white" }}
        onClick={onClickUnfollow}
      >
        Following
      </button>
    );
  }

  return (
    <button
      className={styles.follow__button}
      style={{ backgroundColor: "#0095f6" }}
      onClick={onClickFollow}
    >
      Follow
    </button>
  );
}

export default FollowBtn;
