import React from "react";
import "../../src/Quote.css";

export default function Quote() {
  return (
    <div className="quote-con-outer">
      <div className="quote-con">
        <div className="quotehead">We know the cloud</div>
        <div className="cloudbox">
          <div>
            &ldquo;We are partnering with innovative companies like Massdriver
            to help founders achieve more. As a part of Microsoft for Startups
            Founders Hub, startups can now receive access to Massdriver&apos;s
            productivity tools, designed to streamline cloud management and
            reduce infrastructure development time.&rdquo;
          </div>
          <div>Kirk Safford, Director, Microsoft for Startups</div>
        </div>
        <div className="quote-bottom-con">
          <div>
            Built by a team of world-class cloud-certified experts. Massdriver
            has passed rigorous CIS benchmarks for your favorite cloud&apos;s
            partnership network.
          </div>
        </div>
      </div>
      <div className="confident-outer-con">
        <div className="confident-con">
          We&apos;re confident Massdriver will transform how your team operates.
          Are you ready to simplify?
        </div>
        <div className="button-con-confident">
          <button className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Gradient
          </button>{" "}
          <button className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Gradient
          </button>{" "}
          <button className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Gradient
          </button>
        </div>
      </div>
      <div className="help-con">
        <div>Need help persuading your manager?</div>
      </div>
    </div>
  );
}
