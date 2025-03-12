import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import heroImage from "../public/hero-img.png"

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] pt-14 w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl sm:pl-20">
          <Badge className="rounded-full py-1 border-none">
            Hire Me or Work with Me
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Lokesh Kumar <br /> FrontEnd - Developer
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
          Empowering business owners to thrive online with custom, visually stunning, and high-performing websites. From design to development, I craft digital experiences that captivate and convert.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              <a className="flex items-center gap-2" href="https://drive.google.com/file/d/18ycQrw39qUd0RygnvFAy0JtnrgPCag0d/view">My Resume <ArrowUpRight className="!h-5 !w-5" /></a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <a className="flex gap-2 items-center" href="mailto:lokeshkumar.080806@gmail.com"><Mail className="!h-5 !w-5" /> Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full rounded-xl aspect-square">
          <Image
            src={heroImage}
            fill
            alt=""
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
