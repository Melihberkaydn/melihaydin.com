import Image from "next/image";
import { name, about, avatar } from "./lib/info";
import { LinkedInIcon, EmailIcon } from "./lib/Icons/Icons";

export const revalidate = 60;

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melih Berkay Aydin",
  description: "Welcome to my Portfolio",
};

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-heads">{name}</h1>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <div className=" w-32 h-32 bg-[#a2c11c] rounded-full">
          <Image
            alt={name}
            className="rounded-full grayscale"
            src={avatar}
            placeholder="blur"
            width={120}
            priority
          />
        </div>
        <ul className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-600 dark:text-neutral-400">
          <li>
            <a
              className="flex hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/melih-berkay-aydin/"
            >
              <LinkedInIcon />
              <p className="h-7 ml-1">Add me on LinkedIn</p>
            </a>
          </li>
          <li>
            <a
              className="flex hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto: berkaydin34@gmail.com"
            >
              <EmailIcon />
              <p className="h-7 ml-1">Contact Me</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="my-5 max-w-[640px] text-neutral-800 dark:text-neutral-200 hyphens-auto">
        {about()}
      </div>
    </section>
  );
}
