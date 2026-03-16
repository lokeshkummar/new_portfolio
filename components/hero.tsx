import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Rocket } from "lucide-react";
import Image from "next/image";
import MacbookCharacter from "../public/mac-char.png";


const Hero = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full mt-14 flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl sm:pl-20">
          <Badge className="h-7 w-52 shadow-lg shadow-white/20 flex justify-center items-center gap-2.5 rounded-full border border-white/30 hover:bg-white/10 hover:scale-105 ease-out duration-500 font-light bg-white/20 backdrop-blur-xl text-white">
            Hire me or work with me! <Rocket className="h-3.5 w-3.5" />
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Lokesh Kumar <br />{" "}
            <span className="text-4xl sm:text-5xl">FrontEnd - Developer</span>
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Empowering business owners to thrive online with custom, visually
            stunning, and high-performing websites. From design to development,
            I craft digital experiences that captivate and convert.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              <a
                className="flex items-center gap-2"
                href="https://drive.google.com/file/d/18ycQrw39qUd0RygnvFAy0JtnrgPCag0d/view"
              >
                My Resume <ArrowUpRight className="!h-5 !w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <a
                className="flex gap-2 items-center"
                href="mailto:lokeshkumar.080806@gmail.com"
              >
                <Mail className="!h-5 !w-5" /> Contact Me
              </a>
            </Button>
          </div>
        </div>
        <div className="relative h-full w-full lg:max-w-lg xl:max-w-xl rounded-xl aspect-square flex items-center justify-center">
          <div className="h-64 w-64 animate-pulse sm:h-96 sm:w-96 rounded-full bg-[#9b2220] absolute top-10 blur-2xl"></div>
         
          <Image
            src={MacbookCharacter}
            height={600}
            width={700}
            alt="macbook inner character"
            className="absolute -bottom-12 sm:bottom-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
