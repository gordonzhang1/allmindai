import MainPage from "@/components/MainPage";
import { NavbarDemo } from "../components/NavbarDemo";
import Works from "@/components/Works";
import Platform from "@/components/Platform";
import TestimonialsCarousel from "@/components/TestomonialCarousel";
import Featured from "@/components/Featured";
import Deliver from "@/components/Deliver";
import { Scroll } from "@/components/Scroll";
import Infrastructure from "@/components/Infrastructure";
import Button from "@/components/Button";

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
      <Infrastructure />
      <Button />
    </>
  );
}
