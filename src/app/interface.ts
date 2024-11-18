export interface service {
    id: number;
    image_url: string;
    title: string;
    short_description: string;
}
export interface Stack {
    id: number;
    name: string;
}
export interface Article {
    id: number;
    title: string;
    image: string;
    description: string;
    category: string;
    subTitle: string;
    cardImage: string;
    content: {
        introduction: string;
        section1: { title: string; body: string };
        section2: { title: string; body: string };
        // Add other sections if necessary
        conclusion: string;
    };
}
export interface StackCardProps {
    stack: {
        stack: {
            id: number;
            name: string;
        };
        technologies: {
            id: number;
            name: string;
            image: string;
        }[];
    };
}

export interface Technology {
    id: number;
    stack: {
        id: number;
        name: string;
    };
    technologies: Array<{
        id: number;
        image: string;
        name: string;
    }>;
}

export interface Project {
    id: number;
    project_name: string;
    image: string;
    description: string;
    technologies: string[];
    requirements?: string;
    approach?: string;
    challenges?: string;
    completionDate?: string;
    liveLink?: string;
    clientCode?: string;
    serverCode?: string;
}
