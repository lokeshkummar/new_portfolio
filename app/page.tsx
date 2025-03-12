"use client"
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Testimonial from "@/components/testimonial";
import { ReactLenis, useLenis } from 'lenis/react'

export default function Home() {

  const lenis = useLenis()
  console.log(lenis);
  

  return (
    <ReactLenis root>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Testimonial />
      <Footer />
    </ReactLenis>
  );
}
