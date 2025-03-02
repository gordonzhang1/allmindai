import MainPage from "@/components/MainPage";
import { NavbarDemo } from "../components/NavbarDemo";
import Works from "@/components/Works";
import Platform from "@/components/Platform";
import TestimonialsCarousel from "@/components/TestomonialCarousel";
import Deliver from "@/components/Deliver";
import Infrastructure from "@/components/Infrastructure";
import Button from "@/components/Button";
import Reduce from "@/components/Reduce";
import Eng from "@/components/Eng";
import Quote from "@/components/Quote";
import Question from "@/components/Question";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <MainPage />
      <Works />
      <Platform />
      <TestimonialsCarousel />
      <Deliver />
      <Infrastructure />
      <Button />
      <Reduce />
      <Eng />
      <Quote />
      <Question />
      <Footer />
    </>
  );
}
