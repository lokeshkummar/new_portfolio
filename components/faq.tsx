import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: " What services do you offer?",
    answer:
      "I specialize in web design and development, turning Figma designs into fully functional websites using React.js, Next.js, and Tailwind CSS.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project's complexity. A simple website may take 1-2 weeks, while larger projects may take 3-4 weeks or more.",
  },
  {
    question: "Do you provide custom website designs?",
    answer:
      "Yes, I create custom designs based on your brand identity, audience, and goals to ensure a unique and impactful website.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! I can revamp your website with improved design, performance, and functionality.",
  },
  {
    question: "Do you offer mobile-responsive designs?",
    answer:
      "Yes, all websites I create are fully responsive and optimized for various devices.",
  },
  {
    question: "What if I face issues after the project is completed?",
    answer:
      "I offer post-launch support to resolve any issues and ensure your website runs smoothly.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "I typically require a 50% upfront payment, with the remaining 50% due upon project completion.",
  },
  {
    question: "Are there any hidden costs?",
    answer:
      "No hidden costs! I'll provide a clear breakdown of all expenses before starting the project.",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="w-full max-w-screen-xl mx-auto py-8 xs:py-16 px-6">
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter">
        Frequently Asked Questions
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        Quick answers to common questions about our services.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 md:columns-2 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none !mt-0 !mb-4 break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
