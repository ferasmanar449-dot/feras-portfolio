import { ArrowUp, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="border-t border-[var(--border)]">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-lg font-bold text-[var(--foreground)]">
                            Feras<span className="text-[var(--primary)]">.</span>
                        </p>

                        <p className="mt-2 text-sm text-[var(--muted)]">
                            Mobile & Full-Stack Developer
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="mailto:ferasmanar449@gmail.com"
                            aria-label="Email Feras"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        >
                            <Mail size={18} />
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
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        >
                            <ArrowUp size={18} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-[var(--border)] pt-6">
                    <p className="text-sm text-[var(--muted)]">
                        © {new Date().getFullYear()} Feras Alhreibat. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}