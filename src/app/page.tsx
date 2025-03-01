import MainPage from "@/components/MainPage";
import { NavbarDemo } from "../components/NavbarDemo";
import Works from "@/components/Works";
import Platform from "@/components/Platform";
import TestimonialsCarousel from "@/components/TestomonialCarousel";
import Featured from "@/components/Featured";
import Deliver from "@/components/Deliver";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <MainPage />
      <Works />
      <Platform />
      <TestimonialsCarousel />
      <Featured />
      <Deliver />
    </>
  );
}
