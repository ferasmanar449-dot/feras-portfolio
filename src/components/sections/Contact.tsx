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
            className="w-full overflow-hidden border-t border-[var(--border)] py-16 sm:py-24 lg:py-28"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal className="w-full min-w-0 max-w-full">
                    <div className="relative w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:rounded-[2.5rem] sm:p-8 lg:p-14">
                        <div className="grid w-full min-w-0 max-w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
                            {/* Left Column */}
                            <div className="w-full min-w-0 max-w-full">
                                <Reveal delay={80} className="w-full min-w-0">
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:mb-4 sm:text-sm">
                                        Contact
                                    </p>
                                </Reveal>

                                <Reveal delay={140} className="w-full min-w-0">
                                    <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                                        Let&apos;s build something meaningful together.
                                    </h2>
                                </Reveal>

                                <Reveal delay={200} className="w-full min-w-0">
                                    <div className="mt-4 space-y-3 text-xs leading-relaxed text-[var(--muted)] sm:mt-6 sm:space-y-4 sm:text-base sm:leading-8">
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

                                <Reveal delay={260} className="w-full min-w-0">
                                    <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
                                        <a
                                            href="mailto:ferasmanar449@gmail.com"
                                            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] hover:shadow-lg active:translate-y-0 sm:h-12 sm:w-auto"
                                        >
                                            <Mail size={17} />
                                            <span>Send Email</span>
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/feras-alhribat-3b6873353"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-6 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)] active:translate-y-0 sm:h-12 sm:w-auto"
                                        >
                                            <FaLinkedinIn size={16} />
                                            <span>Connect on LinkedIn</span>
                                            <ArrowUpRight size={15} />
                                        </a>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Right Column - Contact Cards */}
                            <div className="w-full min-w-0 max-w-full space-y-3 sm:space-y-4">
                                {/* Email Card */}
                                <Reveal delay={160} className="w-full min-w-0">
                                    <div className="group w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-3.5 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-md sm:p-5">
                                        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <a
                                                href="mailto:ferasmanar449@gmail.com"
                                                className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4"
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                                                    <Mail size={19} />
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                        Email
                                                    </p>

                                                    <p className="mt-0.5 break-all text-xs font-semibold text-[var(--foreground)] sm:break-normal sm:text-sm md:text-base">
                                                        ferasmanar449@gmail.com
                                                    </p>
                                                </div>
                                            </a>

                                            <div className="flex shrink-0 items-center justify-end gap-2 border-t border-[var(--border)]/50 pt-2.5 sm:border-t-0 sm:pt-0">
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
                                <Reveal delay={220} className="w-full min-w-0">
                                    <a
                                        href="https://www.linkedin.com/in/feras-alhribat-3b6873353"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex w-full min-w-0 max-w-full items-center justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-3.5 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-md sm:p-5"
                                    >
                                        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                                                <FaLinkedinIn size={19} />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                    LinkedIn
                                                </p>

                                                <p className="mt-0.5 truncate text-xs font-semibold text-[var(--foreground)] sm:text-sm md:text-base">
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
                                <Reveal delay={280} className="w-full min-w-0">
                                    <div className="flex w-full min-w-0 max-w-full items-center gap-3 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-3.5 sm:gap-4 sm:p-5">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] sm:h-11 sm:w-11">
                                            <MapPin size={19} />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                                                Location
                                            </p>

                                            <p className="mt-0.5 text-xs font-semibold text-[var(--foreground)] sm:text-sm md:text-base">
                                                Amman, Jordan
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Availability Card */}
                                <Reveal delay={340} className="w-full min-w-0">
                                    <div className="flex w-full min-w-0 max-w-full items-start gap-3 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-3.5 sm:items-center sm:gap-4 sm:p-5">
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