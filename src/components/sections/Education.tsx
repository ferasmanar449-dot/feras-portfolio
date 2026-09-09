import { GraduationCap, MapPin } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

export function Education() {
    return (
        <section className="border-t border-[var(--border)] py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                    {/* Heading */}
                    <div>
                        <Reveal>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                                Education
                            </p>
                        </Reveal>

                        <Reveal delay={100}>
                            <h2 className="text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                                The foundation behind my engineering journey.
                            </h2>
                        </Reveal>
                    </div>

                    {/* Education Card */}
                    <Reveal delay={160}>
                        <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-xl sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-secondary)] text-[var(--primary)]">
                                    <GraduationCap size={23} />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-[var(--primary)]">
                                        Bachelor&apos;s Degree
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-[var(--foreground)]">
                                        Computer Engineering
                                    </h3>

                                    <p className="mt-2 text-lg font-medium text-[var(--muted)]">
                                        University of Jordan
                                    </p>

                                    <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-[var(--muted)]">
                                        <span>Graduated 2025</span>

                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={15} />
                                            Amman, Jordan
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}