"use client";


import { NavItem } from "./NavItem";
import TokamakLogo from "@/assets/images/Tokamak_Symbol.svg";
import TokamakLogoText from "@/assets/images/Tokamak_LogoText.svg";
import Image from "next/image";
import Link from "next/link";
import CloseGray from "@/assets/icons/header/close-gray.svg";
import { useState } from "react";
import HamburgerMenu from "@/assets/icons/header/hamburger-menu.svg";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-[24px] w-full flex justify-center px-5 md:px-12 z-50">
        <div className="max-w-[1360px] w-full h-[72px] flex flex-col justify-center px-4 md:pr-11 md:pl-8 text-base font-medium text-center text-black whitespace-nowrap rounded-2xl border border-solid bg-white bg-opacity-90 border-amber-200">
          <div className="flex justify-between items-center w-full">
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
            <button
              className="sm:hidden"
              onClick={(e) => {
                e.preventDefault(); // 기본 동작 방지
                e.stopPropagation(); // 이벤트 버블링 방지
                setIsMobileMenuOpen(true);
              }}
            >
              <Image src={HamburgerMenu} alt="Hamburger Menu" />
            </button>
            <div className="hidden sm:flex gap-x-[60px] items-center">
              {navItems.map((item, index) => (
                <div key={index} className={item.className}>
                  <NavItem label={item.label} icon={item.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] sm:hidden">
          <div className="flex justify-end items-center p-6">
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <Image src={CloseGray} alt="Close" />
            </button>
          </div>
          <nav className="px-[36px] py-[20px]">
            <ul>
              <li>
                <Link
                  href="/"
                  className="flex items-center text-[24px] font-bold h-[70px]"
                >
                  <span className="text-[#1C1C1C] hover:text-amber-600 transition-colors duration-200">
                    Home
                  </span>
                </Link>
              </li>
              {navItems.map((item, index) => (
                <li key={index} className={`${item.className}`}>
                  <NavItem label={item.label} icon={item.icon} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
