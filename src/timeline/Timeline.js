import React, { useState } from "react";
import "./Timeline.css";
import Suggesstions from "./Suggesstions";
import Post from "./posts/Post";

function Timeline() {
  const [posts] = useState([
    {
      user: "firstuser_",
      postImage:
        "https://www.pcgameshardware.de/screenshots/original/2022/03/Elden-Ring-Seite-1-oben-Aufmacher-buffed_b2article_artwork.jpg",
      likes: 124,
      timestamp: "12h",
    },
    {
      user: "thehunter",
      postImage:
        "https://cdn.mos.cms.futurecdn.net/Wq9s8WBjA8wrS5opNCxbya-1200-80.jpg",
      likes: 54,
      timestamp: "3h",
    },
    {
      user: "patches",
      postImage:
        "https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt8465a289a61e4734/622b2641c9756c4ec7a202ff/patches-demons-souls.jpg",
      likes: 2,
      timestamp: "1h",
    },
    {
      user: "memelord",
      postImage:
        "https://media.assettype.com/afkgaming/import/media/images/55143-08bf98e6a4535406acafc015adf99434.jpeg?w=1200&h=675&auto=format%2Ccompress&fit=max",
      likes: 133346,
      timestamp: "10h",
    },
    {
      user: "IT_student",
      postImage:
        "https://i.pinimg.com/736x/72/88/b5/7288b5c821d3c1064643c23de28653ee.jpg",
      likes: 147,
      timestamp: "8h",
    },
    {
      user: "p_the_puppet_slayer",
      postImage:
        "https://cdn2.unrealengine.com/lies-of-p-krat-3840x2160-44f889cf0832.png?resize=1&w=1920",
      likes: 1,
      timestamp: "15h",
    },
    {
      user: "memelord4",
      postImage:
        "https://media.assettype.com/afkgaming/import/media/images/55143-08bf98e6a4535406acafc015adf99434.jpeg?w=1200&h=675&auto=format%2Ccompress&fit=max",
      likes: 133346,
      timestamp: "10h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggesstions />
      </div>
    </div>
  );
}

export default Timeline;
