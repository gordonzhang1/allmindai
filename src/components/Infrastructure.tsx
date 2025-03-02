import React from "react";
import "../../src/Infrastructure.css";

export default function Infrastructure() {
  return (
    <>
      <div className="infracon">
        <div className="head-con">
          <div className="infrahead">
            Infrastructure at the Speed of Thought
          </div>
          <div className="infraheadpara">
            Enable developer self-service without risking compliance, security,
            cost, or reliability.
          </div>
        </div>
        <div className="infracon1">
          <div className="infracon1-inner">
            <div className="con1head">Cloud Service Catalog</div>
            <div className="con1headdesc">
              <div>
                Your DevOps teams have a lot on their plate, don't lose another
                great teammate to burnout.
              </div>
              <div>
                Enable developers to self-serve cloud infrastructure from
                approved IaC templates in a central catalog.
              </div>
              <div>
                Developers drag, connect, and deploy. No more last minute Jira
                tickets to the DevOps team.
              </div>
            </div>
          </div>
          <img className="infraimg" src="/cloud.png" />
        </div>
        <div className="infracon1">
          <img className="infraimg" src="/cost.png" />

          <div className="infracon1-inner">
            <div className="con1head">Cost & Health Insights</div>
            <div className="con1headdesc">
              <div>
                Get a clear view of your cloud's health and costs right where
                your developers manage their infrastructure.
              </div>
              <div>
                With real-time insights, you can make proactive adjustments,
                ensuring systems are efficient and cost-effective.
              </div>
              <div>Never get caught with a surprise cloud bill again.</div>
            </div>
          </div>
        </div>
        <div className="infracon1">
          <div className="infracon1-inner">
            <div className="con1head">Inventory & Audit Records</div>
            <div className="con1headdesc">
              <div>
                Get instant visibility into every asset, streamline your
                workflows, and keep your projects moving forward efficiently.
              </div>
              <div>
                Say goodbye to the chaos of scattered resources and hello to
                seamless, organized control.
              </div>
              <div>
                No more hunting for assets or piecing together the puzzle of
                your cloud infrastructure.
              </div>
            </div>
          </div>
          <img className="infraimg" src="/invent.png" />
        </div>
      </div>
    </>
  );
}
