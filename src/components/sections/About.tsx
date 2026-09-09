import { Reveal } from "@/components/ui/Reveal";
import {
    Code2,
    Layers3,
    Smartphone,
    Server,
} from "lucide-react";

const highlights = [
    {
        title: "Mobile Development",
        value: "Flutter + Dart",
        icon: Smartphone,
    },
    {
        title: "Backend",
        value: ".NET + C#",
        icon: Server,
    },
    {
        title: "Architecture",
        value: "Clean Architecture",
        icon: Layers3,
    },
    {
        title: "State Management",
        value: "BLoC + Cubit",
        icon: Code2,
    },
];

export function About() {
    return (
        <section
            id="about"
            className="border-t border-[var(--border)] py-24 sm:py-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                    {/* Left side */}
                    <div>
                        <Reveal>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                                About Me
                            </p>
                        </Reveal>

                        <Reveal delay={100}>
                            <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                                Engineering software with structure and purpose.
                            </h2>
                        </Reveal>

                        <Reveal delay={180}>
                            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
                                <p>
                                    I&apos;m a Mobile & Full-Stack Developer with experience
                                    building and maintaining enterprise applications in production
                                    environments. I specialize in Flutter and Dart for mobile
                                    development, while also working with .NET, C#, SQL, RESTful
                                    APIs, and backend services.
                                </p>

                                <p>
                                    Currently at Zain Jordan, I contribute to enterprise
                                    applications including Zain JO, Zain Events, and Zain Sales.
                                    My work includes responsive UI development, API integration,
                                    reusable components, production troubleshooting, performance
                                    optimization, and collaboration with backend, QA, UX, and
                                    product teams.
                                </p>

                                <p>
                                    I focus on Clean Architecture, BLoC and Cubit state management,
                                    maintainable code, and building reliable software that can grow
                                    with real business requirements.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right side */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {highlights.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Reveal
                                    key={item.title}
                                    delay={120 + index * 80}
                                >
                                    <div
                                        className="
      rounded-3xl
      border border-[var(--border)]
      bg-[var(--surface)]
      p-6
      transition-all duration-300
      hover:-translate-y-1
      hover:border-[var(--primary)]
      hover:shadow-lg
    "
                                    >
                                        <div
                                            className="
        flex h-11 w-11 items-center justify-center
        rounded-2xl
        bg-[var(--surface-secondary)]
        text-[var(--primary)]
      "
                                        >
                                            <Icon size={21} />
                                        </div>

                                        <p className="mt-6 text-sm text-[var(--muted)]">
                                            {item.title}
                                        </p>

                                        <p className="mt-1 text-lg font-semibold text-[var(--foreground)]">
                                            {item.value}
                                        </p>
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