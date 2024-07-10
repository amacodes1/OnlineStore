"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Cart from "./Cart";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative">
      <div className="w-6 h-6 absolute left-[291px] top-[58px]" />
      <div className="bg-white w-full h-[60px] md:h-[80px] px-4 md:px-28 py-2 md:py-6 absolute left-0 top-[32px] flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="md:hidden px-1 py-2 rounded-lg flex items-center gap-2"
            onClick={toggleMenu}
          >
            <Image src="/images/menu.png" height={24} width={24} alt="menu" />
          </button>
          <div className="px-1 py-2 flex items-center">
            <h1 className="text-dark500 text-lg md:text-[34px] font-bold md:font-medium font-Work_Sans leading-snug">
              <Link href="/">GLAZ</Link>
            </h1>
          </div>
        </div>

        {/* Search Bar on large screen */}
        <div className="hidden md:flex h-12 px-4 w-1/2 rounded-[99px] border border-gray300 items-center mx-auto">
          <div className="flex items-center gap-1 flex-grow p-2">
            <div className="flex items-center gap-2.5 flex-grow">
              <span className="text-gray800 text-base font-normal font-Work_Sans leading-tight">
                Hinted search text|
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 relative">
                <Image
                  src="/images/search-icon.png"
                  height={24}
                  width={24}
                  alt="search"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shopping Cart and Search icon on small screen */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center">
            <div className="w-6 h-6 relative">
              <Image
                src="/images/search-icon.png"
                height={24}
                width={24}
                alt="search"
              />
            </div>
          </div>

          {/* Shopping Cart */}
          <div className="flex items-center gap-1">
            <Link href="/cart">
              <div className="relative py-2 flex items-center gap-0.5">
                <div className="relative w-5 h-5">
                  <Image
                    src="/images/shopping-cart-02.png"
                    height={20}
                    width={20}
                    alt="cart"
                  />
                  <span className="absolute top-[-10px] right-[-10px] bg-green500 text-green50 text-xs font-semibold rounded-xl py-1 px-2 w-6 h-5">
                    5
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Shopping Cart on large screen */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={toggleCart}
            className="relative py-2 flex items-center gap-0.5"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/images/shopping-cart-02.png"
                height={20}
                width={20}
                alt="cart"
              />
              <span className="absolute top-[-10px] right-[-10px] bg-green500 text-green50 text-xs font-semibold rounded-xl py-1 px-2 w-6 h-5">
                5
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Cart dropdown for large screens */}
      {isCartOpen && (
        <div className="hidden md:block absolute right-0 top-[100px] mt-2 z-20 w-full lg:w-[400px] lg:shadow-lg">
          <Cart />
        </div>
      )}
    </div>
  );
}
