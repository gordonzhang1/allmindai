import React from "react";
import "../../src/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-con">
        <div className="left-con">
          <img src="/Mass.png" />
        </div>
        <div className="middle-con">
          <div className="middle-ind-con">
            <div className="market desc-title">Marketplace</div>
            <div className="market-desc desc-con">
              <div>AWS</div>
              <div>Azure</div>
            </div>
          </div>
          <div className="middle-ind-con">
            {" "}
            <div className="desc-title">Templates</div>
            <div className="template-con desc-con">
              <div>AWS</div>
              <div>Azure</div>
              <div>GCP</div>
            </div>
          </div>
          <div className="middle-ind-con">
            {" "}
            <div className="solution desc-title">Solutions</div>
            <div className="solution-con desc-con">
              <div>Developer Self Service</div>
              <div>OpenTofu for Enterprise</div>
              <div>Platform Engineering Accelerator</div>
              <div>Cost Management</div>
            </div>
            <div className="desc-title">Comparison</div>
            <div className="compcon desc-con">
              <div>Backstage Alternative</div>
              <div>Spacelift vs Massdriver</div>
            </div>
          </div>
          <div className="middle-ind-con">
            {" "}
            <div className="desc-title">Company</div>
            <div className="company-con desc-con">
              <div>About Us</div>
              <div>Jobs</div>
              <div>News</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className="middle-ind-con">
            {" "}
            <div className="desc-title">Resources</div>
            <div className="recon desc-con">
              <div>Pricing</div>
              <div>Blog</div>
              <div>Docs</div>
              <div>Webinars</div>
              <div>Pitch Deck</div>
              <div>FAQ</div>
            </div>
          </div>
        </div>
        <div className="right-con">
          <div>
            {" "}
            <button className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Gradient
            </button>
          </div>
        </div>
      </div>
      <div className="footer-last">
        <div>© Massdriver, Inc. 2024</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
        <div>Security</div>
      </div>
    </footer>
  );
}
