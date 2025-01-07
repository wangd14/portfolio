import React from "react";
import Link from "next/link";
import { LinkProps } from "@/data/interface";

const HoverLink = (props: LinkProps) => {
  return (
    <Link
      href={props.href}
      className="text-[var(--jade-12)] relative after:absolute after:bg-[var(--jade-12)] after:opacity-10 after:duration-100 after:rounded-md after:h-2 after:w-[calc(100%+0.2em)] after:-left-[0.1em] after:bottom-[0.1em] hover:after:h-full hover:after:-bottom-[0.1em] hover:after:pt-[1.4em] after:origin-bottom after:transform"
    >
      {props.children}
    </Link>
  );
};

export default HoverLink;
