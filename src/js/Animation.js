import React from "react";
import "../css/Animation.css";

const Animation = () => (
  <div id="cherry-tree">
    {/*I'm inserting an img in place of the animation*/} 
   <img src='/assets/sakura-tree.png' alt="cherry blossom" className="cherry-blossom" fetchPriority="high" />
  </div>
);

export default Animation;
