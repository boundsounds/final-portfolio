import React from "react";

import Footer from "./Footer";

export const Video = () => {
  return (
    <div>
      <h1 className="video-txt">Bounds- Bind</h1>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LHEtjoMhojI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1 className="video-txt">
        Bounds- Carter Cashion Album Art Design Process
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/aSWj1ayFIgY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1 className="video-txt">Bounds - Hindsight Song Promo</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hzMFcu_-CwA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Video;
