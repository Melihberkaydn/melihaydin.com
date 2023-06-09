"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

interface navItems {
  [key: string]: {
    name: string;
    x: number;
    y: number;
    w: string;
  };
}

const navItems: navItems = {
  "/": {
    name: "home",
    x: 0,
    y: 2,
    w: "58px",
  },
  "/about": {
    name: "about",
    x: 58,
    y: 39,
    w: "61px",
  },
  "/portfolio": {
    name: "portfolio",
    x: 119,
    y: 77,
    w: "84px",
  },
  "/credits": {
    name: "credits",
    x: 205,
    y: 117,
    w: "70px",
  },
};

export default function Sidebar() {
  let pathname = usePathname();

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-heads text-lg">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex overflow-hidden flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {navItems[pathname] ? (
              <>
                {/* Desktop version, hidden on mobile, animates y axis */}
                <div className="hidden md:block">
                  <motion.div
                    className="absolute bg-yellow-600 dark:bg-yellow-50 h-[36px] rounded-md z-[-1]"
                    layoutId="test2"
                    initial={{ opacity: 0, y: navItems[pathname].y }}
                    animate={{
                      opacity: 1,
                      y: navItems[pathname].y,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
                {/* Mobile version, hidden on desktop, animates x axis */}
                <div className="block md:hidden">
                  <motion.div
                    className="absolute bg-yellow-700 dark:bg-yellow-50 h-[38px] rounded-md z-[-1]"
                    layoutId="test"
                    initial={{ opacity: 0, x: navItems[pathname].x }}
                    animate={{
                      opacity: 1,
                      x: navItems[pathname].x,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
              </>
            ) : null}

            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    "transition-all dark:hover:text-emerald-800 dark:text-neutral-200 py-[5px] px-[10px]",
                    isActive && "dark:text-neutral-600"
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
