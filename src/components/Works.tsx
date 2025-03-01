"use client";
import React, { useState } from "react";
import "../../src/Works.css";

export default function Works() {
  type WorkOption = "Code" | "Publish" | "Diagram"; // Define a union type for valid options
  const [selected, setSelected] = useState<WorkOption>("Code");

  const descriptions: Record<
    WorkOption,
    { title: string; description: string; image: string }
  > = {
    Code: {
      title: "Ops Teams Write IaC",
      description:
        "DevOps and Platform teams use the infrastructure-as-code tools they know, such as Terraform / OpenTofu, Helm, or CloudFormation, and package them into use-case-specific modules with your policy tooling built in.",
      image: "/mass1.png",
    },
    Publish: {
      title: "Publish Your Modules",
      description:
        "Teams publish their reusable modules in a centralized registry, making it easy to share best practices and standardize infrastructure provisioning across projects.",
      image: "/mass2.png",
    },
    Diagram: {
      title: "Visualize and Manage",
      description:
        "Automatically generate architecture diagrams from your infrastructure code, enabling teams to visualize and understand their infrastructure deployments at a glance.",
      image: "/mass3.png",
    },
  };

  return (
    <>
      <div className="works-con">
        <div className="works-header">How it works</div>
        <div className="workselectcon">
          {Object.keys(descriptions).map((key) => (
            <div
              key={key}
              className={`work-option ${selected === key ? "active" : ""}`}
              onClick={() => setSelected(key as WorkOption)}
              style={{
                cursor: "pointer",
              }}
            >
              {key}
            </div>
          ))}
        </div>
        <div className="worksdesc">
          <div className="workstitlecon">
            <div className="descheader">{descriptions[selected].title}</div>
            <div className="descpara">{descriptions[selected].description}</div>
          </div>
          <img
            src={descriptions[selected].image}
            alt={descriptions[selected].title}
            className="work-image"
          />
        </div>
      </div>
    </>
  );
}
