export interface Experience {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    current?: boolean;
    description: string[];
    technologies: string[];
}