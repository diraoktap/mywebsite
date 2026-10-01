"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/Button";

const workItems = [
    {
        title: "Finora Dashboard",
        description: "Analytics & workspace automations for growing teams.",
        href: "https://example.com",
        accent: "from-[#d4ff00]/30 via-[#d4ff00]/10 to-transparent",
    },
    {
        title: "Aero Commerce",
        description: "Conversion-focused storefront redesign for modern retail.",
        href: "https://example.com",
        accent: "from-[#8ec5ff]/30 via-[#7dd3fc]/10 to-transparent",
    },
    {
        title: "Northstar App",
        description: "Product strategy and UI polish for a SaaS onboarding flow.",
        href: "https://example.com",
        accent: "from-[#f9a8d4]/30 via-[#f5d0fe]/10 to-transparent",
    },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isWorkOpen, setIsWorkOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest("[data-work-menu]")) {
                setIsWorkOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <header
            className={[
                "z-50 transition-[background-color,border-color,backdrop-filter,transform] duration-500 ease-out",
                isWorkOpen || isScrolled
                    ? isDark
                        ? "sticky top-0 border-b border-white/10 bg-brand-dark/80 backdrop-blur-xl"
                        : "sticky top-0 border-b border-black/10 bg-brand-light/80 backdrop-blur-xl"
                    : "absolute inset-x-0 top-0 border-b border-transparent bg-transparent backdrop-blur-0",
            ].join(" ")}
        >
            <div className="mx-auto max-w-7xl px-6">
                <nav className="relative flex h-20 items-center justify-between gap-6 transition-all duration-500 ease-out">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4FF00] text-sm font-black text-[#121212] shadow-[0_0_18px_rgba(212,255,0,0.35)]">
                            D
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-semibold tracking-[-0.04em] text-white">
                                Dira Okta
                            </span>
                            <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                                Product Designer
                            </span>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-8 text-sm text-white/75 md:flex">
                        <div className="relative" data-work-menu>
                            <button
                                type="button"
                                onClick={() => setIsWorkOpen((prev) => !prev)}
                                className="flex items-center gap-2 rounded-full px-2 py-1.5 transition hover:text-white"
                            >
                                <span>Work</span>
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    aria-hidden="true"
                                    className={[
                                        "h-4 w-4 transition-transform duration-200",
                                        isWorkOpen ? "rotate-180" : "",
                                    ].join(" ")}
                                >
                                    <path
                                        d="M5 7.5L10 12.5L15 7.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {isWorkOpen && (
                                <div className="fixed inset-x-0 top-20 z-40 bg-brand-dark">
                                    <div className="absolute inset-0 h-screen bg-brand-dark/80 backdrop-blur-[10px]" />
                                    <div className="relative">
                                        <div className="backdrop-blur-xl">
                                            <div className="mx-auto max-w-7xl py-8">
                                                <div className="grid gap-4 md:grid-cols-3">
                                                    {workItems.map((item) => (
                                                        <a
                                                            key={item.title}
                                                            href={item.href}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="group/item overflow-hidden rounded-2xl border border-white/10 bg-white/3 text-left transition hover:border-white/20 hover:bg-white/5"
                                                        >
                                                            <div className={`h-32 bg-gradient-to-br ${item.accent}`}>
                                                                <div className="flex h-full items-center justify-center text-xl font-bold text-white/80">
                                                                    {item.title.split(" ")[0].slice(0, 2).toUpperCase()}
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2 p-4">
                                                                <div className="flex items-center justify-between gap-3">
                                                                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                                                    <span className="text-white/50 transition group-hover/item:text-[#D4FF00]">↗</span>
                                                                </div>
                                                                <p className="text-sm leading-6 text-white/60">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/#services" className="transition hover:text-white">
                            Services
                        </Link>
                        <Link href="/about" className="transition hover:text-white">
                            About
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            aria-label="Toggle color mode"
                            onClick={toggleTheme}
                            className={[
                                "hidden h-11 w-11 items-center justify-center rounded-full border md:flex",
                                isDark
                                    ? "border-white/15 bg-white/3 text-white hover:bg-white/6"
                                    : "border-black/15 bg-black/5 text-[#121212] hover:bg-black/10",
                            ].join(" ")}
                        >
                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
                                <path
                                    d="M12 3.75V2.5M12 21.5V20.25M18.75 5.25L19.75 4.25M4.25 19.75L5.25 18.75M20.25 12H21.5M2.5 12H3.75M18.75 18.75L19.75 19.75M4.25 4.25L5.25 5.25M12 7.25C9.66 7.25 7.75 9.16 7.75 11.5C7.75 13.84 9.66 15.75 12 15.75C14.34 15.75 16.25 13.84 16.25 11.5C16.25 9.16 14.34 7.25 12 7.25Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>

                        <Button href="https://example.com" variant={isDark ? "ghost" : "secondary"} target="_blank" rel="noreferrer">
                            Lets Talk
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
