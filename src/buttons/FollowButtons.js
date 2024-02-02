import { useState } from "react";
import "./FollowButtons.modules.css";

// styles from

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
      <button style={{ backgroundColor: "grey" }} onClick={onClickUnfollow}>
        Following
      </button>
    );
  }

  return (
    <button style={{ backgroundColor: "green" }} onClick={onClickFollow}>
      Follow
    </button>
  );
}

export default FollowBtn;
