import React from "react";
import "../../src/Platform.css";

export default function Platform() {
  return (
    <>
      <div className="platform-con">
        <div className="platform-title font-bold">
          See What’s Possible with Massdriver’s IaC-Powered Platform
        </div>
        <div className="video-container">
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="comp-con">
          <div className="cloudcon">
            <div className="cloudtitle">CLOUD CERTIFIED</div>
            <div className="cloud-inner">
              <img className="vc" src="/google.png" />
              <img className="vc" src="/aws.png" />
              <img className="micro" src="/micro.png" />
            </div>
          </div>
          <div className="vcon">
            <div className="vctitle">VC BACKED</div>
            <div className="vc-inner">
              <img className="vc" src="/yc.png" />
              <img className="build" src="/builders.png" />
              <img className="vc" src="/1984.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
