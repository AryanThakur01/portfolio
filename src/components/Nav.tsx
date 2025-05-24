import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { buttonVariants } from "./ui/button";

const Nav = () => {
  return (
    <nav className="fixed top-0 z-50 container mx-auto py-2 flex justify-between">
      {/* <div className="flex border border-b-2 px-4 rounded-md z-50 gap-4 backdrop-blur-xl"> */}
      {/*   <Link href="/#intro" className="font-bold my-auto"> */}
      {/*     Aryan */}
      {/*   </Link> */}
      {/*   <ul className="flex gap-4 container text-muted-foreground items-center px-0"> */}
      {/*     <PageLink link="/#skills" text="My Skills" /> */}
      {/*     <PageLink link="/#projects" text="Projects" /> */}
      {/*   </ul> */}
      {/* </div> */}
      <ul className="flex gap-2 border border-b-2 px-4 rounded-md z-50 bg-background/20 backdrop-blur-xl ml-auto">
        <ButtonLink link="https://github.com/AryanThakur01/" icon={<Github size={16} />} />
        <ButtonLink link="https://www.linkedin.com/in/aryan-thakur-73b251250/" icon={<Linkedin size={16} />} />
      </ul>
    </nav>
  );
};

interface IPageLink {
  link: string;
  text: string;
}
const PageLink: FC<IPageLink> = ({ link, text }) => {
  return (
    <li>
      <Link href={link} className="hover:text-foreground">
        {text}
      </Link>
    </li>
  );
};

interface IButtonLinks {
  link: string;
  icon: ReactNode;
}
const ButtonLink: FC<IButtonLinks> = ({ link, icon }) => {
  return (
    <li>
      <Link href={link} className={cn(buttonVariants({ variant: "ghost" }), "rounded hover:bg-muted/50 h-10 w-10 p-1")}>
        {icon}
      </Link>
    </li>
  );
};
export default Nav;
