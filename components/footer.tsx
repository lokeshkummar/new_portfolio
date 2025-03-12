import {
  DribbbleIcon,
  Github,
  Instagram,
  TwitterIcon,
  Linkedin,

} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="https://linkedin.com/in/lokesh-kummar" target="_blank">
            Lokesh Kumar
          </Link>
          . All rights reserved.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="https://linkedin.com/in/lokesh-kumar" target="_blank">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://github.com/lokeshkummar" target="_blank">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://x.com/lokeshkummar.com" target="_blank">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="https://instagram.com/lokes.dev" target="_blank">
            <Instagram className="h-5 w-5" />
          </Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
