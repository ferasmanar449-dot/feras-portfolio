import {
    BookOpen,
    CheckCircle2,
    GraduationCap,
    MapPin,
    Smartphone,
    Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const coursework = [
    "Data Structures",
    "Operating Systems",
    "Networks & Security",
    "Artificial Intelligence",
    "Embedded Systems",
    "Computer Organization",
    "Digital Logic",
    "Parallel Computing",
];

const projectContributions = [
    "Contributed across the project as part of the development team.",
    "Helped build the mobile application using Flutter.",
    "Used Firebase for backend-related application services.",
    "Worked on the overall user experience and core application flows.",
    "Applied software engineering concepts learned throughout the Computer Engineering program.",
];

const projectTechnologies = [
    "Flutter",
    "Firebase",
    "Dart",
    "Mobile Development",
    "Team Collaboration",
];

export function Education() {
    return (
        <section
            id="education"
            className="border-t border-[var(--border)] py-24 sm:py-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                            Education &amp; Academics
                        </p>
                    </Reveal>

                    <Reveal delay={100}>
                        <h2 className="text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                            Academic foundation and engineering background.
                        </h2>
                    </Reveal>

                    <Reveal delay={180}>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                            Degree coursework, foundational software &amp; hardware disciplines,
                            and my team graduation project.
                        </p>
                    </Reveal>
                </div>

                {/* Grid of Education & Graduation Project */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {/* Degree & Coursework Card */}
                    <Reveal delay={120} className="h-full">
                        <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--primary)] hover:shadow-2xl hover:shadow-[var(--primary)]/5 sm:p-8">
                            <div className="relative">
                                {/* Top Badges */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-secondary)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105">
                                        <GraduationCap size={24} />
                                    </div>

                                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3.5 py-1 text-xs font-semibold text-[var(--primary)]">
                                        2020 – 2025
                                    </span>
                                </div>

                                {/* Degree Titles */}
                                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                                    Bachelor&apos;s Degree
                                </p>

                                <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-[var(--foreground)] sm:text-3xl">
                                    Computer Engineering
                                </h3>

                                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-[var(--foreground)]">
                                    <span className="text-base font-semibold text-[var(--foreground)]">
                                        University of Jordan
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                                        <MapPin size={14} className="text-[var(--primary)]" />
                                        Amman, Jordan
                                    </span>
                                </div>

                                {/* Overview */}
                                <p className="mt-5 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-7">
                                    Studied Computer Engineering with a strong foundation across both
                                    software and hardware disciplines. Coursework included programming,
                                    data structures, operating systems, networks, security, artificial
                                    intelligence, embedded systems, computer organization, electronics,
                                    digital logic, signals, probability, and parallel computing.
                                </p>

                                {/* Key Disciplines List */}
                                <div className="mt-7">
                                    <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                                        <BookOpen size={14} className="text-[var(--primary)]" />
                                        <span>Key Academic Disciplines</span>
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {coursework.map((course) => (
                                            <span
                                                key={course}
                                                className="cursor-default rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3.5 py-1.5 text-xs font-medium text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--surface)] hover:text-[var(--primary)]"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer Badge */}
                            <div className="relative mt-8 border-t border-[var(--border)]/60 pt-5">
                                <span className="inline-flex items-center gap-2 text-xs font-medium text-[var(--muted)]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    Computer Engineering Graduate (2025)
                                </span>
                            </div>
                        </article>
                    </Reveal>

                    {/* Graduation Project Card */}
                    <Reveal delay={200} className="h-full">
                        <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--primary)] hover:shadow-2xl hover:shadow-[var(--primary)]/5 sm:p-8">
                            <div className="relative">
                                {/* Top Badges */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-secondary)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105">
                                        <Smartphone size={22} />
                                    </div>

                                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3.5 py-1 text-xs font-semibold text-[var(--primary)]">
                                        Graduation Project
                                    </span>
                                </div>

                                {/* Project Titles */}
                                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                                    Mobile Healthcare Solution
                                </p>

                                <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-[var(--foreground)] sm:text-3xl">
                                    Mental Health Care Application
                                </h3>

                                <div className="mt-2 flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                                    <span className="flex items-center gap-1 text-xs font-semibold text-[var(--primary)]">
                                        <Sparkles size={14} />
                                        Team Project
                                    </span>
                                    <span className="text-xs text-[var(--muted)]">
                                        • University of Jordan
                                    </span>
                                </div>

                                {/* Overview */}
                                <p className="mt-5 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-7">
                                    Developed as a team project using Flutter and Firebase, with the goal
                                    of making it easier for users to connect with mental health
                                    professionals and access treatment-related services through a mobile
                                    application.
                                </p>

                                {/* Key Contributions */}
                                <div className="mt-7">
                                    <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                                        Key Contributions
                                    </p>

                                    <ul className="space-y-3">
                                        {projectContributions.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--muted)] sm:text-sm"
                                            >
                                                <CheckCircle2
                                                    size={15}
                                                    className="mt-0.5 shrink-0 text-[var(--primary)]"
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Technologies Footer */}
                            <div className="relative mt-8 border-t border-[var(--border)]/60 pt-6">
                                <div className="flex flex-wrap gap-2">
                                    {projectTechnologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="cursor-default rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-1 text-xs font-medium text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--surface)] hover:text-[var(--primary)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}