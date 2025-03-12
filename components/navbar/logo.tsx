import Image from "next/image";
import logo from "../../public/logo.png";

export const Logo = () => (
  <Image src={logo} width={45} height={45} alt="logo image" />
);
