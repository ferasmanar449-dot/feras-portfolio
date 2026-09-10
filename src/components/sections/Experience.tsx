import { Reveal } from "@/components/ui/Reveal";
import { BriefcaseBusiness, MapPin } from "lucide-react";

import { experiences } from "@/data/experience";

export function Experience() {
    return (
        <section
            id="experience"
            className="border-t border-[var(--border)] py-24 sm:py-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                            Experience
                        </p>
                    </Reveal>

                    <Reveal delay={100}>
                        <h2 className="text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                            Building and supporting production software in real-world environments.
                        </h2>
                    </Reveal>

                    <Reveal delay={180}>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                            Professional experience across enterprise mobile development,
                            full-stack engineering, API integration, production support, and
                            collaborative software delivery.
                        </p>
                    </Reveal>
                </div>

                {/* Timeline */}
                <div className="relative mt-16">
                    {/* Timeline line */}
                    <div className="absolute left-[19px] top-0 hidden h-full w-px bg-[var(--border)] md:block" />

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <Reveal
                                key={`${experience.company}-${experience.role}`}
                                delay={index * 100}
                            >
                                <div className="relative md:pl-16">
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-8 hidden md:flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] shadow-sm">
                                            {experience.current ? (
                                                <span className="relative flex h-3 w-3">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-75" />
                                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--primary)]" />
                                                </span>
                                            ) : (
                                                <div className="h-3 w-3 rounded-full bg-[var(--muted)]/50" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <article className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--primary)] hover:shadow-2xl hover:shadow-[var(--primary)]/5 sm:p-8">
                                        {experience.current && (
                                            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
                                        )}

                                        <div className="relative">
                                            {/* Job Header */}
                                            <div>
                                                <div className="flex items-start gap-4">
                                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-secondary)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105">
                                                        <BriefcaseBusiness size={21} />
                                                    </div>

                                                    <div>
                                                        <h3 className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                                                            {experience.role}
                                                        </h3>

                                                        <p className="mt-1 font-semibold text-[var(--primary)]">
                                                            {experience.company}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Job information */}
                                                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--muted)]">
                                                    <span>
                                                        {experience.startDate} — {experience.endDate}
                                                    </span>

                                                    <span className="flex items-center gap-1.5">
                                                        <MapPin size={15} />
                                                        {experience.location}
                                                    </span>

                                                    {experience.current && (
                                                        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)] bg-[var(--surface-secondary)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                                                            Active Role
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Responsibilities */}
                                            <ul className="mt-8 space-y-4">
                                                {experience.description.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex gap-3 text-sm leading-7 text-[var(--muted)] sm:text-base"
                                                    >
                                                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />

                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Technologies */}
                                            <div className="mt-8 flex flex-wrap gap-2">
                                                {experience.technologies.map((technology) => (
                                                    <span
                                                        key={technology}
                                                        className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] transition-colors group-hover:border-[var(--primary)]/30 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                                                    >
                                                        {technology}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}