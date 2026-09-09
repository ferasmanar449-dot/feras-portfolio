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
    "Backend Development": Server,
    Architecture: Blocks,
    Databases: Database,
    "DevOps & Tools": GitBranch,
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
                            Skills & Technologies
                        </p>
                    </Reveal>

                    <Reveal delay={100}>
                        <h2 className="text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                            Technologies and practices I use to build reliable software.
                        </h2>
                    </Reveal>

                    <Reveal delay={180}>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                            A practical toolkit covering mobile development, backend systems,
                            architecture, databases, DevOps, and professional software
                            engineering practices.
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
                            >
                                <article
                                    className="
                    group h-full rounded-[2rem]
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    p-7
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--primary)]
                    hover:shadow-xl
                  "
                                >
                                    <div
                                        className="
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      bg-[var(--surface-secondary)]
                      text-[var(--primary)]
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                                    >
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="mt-7 text-xl font-bold text-[var(--foreground)]">
                                        {category.title}
                                    </h3>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="
                          rounded-full
                          border border-[var(--border)]
                          bg-[var(--surface-secondary)]
                          px-3 py-1.5
                          text-sm font-medium
                          text-[var(--foreground)]
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