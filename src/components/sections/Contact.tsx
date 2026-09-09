import {
    ArrowUpRight,
    Mail,
    MapPin,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
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

                        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
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
                                    <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                                        I&apos;m open to opportunities, freelance projects,
                                        collaborations, and conversations around mobile and
                                        full-stack development.
                                    </p>
                                </Reveal>

                                <Reveal delay={260}>
                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <a
                                            href="mailto:ferasmanar449@gmail.com"
                                            className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] hover:shadow-lg"
                                        >
                                            <Mail size={18} />
                                            Send Email
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/feras-alhribat-3b6873353"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-6 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]"
                                        >
                                            <FaLinkedinIn size={18} />
                                            LinkedIn
                                            <ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Right */}
                            <div className="space-y-4">
                                <Reveal delay={160}>
                                    <a
                                        href="mailto:ferasmanar449@gmail.com"
                                        className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-5 transition-all duration-300 hover:border-[var(--primary)]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)]">
                                                <Mail size={20} />
                                            </div>

                                            <div>
                                                <p className="text-xs text-[var(--muted)]">
                                                    Email
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-[var(--foreground)] sm:text-base">
                                                    ferasmanar449@gmail.com
                                                </p>
                                            </div>
                                        </div>

                                        <ArrowUpRight
                                            size={18}
                                            className="text-[var(--muted)] transition-colors group-hover:text-[var(--primary)]"
                                        />
                                    </a>
                                </Reveal>

                                <Reveal delay={240}>
                                    <a
                                        href="https://www.linkedin.com/in/feras-alhribat-3b6873353"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-5 transition-all duration-300 hover:border-[var(--primary)]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)]">
                                                <FaLinkedinIn size={20} />
                                            </div>

                                            <div>
                                                <p className="text-xs text-[var(--muted)]">
                                                    LinkedIn
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-[var(--foreground)] sm:text-base">
                                                    Connect with me
                                                </p>
                                            </div>
                                        </div>

                                        <ArrowUpRight
                                            size={18}
                                            className="text-[var(--muted)] transition-colors group-hover:text-[var(--primary)]"
                                        />
                                    </a>
                                </Reveal>

                                <Reveal delay={320}>
                                    <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-5">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)]">
                                            <MapPin size={20} />
                                        </div>

                                        <div>
                                            <p className="text-xs text-[var(--muted)]">
                                                Location
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[var(--foreground)] sm:text-base">
                                                Amman, Jordan
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