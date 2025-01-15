"use client";
import * as React from "react";
import { NavItem } from "./NavItem";
import TokamakLogo from "@/assets/images/Tokamak_Symbol.svg";
import TokamakLogoText from "@/assets/images/Tokamak_LogoText.svg";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/app/hooks/layout/useIsMobile";
import Mobile from "./Mobile";

const navItems = [
  {
    label: "Trade",
    icon: "trading-icon-url",
    className: "text-amber-600",
  },
  {
    label: "Stake",
    icon: "staking-icon-url",
  },
  {
    label: "Docs",
    icon: "docs-icon-url",
  },
  {
    label: "Community",
    icon: "community-icon-url",
  },
];

export default function NavigationBar() {
  const { isMobile } = useIsMobile(640);

  if (isMobile) return <Mobile />;

  return (
    <div className="fixed top-[24px] w-full flex justify-center px-5 md:px-12 z-50">
      <div className="max-w-[1360px] w-full h-[72px] flex flex-col justify-center px-4 md:pr-11 md:pl-8 text-base font-medium text-center text-black whitespace-nowrap rounded-2xl border border-solid bg-white bg-opacity-90 border-amber-200">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/">
            <figure className="flex items-center gap-2">
              <Image
                loading="lazy"
                src="/path-to-candle-logo.svg"
                alt="Candle Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-amber-600">CANDLE</span>
            </figure>
          </Link>

          {/* Navigation menu (desktop) */}
          <div className="hidden sm:flex gap-x-[40px] items-center">
            {navItems.map((item, index) => (
              <div key={index} className={item.className}>
                <NavItem label={item.label} icon={item.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
