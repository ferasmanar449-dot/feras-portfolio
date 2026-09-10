import { ArrowUp, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export function Footer() {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--surface)]/50">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Brand & Location */}
                    <div>
                        <a
                            href="#"
                            className="text-xl font-bold tracking-tight text-[var(--foreground)]"
                        >
                            Feras<span className="text-[var(--primary)]">.</span>
                        </a>

                        <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                            Mobile &amp; Full-Stack Developer
                        </p>

                        <p className="mt-1 text-xs text-[var(--muted)]">
                            Amman, Jordan • Open to local &amp; international opportunities
                        </p>
                    </div>

                    {/* Quick navigation */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[var(--muted)] sm:text-sm">
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="transition-colors hover:text-[var(--primary)]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <a
                            href="mailto:ferasmanar449@gmail.com"
                            aria-label="Email Feras"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        >
                            <Mail size={17} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/feras-alhribat-3b6873353"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Feras Alhreibat on LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        >
                            <FaLinkedinIn size={16} />
                        </a>

                        <a
                            href="#"
                            aria-label="Back to top"
                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        >
                            <ArrowUp
                                size={17}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                            />
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-[var(--border)]/60 pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Feras Alhreibat. All rights reserved.
                    </p>

                    <p>
                        Built with Next.js, React &amp; Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}