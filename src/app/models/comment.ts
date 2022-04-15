export interface Comment {
    cId: number;
    body: string | null;
    created: Date;
    author: string;
    root: number;
}
