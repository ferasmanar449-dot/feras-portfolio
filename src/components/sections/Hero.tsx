import { ArrowRight, Download } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const technologies = ["Flutter", "Dart", ".NET", "C#", "SQL"];

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 px-6 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-10">
                {/* Left side */}
                <div>
                    {/* Role badge */}
                    <div className="hero-enter hero-delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                        Mobile & Full-Stack Developer
                    </div>

                    {/* Heading */}
                    <h1 className="hero-enter hero-delay-2 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl lg:text-[3.6rem] xl:text-[4rem]">
                        Building digital experiences that are
                        <span className="text-[var(--primary)]">
                            {" "}
                            reliable, scalable & clean.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="hero-enter hero-delay-3 mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                        Hi, I&apos;m{" "}
                        <span className="font-semibold text-[var(--foreground)]">
                            Feras Alhreibat
                        </span>
                        . I develop mobile and full-stack applications using Flutter, Dart,
                        .NET, C#, and SQL, with a focus on maintainable architecture and
                        high-quality user experiences.
                    </p>

                    {/* CTA buttons */}
                    <div className="hero-enter hero-delay-4 mt-7 flex flex-wrap items-center gap-4">
                        <a
                            href="#projects"
                            className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] hover:shadow-lg active:translate-y-0"
                        >
                            View Projects
                            <ArrowRight size={17} />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)] active:translate-y-0"
                        >
                            Contact Me
                        </a>

                        <a
                            href="/resume/Feras-Alhribat-CV.pdf"
                            download
                            className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)] active:translate-y-0"
                        >
                            <Download size={17} />
                            Download CV
                        </a>

                        <a
                            href="https://www.linkedin.com/in/feras-alhribat-3b6873353"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Feras Alhreibat on LinkedIn"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)] active:translate-y-0"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>

                    {/* Core technologies */}
                    <div className="hero-enter hero-delay-5 mt-7">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                            Core Technologies
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)]"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="hero-card-enter relative hidden lg:block">
                    <div className="hero-float">
                        {/* Developer card */}
                        <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-2xl shadow-black/5">
                            <div className="rounded-[1.5rem] bg-[var(--surface-secondary)] p-8">
                                {/* Window controls */}
                                <div className="mb-10 flex gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                                </div>

                                {/* Code */}
                                <div className="font-mono text-sm leading-8 text-[var(--muted)]">
                                    <p>
                                        <span className="text-[var(--primary)]">const</span>{" "}
                                        developer = {"{"}
                                    </p>

                                    <p className="pl-5">
                                        name:{" "}
                                        <span className="text-[var(--foreground)]">
                                            &quot;Feras Alhreibat&quot;
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-5">
                                        role:{" "}
                                        <span className="text-[var(--foreground)]">
                                            &quot;Mobile & Full-Stack Developer&quot;
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-5">
                                        mobile:{" "}
                                        <span className="text-[var(--foreground)]">
                                            [&quot;Flutter&quot;, &quot;Dart&quot;]
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-5">
                                        backend:{" "}
                                        <span className="text-[var(--foreground)]">
                                            [&quot;.NET&quot;, &quot;C#&quot;]
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-5">
                                        database:{" "}
                                        <span className="text-[var(--foreground)]">
                                            &quot;SQL&quot;
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-5">
                                        mindset:{" "}
                                        <span className="text-[var(--foreground)]">
                                            &quot;Clean Architecture&quot;
                                        </span>
                                    </p>

                                    <p>{"};"}</p>
                                </div>

                                {/* Profile row */}
                                <div className="mt-10 flex items-center gap-3 border-t border-[var(--border)] pt-6">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] font-bold text-white">
                                        FA
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-[var(--foreground)]">
                                            Feras Alhreibat
                                        </p>

                                        <p className="text-xs text-[var(--muted)]">
                                            Software Development
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile badge */}
                        <div className="absolute -left-10 top-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-lg">
                            <p className="text-xs text-[var(--muted)]">Mobile</p>
                            <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
                                Flutter + Dart
                            </p>
                        </div>

                        {/* Backend badge */}
                        <div className="absolute -right-6 bottom-14 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-lg">
                            <p className="text-xs text-[var(--muted)]">Backend</p>
                            <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
                                .NET + C#
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}