import React from "react";
import "../../src/Question.css";
export default function Question() {
  return (
    <div className="question-con">
      <div className="questionheader">Still have questions?</div>
      <div className="questiondesc">
        Check out our FAQs or ping us directly in our community Slack
      </div>
      <div>
        <button className="no-flex px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Gradient
        </button>{" "}
      </div>
    </div>
  );
}
