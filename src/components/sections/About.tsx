import { Reveal } from "@/components/ui/Reveal";
import {
    Layout,
    Layers3,
    Smartphone,
    Server,
} from "lucide-react";

const highlights = [
    {
        title: "Mobile Development",
        skills: ["Flutter", "Dart", "BLoC/Cubit"],
        icon: Smartphone,
    },
    {
        title: "Frontend Engineering",
        skills: ["Responsive UI", "Reusable Components"],
        icon: Layout,
    },
    {
        title: "Backend & Integration",
        skills: [".NET", "C#", "REST APIs", "SQL"],
        icon: Server,
    },
    {
        title: "Architecture",
        skills: ["Clean Architecture", "Feature-Based Structure"],
        icon: Layers3,
    },
];

export function About() {
    return (
        <section
            id="about"
            className="border-t border-[var(--border)] py-24 sm:py-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-center">
                    {/* Left side */}
                    <div>
                        <Reveal>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                                About Me
                            </p>
                        </Reveal>

                        <Reveal delay={100}>
                            <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                                Engineering software with structure, usability, and real-world impact.
                            </h2>
                        </Reveal>

                        <Reveal delay={180}>
                            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
                                <p>
                                    I&apos;m a Computer Engineering graduate from the University
                                    of Jordan and a Mobile &amp; Full-Stack Developer with
                                    experience across mobile development, frontend engineering,
                                    API integration, and production support.
                                </p>

                                <p>
                                    My journey started during university, where I built a strong
                                    foundation in both software and hardware through subjects such
                                    as Java, Python, C++, operating systems, data structures,
                                    networks, security, embedded systems, electronics, and
                                    computer organization. For my graduation project, I worked
                                    with a team to build a mental health care application using
                                    Flutter and Firebase, designed to make it easier for users to
                                    connect with doctors and access treatment.
                                </p>

                                <p>
                                    I later gained practical experience through SHAI for AI and
                                    ProgressSoft, where I strengthened my frontend and Flutter
                                    development skills. Today, at Zain Jordan, I work on production
                                    mobile applications using Flutter, BLoC, Clean Architecture,
                                    REST APIs, and related backend technologies such as .NET, C#,
                                    and SQL.
                                </p>

                                <p>
                                    I enjoy building reliable mobile experiences, solving
                                    production issues, working with cross-functional teams, and
                                    continuously improving the structure, maintainability, and
                                    quality of the applications I work on.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right side - 4 Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Reveal
                                    key={item.title}
                                    delay={120 + index * 80}
                                    className="h-full"
                                >
                                    <div
                                        className="
                                            group flex h-full flex-col justify-between
                                            rounded-3xl border border-[var(--border)]
                                            bg-[var(--surface)] p-6
                                            transition-all duration-300
                                            hover:-translate-y-1
                                            hover:border-[var(--primary)]
                                            hover:shadow-xl hover:shadow-[var(--primary)]/5
                                        "
                                    >
                                        <div>
                                            <div
                                                className="
                                                    flex h-12 w-12 items-center justify-center
                                                    rounded-2xl border border-[var(--border)]
                                                    bg-[var(--surface-secondary)]
                                                    text-[var(--primary)]
                                                    transition-all duration-300
                                                    group-hover:scale-105 group-hover:bg-[var(--primary)] group-hover:text-white
                                                "
                                            >
                                                <Icon size={22} />
                                            </div>

                                            <h3 className="mt-5 text-base font-bold text-[var(--foreground)]">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <div className="mt-5 flex flex-wrap gap-1.5">
                                            {item.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="
                                                        inline-flex items-center rounded-lg
                                                        border border-[var(--border)]
                                                        bg-[var(--surface-secondary)]
                                                        px-2.5 py-1 text-xs font-medium
                                                        text-[var(--foreground)]
                                                        transition-colors
                                                        group-hover:border-[var(--primary)]/30
                                                    "
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}