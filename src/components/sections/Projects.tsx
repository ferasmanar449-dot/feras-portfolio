import { ArrowUpRight, Layers3, Smartphone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function Projects() {
    const [featuredProject, ...otherProjects] = projects;

    return (
        <section
            id="projects"
            className="border-t border-[var(--border)] py-24 sm:py-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                            Featured Projects
                        </p>
                    </Reveal>

                    <Reveal delay={100}>
                        <h2 className="text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                            Enterprise applications built for real users.
                        </h2>
                    </Reveal>

                    <Reveal delay={180}>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                            Selected production projects where I contributed to mobile
                            development, API integration, architecture, performance,
                            troubleshooting, and application delivery.
                        </p>
                    </Reveal>
                </div>

                {/* Projects Grid */}
                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    {/* Featured Project */}
                    <Reveal delay={120}>
                        <article className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-xl sm:p-8">
                            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-secondary)] text-[var(--primary)]">
                                        <Smartphone size={22} />
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>

                                <p className="mt-10 text-sm font-medium text-[var(--primary)]">
                                    {featuredProject.category}
                                </p>

                                <h3 className="mt-2 text-3xl font-bold tracking-[-0.02em] text-[var(--foreground)]">
                                    {featuredProject.title}
                                </h3>

                                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
                                    {featuredProject.description}
                                </p>

                                <div className="mt-8">
                                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                                        Key Contributions
                                    </p>

                                    <ul className="space-y-4">
                                        {featuredProject.contributions.map((item) => (
                                            <li
                                                key={item}
                                                className="flex gap-3 text-sm leading-7 text-[var(--muted)] sm:text-base"
                                            >
                                                <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-2">
                                    {featuredProject.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </Reveal>

                    {/* Other Projects */}
                    {otherProjects.map((project, index) => (

                        <Reveal
                            key={project.title}
                            delay={180 + index * 100}
                            className="group rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-xl sm:p-8"
                        >
                            <article className="flex items-start justify-between gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--surface-secondary)] text-[var(--primary)]">
                                    <Layers3 size={21} />
                                </div>

                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]">
                                    <ArrowUpRight size={17} />
                                </div>
                            </article>

                            <p className="mt-7 text-sm font-medium text-[var(--primary)]">
                                {project.category}
                            </p>

                            <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-[var(--foreground)]">
                                {project.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                                {project.description}
                            </p>

                            <ul className="mt-6 space-y-3">
                                {project.contributions.slice(0, 3).map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                                    >
                                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-7 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    ))}
                </div>

                <p className="mt-8 text-sm leading-6 text-[var(--muted)]">
                    Project details are presented at a high level to respect enterprise
                    confidentiality and proprietary implementation details.
                </p>
            </div>
        </section>
    );
}