import {
    Blocks,
    Code2,
    Database,
    GitBranch,
    Server,
    Smartphone,
} from "lucide-react";

import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";

const categoryIcons = {
    "Mobile Development": Smartphone,
    "Frontend & Architecture": Blocks,
    "Backend & Integration": Server,
    Databases: Database,
    "Tools & DevOps": GitBranch,
    "Software Engineering": Code2,
};

export function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-[var(--border)] py-24 sm:py-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                            Skills &amp; Technologies
                        </p>
                    </Reveal>

                    <Reveal delay={100}>
                        <h2 className="text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                            Technologies and engineering practices I use to build reliable software.
                        </h2>
                    </Reveal>

                    <Reveal delay={180}>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                            My strongest experience is in mobile and frontend development
                            with Flutter, supported by hands-on experience in API
                            integration, backend technologies, databases, architecture,
                            and production software support.
                        </p>
                    </Reveal>
                </div>

                {/* Skills Grid */}
                <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, index) => {
                        const Icon =
                            categoryIcons[
                            category.title as keyof typeof categoryIcons
                            ] ?? Code2;

                        return (
                            <Reveal
                                key={category.title}
                                delay={120 + index * 80}
                                className="h-full"
                            >
                                <article
                                    className="
                                        group flex h-full flex-col justify-between
                                        rounded-[2rem] border border-[var(--border)]
                                        bg-[var(--surface)] p-7 transition-all duration-300
                                        hover:-translate-y-1.5 hover:border-[var(--primary)]
                                        hover:shadow-2xl hover:shadow-[var(--primary)]/5 sm:p-8
                                    "
                                >
                                    <div>
                                        <div className="flex items-start justify-between gap-4">
                                            <div
                                                className="
                                                    flex h-12 w-12 items-center justify-center
                                                    rounded-2xl bg-[var(--surface-secondary)]
                                                    text-[var(--primary)] transition-transform duration-300
                                                    group-hover:scale-105
                                                "
                                            >
                                                <Icon size={22} />
                                            </div>

                                            <span className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                                                {category.skills.length} skills
                                            </span>
                                        </div>

                                        <h3 className="mt-6 text-xl font-bold text-[var(--foreground)]">
                                            {category.title}
                                        </h3>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="
                                                    cursor-default rounded-full border border-[var(--border)]
                                                    bg-[var(--surface-secondary)] px-3 py-1.5
                                                    text-xs sm:text-sm font-medium text-[var(--foreground)]
                                                    transition-all duration-200
                                                    hover:-translate-y-0.5 hover:border-[var(--primary)]
                                                    hover:bg-[var(--surface)] hover:text-[var(--primary)]
                                                "
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}