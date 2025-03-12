"use client"
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Testimonial from "@/components/testimonial";
import Lenis from "lenis";

export default function Home() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  console.log(lenis);
  

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Testimonial />
      <Footer />
    </>
  );
}
