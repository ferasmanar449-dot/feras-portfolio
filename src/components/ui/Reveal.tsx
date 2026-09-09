"use client";

import {
    type ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function Reveal({
    children,
    className = "",
    delay = 0,
}: RevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) {
            const animationFrame = requestAnimationFrame(() => {
                setIsVisible(true);
            });

            return () => {
                cancelAnimationFrame(animationFrame);
            };
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.12,
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={elementRef}
            style={{
                transitionDelay: `${delay}ms`,
            }}
            className={`
        transform-gpu
        transition-all duration-700 ease-out
        ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
        ${className}
      `}
        >
            {children}
        </div>
    );
}