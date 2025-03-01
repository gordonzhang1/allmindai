import React from "react";

export default function Deliver() {
  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <div className="delivertitle text-2xl font-bold text-center max-w-[600px] mx-auto">
        Deliver On-Demand, Self-Service of Standardized Infrastructure
      </div>

      {/* Responsive YouTube Video with Controlled Size */}
      <div className="w-[600px] max-w-full mx-auto">
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Zd2SSE-iT3g?autoplay=0&rel=0"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <button className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
        Gradient
      </button>
    </div>
  );
}
