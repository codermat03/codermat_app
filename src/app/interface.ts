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
