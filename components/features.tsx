import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  SquareDashedMousePointer,
  Dumbbell,
  Goal,
  Bot,
  Users,
  Pipette,
} from "lucide-react";
import Img1 from "../public/optijs.png";
import Img2 from "../public/rembgg.png";
import Img3 from "../public/flexflow.png";
import Img4 from "../public/nkhr.png";
import Img5 from "../public/quzenit.png";
import Img6 from "../public/color-picker.png";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    id:1,
    icon: Bot,
    title: "OptiJS - AI code reviewer",
    image: Img1,
    link:"https://optijs.vercel.app" ,
    description:
      "Easily uncover untapped areas to explore and expand your reach effortlessly.",
  },
  {
    id:2,
    icon: SquareDashedMousePointer,
    title: "Rembg - Image bg remover",
    image: Img2,
    link:"https://rembgg.netlify.app" ,
    description:
      "Create valuable content that resonates, inspires trust, and positions you as an expert.",
  },
  {
    id:3,
    icon: Dumbbell,
    title: "FlexFlow - GYM website",
    image: Img3,
    link:"https://flexfloww.vercel.app" ,
    description:
      "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
  },
  {
    id:4,
    icon: Users,
    title: "NKHR - Agency wensite",
    image: Img4,
    link:"https://https://nkhr-solutions.netlify.app" ,
    description:
      "Boost audience engagement with interactive features like polls, quizzes, and forms.",
  },
  {
    id:5,
    icon: Goal,
    title: "Quzenit - Web devlopment agency",
    image: Img5,
    link:"https://quzenit.vercel.app" ,
    description:
      "Streamline your processes by automating repetitive tasks, saving time and reducing effort.",
  },
  {
    id:6,
    icon: Pipette,
    title: "Color Picker",
    image: Img6,
    link:"https://pickacolor.vercel.app" ,
    description:
      "Supercharge your growth by implementing strategies that drive results quickly and efficiently.",
  },
];

const Features = () => {
  return (
    
    <div
      id="features"
      className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        Here are some of my Work Samples
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature) => (
          <Link key={feature.id} href={feature.link} target="_blank" >
          <Card
            key={feature.id}
            className="flex flex-col min-h-96 border hover:scale-105 hover:shadow-xl ease-in-out duration-300 cursor-pointer rounded-xl overflow-hidden shadow-none"
          >
            <CardHeader>
              <feature.icon />
              <h4 className="!mt-3 text-xl font-bold tracking-tight">
                {feature.title}
              </h4>
              <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              <div className="bg-muted h-52 ml-6 rounded-tl-xl">
                <Image
                  src={feature.image.src}
                  alt={feature.title}
                  width={300}
                  height={150}
                  className="w-full h-full rounded-tl-xl"
                />{" "}
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Features;
