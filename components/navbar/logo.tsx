import Image from "next/image";
import logo from "../../public/logo.png"

export const Logo = () => (
  <Image
    src={logo}
    width={120}
    height={50}
    alt="logo image"
  />
);
