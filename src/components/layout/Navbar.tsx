"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    // Detect page scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Detect active section
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter((section): section is Element => section !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio,
                    )[0];

                if (visibleSection) {
                    setActiveSection(`#${visibleSection.target.id}`);
                }
            },
            {
                rootMargin: "-25% 0px -60% 0px",
                threshold: [0, 0.1, 0.25, 0.5],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <header
            className={`
        fixed left-0 top-0 z-50 w-full
        backdrop-blur-xl
        transition-all duration-300
        ${scrolled
                    ? "border-b border-[var(--border)] bg-[var(--background)]/90 shadow-sm"
                    : "border-b border-transparent bg-[var(--background)]/80"
                }
      `}
        >
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <a
                    href="#"
                    onClick={() => setActiveSection("")}
                    className="text-xl font-bold tracking-tight text-[var(--foreground)]"
                >
                    Feras
                    <span className="text-[var(--primary)]">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href;

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveSection(link.href)}
                                aria-current={isActive ? "location" : undefined}
                                className={`
                  relative py-2 text-sm font-medium
                  transition-colors duration-200
                  ${isActive
                                        ? "text-[var(--primary)]"
                                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                                    }
                `}
                            >
                                {link.name}

                                <span
                                    className={`
                    absolute bottom-0 left-0 h-0.5
                    bg-[var(--primary)]
                    transition-all duration-300
                    ${isActive
                                            ? "w-full"
                                            : "w-0"
                                        }
                  `}
                                />
                            </a>
                        );
                    })}

                    <ThemeToggle />
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />

                    <button
                        type="button"
                        onClick={() => setIsOpen((previous) => !previous)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              border border-[var(--border)]
              bg-[var(--surface)]
              text-[var(--foreground)]
              transition-all duration-300
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
            "
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-6 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveSection(link.href);
                                        setIsOpen(false);
                                    }}
                                    aria-current={isActive ? "location" : undefined}
                                    className={`
                    rounded-xl px-3 py-3
                    text-base font-medium
                    transition-all duration-200
                    ${isActive
                                            ? "bg-[var(--surface-secondary)] text-[var(--primary)]"
                                            : "text-[var(--muted)] hover:bg-[var(--surface-secondary)] hover:text-[var(--foreground)]"
                                        }
                  `}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}