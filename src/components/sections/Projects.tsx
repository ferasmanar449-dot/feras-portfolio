import { CheckCircle2, Layers3, Radio, ShieldCheck, Smartphone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

const projectIcons = [Smartphone, Radio, Layers3];

export function Projects() {
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
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:[&>*:last-child]:col-span-2 lg:[&>*:last-child]:col-span-1">
                    {projects.map((project, index) => {
                        const Icon = projectIcons[index] ?? Smartphone;

                        return (
                            <Reveal
                                key={project.title}
                                delay={120 + index * 90}
                                className="h-full"
                            >
                                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--primary)] hover:shadow-2xl hover:shadow-[var(--primary)]/5 sm:p-8">
                                    {/* Ambient Glow */}
                                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                                    <div className="relative">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-secondary)] text-[var(--primary)] transition-transform duration-300 group-hover:scale-105">
                                                <Icon size={22} />
                                            </div>

                                            <span className="rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                                                Production
                                            </span>
                                        </div>

                                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                                            {project.category}
                                        </p>

                                        <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-[var(--foreground)]">
                                            {project.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                                            {project.description}
                                        </p>

                                        <div className="mt-7">
                                            <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                                                Key Contributions
                                            </p>

                                            <ul className="space-y-3">
                                                {project.contributions.map((item) => (
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

                                    <div className="relative mt-8 border-t border-[var(--border)]/60 pt-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="cursor-default rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-1 text-xs font-medium text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--surface)] hover:text-[var(--primary)]"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Enterprise Disclosure Card */}
                <Reveal delay={200}>
                    <div className="mt-12 flex items-start gap-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm backdrop-blur-sm sm:items-center sm:px-5 sm:py-3.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                            <ShieldCheck size={18} />
                        </div>
                        <p className="text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                            <span className="font-semibold text-[var(--foreground)]">Enterprise Disclosure:</span>{" "}
                            Project details and architecture are presented at a high level to respect corporate confidentiality and proprietary implementation details.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}