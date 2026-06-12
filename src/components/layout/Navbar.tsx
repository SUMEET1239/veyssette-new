"use client";

import Link from "next/link";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Pages", href: "#", dropdown: true },
    { name: "Services", href: "/services", dropdown: true },
    { name: "Contact Us", href: "/contact" },
  ];

  const pagesDropdown = [
    { name: "Menu Experience", href: "/menu-experience" },
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "Book A Chef", href: "/book-a-chef" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Single Post", href: "/blog/single-post" },
    { name: "404", href: "/404" },
  ];

  const servicesDropdown = [
    { name: "Private Dining", href: "/private-dining" },
    { name: "Special Events", href: "/special-events" },
    { name: "Weekly Meal Prep", href: "/weekly-meal-prep" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f] border-b border-[#D4AF37]/40">
      <div className="w-full px-8 lg:px-16">
        <div className="h-24 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="w-[180px] md:w-[220px]">
              <Image
                src="/photos/logo.jpg"
                alt="Veyssette"
                width={220}
                height={70}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isServices = link.name === "Services";

                const isActive = isServices
                  ? pathname === "/services" ||
                    pathname === "/private-dining" ||
                    pathname === "/special-events" ||
                    pathname === "/weekly-meal-prep"
                  : pathname === "/menu-experience" ||
                    pathname === "/gallery" ||
                    pathname === "/book-a-chef" ||
                    pathname === "/faq" ||
                    pathname === "/blog" ||
                    pathname === "/blog/single-post";

                return (
                  <div key={link.name} className="group relative">
                    <button
                      className={`${cormorant.className}
            relative
            flex items-center gap-2
            text-lg
            tracking-[1px]
            transition
            ${isActive ? "text-[#D4AF37]" : "text-[#F5E8D0] hover:text-[#D4AF37]"}`}
                    >
                      {link.name}

                      <ChevronDown
                        size={16}
                        className="transition duration-300 group-hover:rotate-180"
                      />

                      {isActive && (
                        <span className="absolute left-0 -bottom-[34px] h-[2px] w-full bg-[#D4AF37]" />
                      )}
                    </button>
                    <div className="absolute top-full left-0 mt-4 w-64 bg-black border border-[#D4AF37]/20 divide-y divide-[#D4AF37]/30 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                      {isServices ? (
                        <>
                          <Link
                            href="/private-dining"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            Private Dining
                          </Link>

                          <Link
                            href="/special-events"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            Special Events
                          </Link>

                          <Link
                            href="/weekly-meal-prep"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            Weekly Meal Prep
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            href="/menu-experience"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            Menu Experience
                          </Link>

                          <Link
                            href="/gallery"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            Gallery
                          </Link>

                          <Link
                            href="/services"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            Services
                          </Link>

                          <Link
                            href="/book-a-chef"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            Book A Chef
                          </Link>

                          <Link
                            href="/faq"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            FAQ
                          </Link>

                          <Link
                            href="/blog"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            Blog
                          </Link>

                          <Link
                            href="/blog/single-post"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            Single Post
                          </Link>

                          <Link
                            href="/404"
                            className="block px-5 py-3 text-[#F5E8D0] hover:bg-[#D4AF37] hover:text-black transition"
                          >
                            404
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${cormorant.className}
        relative
        text-lg
        tracking-[1px]
        transition
        ${isActive ? "text-[#D4AF37]" : "text-[#F5E8D0] hover:text-[#D4AF37]"}`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute left-0 -bottom-[34px] h-[2px] w-full bg-[#D4AF37]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}

          {/* Tablet Layout */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            {/* Hamburger */}
            <button onClick={() => setOpen(!open)} className="text-white">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Phone */}
            <a
              href="tel:+10331234567"
              className="flex items-center gap-2 text-white"
            >
              <Phone size={16} fill="currentColor" />

              <span className="tracking-[1px] text-[15px]">
                +(1) 033 1234-567
              </span>
            </a>

            {/* Button */}
            <button
              className={`${cormorant.className}
      bg-[#D4AF37]
      text-black
      px-5
      py-2.5
      text-sm
      uppercase
      tracking-[1px]
      transition-all
      duration-300
      hover:-translate-y-1`}
            >
              BOOK A CHEF
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+10331234567"
              className="flex items-center gap-2 text-white"
            >
              <Phone size={16} fill="currentColor" />
              <span className="tracking-[1px] text-[18px]">
                +(1) 033 1234-567
              </span>
            </a>

            <button
              className={`${cormorant.className}
      bg-[#D4AF37]
      text-black
      px-7
      py-3
      tracking-[1px]
      uppercase
      transition-all
      duration-300
      hover:-translate-y-1`}
            >
              BOOK A CHEF
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black text-white">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="tracking-[2px]"
              >
                {link.name}
              </Link>
            ))}

            <button className="border border-[#D4AF37] py-3 text-[#D4AF37]">
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
