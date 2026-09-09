"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "@teispace/next-themes";

const emptySubscribe = () => () => { };

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false,
    );

    if (!mounted) {
        return (
            <div
                className="h-10 w-10 rounded-full border border-[var(--border)]"
                aria-hidden="true"
            />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-[var(--border)]
        bg-[var(--surface)]
        text-[var(--foreground)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-[var(--primary)]
        hover:text-[var(--primary)]
        active:translate-y-0
      "
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}