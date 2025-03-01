"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import Slider to prevent SSR issues in Next.js
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const data = [
    {
      name: "John Morgan",
      img: "/students/John_Morgan.jpg",
      review:
        "It's incredible to me that I could put together a sophisticated release like this so quickly and easily.",
    },
    {
      name: "Ellie Anderson",
      img: "/students/Ellie_Anderson.jpg",
      review:
        "The employees of Massdriver are incredibly attentive and helpful. Great product with excellent support.",
    },
    {
      name: "Nia Adebayo",
      img: "/students/Nia_Adebayo.jpg",
      review:
        "With Massdriver we were able to replace days of planning and debugging backend infrastructure with Terraform to having it up and running seamlessly in under an hour.",
    },
    {
      name: "Rigo Louie",
      img: "/students/Rigo_Louie.jpg",
      review:
        "As an engineer who no longer has their own DevOps team, Massdriver is a great abstraction for a team who wants to move away from their PaaS, but doesn’t want to go completely to the IaaS side.",
    },
    {
      name: "Mia Williams",
      img: "/students/Mia_Williams.jpg",
      review:
        "It is an amazing experience building a Microservice-based cloud infrastructure with it, as it handles huge amounts of the configuration work in the background (while still allowing all the customizations for advanced users or corner cases) and allows one to keep an overview of the project. Best support I have ever seen.",
    },
  ];

  return (
    <div className="w-full mx-auto bg-gradient-to-r from-[#0c2431] to-[#0c2431] p-20">
      <div className="text-white text-4xl">
        Loved by DevOps and Software Engineers
      </div>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="px-2">
              {" "}
              {/* Add padding for gap */}
              <div className="bg-white h-[450px] text-black rounded-xl shadow-lg">
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center text-gray-600">{d.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
