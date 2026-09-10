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
            className="border-t border-[var(--border)] py-20 sm:py-28"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 sm:rounded-[2.5rem] sm:p-10 lg:p-16">
                        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
                            {/* Left */}
                            <div>
                                <Reveal delay={80}>
                                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:mb-4 sm:text-sm">
                                        Contact
                                    </p>
                                </Reveal>

                                <Reveal delay={140}>
                                    <h2 className="max-w-3xl text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                                        Let&apos;s build something meaningful together.
                                    </h2>
                                </Reveal>

                                <Reveal delay={200}>
                                    <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-[var(--muted)] sm:mt-6 sm:text-base sm:leading-8">
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
                                    <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                                        <a
                                            href="mailto:ferasmanar449@gmail.com"
                                            className="group inline-flex h-11 items-center gap-2 rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] hover:shadow-lg active:translate-y-0 sm:h-12 sm:px-6"
                                        >
                                            <Mail size={17} />
                                            Send Email
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/feras-alhribat-3b6873353"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex h-11 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)] active:translate-y-0 sm:h-12 sm:px-6"
                                        >
                                            <FaLinkedinIn size={16} />
                                            Connect on LinkedIn
                                            <ArrowUpRight
                                                size={15}
                                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            />
                                        </a>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Right - Contact Cards */}
                            <div className="space-y-3.5 sm:space-y-4">
                                {/* Email Card */}
                                <Reveal delay={160}>
                                    <div className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-4 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-md sm:p-5">
                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <a
                                                href="mailto:ferasmanar449@gmail.com"
                                                className="flex items-center gap-3 min-w-0 sm:gap-4 flex-1"
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                                                    <Mail size={19} />
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                        Email
                                                    </p>

                                                    <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)] break-all sm:break-normal sm:text-base">
                                                        ferasmanar449@gmail.com
                                                    </p>
                                                </div>
                                            </a>

                                            <div className="flex items-center justify-end gap-2 border-t border-[var(--border)]/50 pt-2.5 sm:border-t-0 sm:pt-0 shrink-0">
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
                                                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Copied!</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy size={13} />
                                                            <span>Copy</span>
                                                        </>
                                                    )}
                                                </button>

                                                <a
                                                    href="mailto:ferasmanar449@gmail.com"
                                                    aria-label="Send email"
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                                                >
                                                    <ArrowUpRight size={15} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>

                                {/* LinkedIn Card */}
                                <Reveal delay={220}>
                                    <a
                                        href="https://www.linkedin.com/in/feras-alhribat-3b6873353"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-4 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-md sm:p-5"
                                    >
                                        <div className="flex items-center gap-3 min-w-0 flex-1 sm:gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                                                <FaLinkedinIn size={19} />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                    LinkedIn
                                                </p>

                                                <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)] truncate sm:text-base">
                                                    linkedin.com/in/feras-alhribat-3b6873353
                                                </p>
                                            </div>
                                        </div>

                                        <div className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-all group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]">
                                            <ArrowUpRight size={15} />
                                        </div>
                                    </a>
                                </Reveal>

                                {/* Location Card */}
                                <Reveal delay={280}>
                                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-4 sm:gap-4 sm:p-5">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] sm:h-11 sm:w-11">
                                            <MapPin size={19} />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                Location
                                            </p>

                                            <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)] sm:text-base">
                                                Amman, Jordan
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Availability Card */}
                                <Reveal delay={340}>
                                    <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-4 sm:items-center sm:gap-4 sm:p-5">
                                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] sm:mt-0 sm:h-11 sm:w-11">
                                            <Globe size={19} />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                    Availability
                                                </p>
                                                <span className="relative flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                                </span>
                                            </div>

                                            <p className="mt-1 text-xs font-semibold leading-relaxed text-[var(--foreground)] sm:text-sm">
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