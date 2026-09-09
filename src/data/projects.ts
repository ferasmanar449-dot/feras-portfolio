import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "Zain Events App",
        category: "Enterprise Mobile Application",
        description:
            "A production mobile application supporting Zain events and digital experiences, developed as part of an enterprise software environment.",
        contributions: [
            "Developed production-ready frontend features using Flutter and Dart.",
            "Integrated mobile modules with backend REST APIs.",
            "Improved responsive interfaces and overall user experience.",
            "Supported production releases, maintenance, troubleshooting, and issue resolution.",
        ],
        technologies: [
            "Flutter",
            "Dart",
            "REST APIs",
            "Clean Architecture",
            "BLoC",
        ],
        featured: true,
    },
    {
        title: "Zain JO App Revamp",
        category: "Enterprise Mobile Application",
        description:
            "Contributed to major enhancements of the Zain JO mobile application, focusing on maintainable UI architecture, integrations, performance, and user experience.",
        contributions: [
            "Contributed to enterprise application enhancements and revamped user flows.",
            "Improved API-integrated screens and reusable UI components.",
            "Enhanced application responsiveness and maintainability.",
            "Supported frontend performance optimization and application stability.",
        ],
        technologies: [
            "Flutter",
            "Dart",
            "REST APIs",
            "BLoC",
            "Clean Architecture",
        ],
        featured: true,
    },
    {
        title: "Zain Sales App Revamp",
        category: "Enterprise Business Application",
        description:
            "Worked on enterprise mobile functionality supporting internal business and sales operations.",
        contributions: [
            "Implemented frontend features supporting business operations.",
            "Integrated application functionality with backend services.",
            "Investigated and resolved production software defects.",
            "Improved application usability and maintainability.",
        ],
        technologies: [
            "Flutter",
            "Dart",
            "REST APIs",
            "BLoC",
            "Production Support",
        ],
        featured: true,
    },
];