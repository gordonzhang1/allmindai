import React from "react";
import "../../src/Reduce.css";

export default function Reduce() {
  return (
    <div className="reduce-con">
      <div className="reduceheader">
        How AMD Global Telemedicine Reduced Software Release Effort by 89%
      </div>
      <div className="ceocon">
        <div className="chipcon">
          <div className="chip-inner">
            <div className="chipname">
              <div className="chipconhead">Chip McIntosh</div>
              <div>Chief Innovation Officer</div>
            </div>
            <img className="amd" src="/amd.png" />
          </div>
          <div className="chipcondesc">
            Massdrivers platform has revolutionized our approach to
            infrastructure, saving us 89% of the time spent managing
            infrastructure. Our operation could upscale by an order of
            magnitude, if not two, and we would not be in crisis mode to hire
            somebody to manage infrastructure.
          </div>
        </div>
        <div className="chipdesccon">
          <div>
            Explore how AMD Global Telemedicine revolutionized their software
            deployment process, cutting down release effort by 89% with
            Massdrivers cloud solutions. This case study is a must-read for
            those aiming to scale efficiently and enhance team productivity
            through innovative cloud technology. Download now for key insights.
          </div>
          <ul>
            <li>
              Reduced software release effort by 89% with Massdrivers cloud
              solutions.
            </li>
            <li>
              Managed a 100x workload surge without increasing engineering
              staff.
            </li>
            <li>Improved team collaboration and productivity ninefold.</li>
          </ul>
          <button className="no-flex px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Gradient
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
