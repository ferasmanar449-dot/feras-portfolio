"use client";

import { useState } from "react";
import {
    ArrowUpRight,
    Check,
    Copy,
    Globe,
    Mail,
    MapPin,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText("ferasmanar449@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="contact"
            className="border-t border-[var(--border)] py-24 sm:py-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
                        {/* Background decoration */}
                        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
                        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

                        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            {/* Left */}
                            <div>
                                <Reveal delay={80}>
                                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                                        Contact
                                    </p>
                                </Reveal>

                                <Reveal delay={140}>
                                    <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                                        Let&apos;s build something meaningful together.
                                    </h2>
                                </Reveal>

                                <Reveal delay={200}>
                                    <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-[var(--muted)] sm:text-lg">
                                        <p>
                                            I&apos;m open to opportunities in mobile development,
                                            frontend engineering, full-stack development, and software
                                            engineering. I&apos;m especially interested in roles where
                                            I can contribute to real-world products, work with strong
                                            engineering teams, and continue growing across mobile,
                                            backend, and system integration.
                                        </p>

                                        <p>
                                            If you&apos;d like to discuss a role, project, or
                                            collaboration, feel free to get in touch.
                                        </p>
                                    </div>
                                </Reveal>

                                <Reveal delay={260}>
                                    <div className="mt-8 flex flex-wrap items-center gap-4">
                                        <a
                                            href="mailto:ferasmanar449@gmail.com"
                                            className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] hover:shadow-lg active:translate-y-0"
                                        >
                                            <Mail size={18} />
                                            Send Email
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/feras-alhribat-3b6873353"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-6 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)] active:translate-y-0"
                                        >
                                            <FaLinkedinIn size={17} />
                                            Connect on LinkedIn
                                            <ArrowUpRight
                                                size={16}
                                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            />
                                        </a>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Right - Contact Cards */}
                            <div className="space-y-4">
                                <Reveal delay={160}>
                                    <a
                                        href="mailto:ferasmanar449@gmail.com"
                                        className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:shadow-md"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105">
                                                <Mail size={20} />
                                            </div>

                                            <div>
                                                <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                    Email
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-[var(--foreground)] sm:text-base">
                                                    ferasmanar449@gmail.com
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2.5">
                                            <button
                                                type="button"
                                                onClick={handleCopyEmail}
                                                aria-label="Copy email address"
                                                title={copied ? "Copied to clipboard!" : "Copy email"}
                                                className="flex h-8 items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 text-xs font-medium text-[var(--foreground)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                                            >
                                                {copied ? (
                                                    <>
                                                        <Check size={13} className="text-emerald-500" />
                                                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy size={13} />
                                                        <span>Copy</span>
                                                    </>
                                                )}
                                            </button>

                                            <ArrowUpRight
                                                size={18}
                                                className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                                            />
                                        </div>
                                    </a>
                                </Reveal>

                                <Reveal delay={220}>
                                    <a
                                        href="https://www.linkedin.com/in/feras-alhribat-3b6873353"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:shadow-md"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105">
                                                <FaLinkedinIn size={20} />
                                            </div>

                                            <div>
                                                <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                    LinkedIn
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-[var(--foreground)] sm:text-base">
                                                    linkedin.com/in/feras-alhribat-3b6873353
                                                </p>
                                            </div>
                                        </div>

                                        <ArrowUpRight
                                            size={18}
                                            className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                                        />
                                    </a>
                                </Reveal>

                                <Reveal delay={280}>
                                    <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)]">
                                            <MapPin size={20} />
                                        </div>

                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                Location
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[var(--foreground)] sm:text-base">
                                                Amman, Jordan
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal delay={340}>
                                    <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)]">
                                            <Globe size={20} />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                    Availability
                                                </p>
                                                <span className="relative flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                                </span>
                                            </div>

                                            <p className="mt-1 text-xs font-semibold text-[var(--foreground)] sm:text-sm">
                                                Open to opportunities in Jordan, remote, and international roles
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}