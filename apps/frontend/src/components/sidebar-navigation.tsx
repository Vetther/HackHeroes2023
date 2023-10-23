"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarIcons } from "./icons/sidebar";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Separator } from "./ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import useSidebar from "@/hooks/use-sidebar";

const SidebarNavigation = () => {
  const pathname = usePathname();
  const { navigation, account } = useSidebar();

  const [activeTabIndex, setActiveTabIndex] = useState<number | null>();
  const [hoverTabIndex, setHoverTabIndex] = useState<number | null>();
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLElement | null>>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const hoveredRect = buttonRefs[activeTabIndex ?? -1]?.getBoundingClientRect();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (account.active) return setActiveTabIndex(account.index);
    setActiveTabIndex(navigation.findIndex(({ active }) => active));
  }, [pathname]);

  return (
    <div
      className="flex-1 flex flex-col justify-center gap-[18px] px-8"
      ref={navRef}
    >
      {navigation.map(({ label, path, icon, active }, index) => (
        <Link
          ref={(el) => (buttonRefs[index] = el)}
          href={path}
          key={index}
          onClick={() => setActiveTabIndex(index)}
          onMouseOver={() => setHoverTabIndex(index)}
          onMouseLeave={() => setHoverTabIndex(null)}
          className={cn(
            "group relative rounded-lg h-[50px] bg-transparent",
            !mounted && active && "bg-indigo-500"
          )}
        >
          <motion.p
            className={cn(
              "hover:text-indigo-500 flex justify-start items-center z-10 gap-[14px] font-dm-sans text-sm font-semibold leading-tight px-[18px] py-3 transition-colors duration-150",
              active ? "!text-white delay-75" : "text-slate-500"
            )}
          >
            {icon}
            {label}
          </motion.p>
          <AnimatePresence>
            {hoverTabIndex === index && (
              <motion.div
                key={"hover"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -z-20 top-0 left-0 w-full h-full rounded-lg bg-indigo-50"
              />
            )}
          </AnimatePresence>
        </Link>
      ))}
      {/* <Separator className="-z-10" />
            <Link
                ref={(el) => (buttonRefs[account.index] = el)}
                href={account.path}
                onClick={() => setActiveTabIndex(4)}
                onMouseOver={() => setHoverTabIndex(4)}
                onMouseLeave={() => setHoverTabIndex(null)}
                className={cn(
                    "group relative rounded-lg h-[50px] ",
                    !mounted && account.active && "bg-indigo-500"
                )}
            >
                <motion.p
                    className={cn(
                        "hover:text-indigo-500 flex justify-start items-center z-10 gap-[14px] font-dm-sans text-sm font-bold leading-tight px-[18px] py-3 transition-colors duration-150 hover:delay-75",
                        account.active
                            ? "!text-white delay-75"
                            : "text-slate-500"
                    )}
                >
                    {account.icon}
                    {account.label}
                </motion.p>
                <AnimatePresence>
                    {hoverTabIndex === account.index && (
                        <motion.div
                            key={"hover"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -z-20 top-0 left-0 w-full h-full rounded-lg bg-indigo-50"
                        />
                    )}
                </AnimatePresence>
            </Link>
            <Dialog>
                <DialogTrigger>
                    <div
                        onMouseOver={() => setHoverTabIndex(5)}
                        onMouseLeave={() => setHoverTabIndex(null)}
                        className={cn(
                            "group relative rounded-lg h-[50px] cursor-pointer bg-transparent"
                        )}
                    >
                        <motion.p
                            className={cn(
                                "flex justify-start items-center h-[50px] z-10 gap-[14px] font-dm-sans text-sm font-bold leading-tight px-[18px] py-3 text-slate-500 hover:text-red-500 transition-colors duration-150"
                            )}
                        >
                            <SidebarIcons.logout
                                className={cn(
                                    "transition-colors duration-150 text-slate-500 group-hover:text-red-500"
                                )}
                            />
                            Wyloguj się
                        </motion.p>
                        <AnimatePresence>
                            {hoverTabIndex === 5 && (
                                <motion.div
                                    key={"hover"}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute -z-20 top-0 left-0 w-full h-full rounded-lg bg-red-50"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Wylogowanie</DialogTitle>
                        <DialogDescription>
                            Czy napewno chcesz sie wylogować? 😱
                        </DialogDescription>
                        <DialogFooter>
                            <Button>Wyloguj</Button>
                        </DialogFooter>
                    </DialogHeader>
                </DialogContent>
            </Dialog> */}
      <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            onAnimationComplete={() => {
              console.log("animation complete");
            }}
            key={"hover"}
            className="absolute -z-10 top-0 left-0 rounded-lg bg-indigo-500"
            transition={{
              type: "tween",
              ease: [0.34, 1.25, 0.64, 1],
              duration: 0.35,
            }}
            initial={{
              x: hoveredRect.left,
              y: hoveredRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 1,
            }}
            animate={{
              x: hoveredRect.left,
              y: hoveredRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 1,
            }}
            exit={{
              x: hoveredRect.left,
              y: hoveredRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarNavigation;
