import {
    ArrowRight,
    ChevronDown,
    Download,
    Server,
    Smartphone,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const technologies = [
    "Flutter",
    "Dart",
    "BLoC",
    ".NET",
    "C#",
    "SQL",
    "REST APIs",
];

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
                    {/* Role badge with live status indicator */}
                    <div className="hero-enter hero-delay-1 mb-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-2 text-sm font-medium text-[var(--muted)] shadow-sm backdrop-blur-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        <span>Mobile &amp; Full-Stack Developer</span>
                    </div>

                    {/* Heading */}
                    <h1 className="hero-enter hero-delay-2 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl lg:text-[3.6rem] xl:text-[4rem]">
                        Building reliable mobile and full-stack applications
                        <span className="text-[var(--primary)]">
                            {" "}
                            for real-world users.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="hero-enter hero-delay-3 mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                        I&apos;m{" "}
                        <span className="font-semibold text-[var(--foreground)]">
                            Feras Alhreibat
                        </span>
                        , a Mobile &amp; Full-Stack Developer with hands-on experience building
                        and supporting production applications using Flutter, Dart, .NET, C#,
                        SQL, and REST APIs. I specialize in mobile and frontend development,
                        with experience in Clean Architecture, BLoC/Cubit, API integration,
                        production support, and cross-functional software delivery.
                    </p>

                    {/* CTA buttons */}
                    <div className="hero-enter hero-delay-4 mt-7 flex flex-wrap items-center gap-3.5">
                        <a
                            href="#projects"
                            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] hover:shadow-lg active:translate-y-0"
                        >
                            View Projects
                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
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
                            className="group inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)] active:translate-y-0"
                        >
                            <Download
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-y-0.5"
                            />
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
                    <div className="hero-enter hero-delay-5 mt-8">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                            Core Technologies
                        </p>

                        <div className="flex flex-wrap gap-2.5">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="cursor-default rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)] hover:shadow-md"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Down Indicator */}
                    <div className="hero-enter hero-delay-5 mt-10 hidden items-center justify-start lg:flex">
                        <a
                            href="#about"
                            aria-label="Scroll to About section"
                            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
                        >
                            <span>Explore Portfolio</span>
                            <ChevronDown
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-y-0.5"
                            />
                        </a>
                    </div>
                </div>

                {/* Right side */}
                <div className="hero-card-enter relative hidden lg:block">
                    <div className="hero-float">
                        {/* Developer card */}
                        <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-2xl shadow-black/5">
                            <div className="rounded-[1.5rem] bg-[var(--surface-secondary)] p-7">
                                {/* Window controls & file name */}
                                <div className="mb-6 flex items-center justify-between border-b border-[var(--border)]/40 pb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="h-3 w-3 rounded-full bg-red-500/80" />
                                        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                        <span className="h-3 w-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <span className="font-mono text-xs font-medium text-[var(--muted)]">
                                        developer.ts
                                    </span>
                                </div>

                                {/* Code */}
                                <div className="font-mono text-sm leading-8 text-[var(--muted)]">
                                    <p>
                                        <span className="font-semibold text-[var(--primary)]">
                                            const
                                        </span>{" "}
                                        <span className="text-[var(--foreground)]">
                                            developer
                                        </span>{" "}
                                        = {"{"}
                                    </p>

                                    <p className="pl-5">
                                        name:{" "}
                                        <span className="text-emerald-600 dark:text-emerald-400">
                                            &quot;Feras Alhreibat&quot;
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-5">
                                        role:{" "}
                                        <span className="text-emerald-600 dark:text-emerald-400">
                                            &quot;Mobile &amp; Full-Stack Developer&quot;
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-5">
                                        mobile:{" "}
                                        <span className="text-sky-600 dark:text-sky-400">
                                            [&quot;Flutter&quot;, &quot;Dart&quot;]
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-5">
                                        state:{" "}
                                        <span className="text-amber-600 dark:text-amber-400">
                                            &quot;BLoC / Cubit&quot;
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-5">
                                        backend:{" "}
                                        <span className="text-sky-600 dark:text-sky-400">
                                            [&quot;.NET&quot;, &quot;C#&quot;, &quot;SQL&quot;]
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-5">
                                        architecture:{" "}
                                        <span className="text-indigo-600 dark:text-indigo-400">
                                            &quot;Clean Architecture&quot;
                                        </span>
                                    </p>

                                    <p>{"};"}</p>
                                </div>

                                {/* Profile row */}
                                <div className="mt-8 flex items-center gap-3 border-t border-[var(--border)] pt-6">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] font-bold text-white">
                                        FA
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-[var(--foreground)]">
                                            Feras Alhreibat
                                        </p>

                                        <p className="text-xs text-[var(--muted)]">
                                            Mobile &amp; Full-Stack Engineer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile badge */}
                        <div className="absolute -left-8 -top-6 z-10 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 px-4 py-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                                <Smartphone size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--muted)]">Mobile</p>
                                <p className="text-sm font-semibold text-[var(--foreground)]">
                                    Flutter + Dart
                                </p>
                            </div>
                        </div>

                        {/* Backend badge */}
                        <div className="absolute -right-6 bottom-6 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 px-4 py-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                                <Server size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--muted)]">Backend</p>
                                <p className="text-sm font-semibold text-[var(--foreground)]">
                                    .NET + C# + SQL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}