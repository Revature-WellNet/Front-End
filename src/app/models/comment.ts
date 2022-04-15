import { Post } from "./post";

export interface Comment {
    cId: number;
    body: string;
    created: Date;
    author: string;
    // root: Post;
}
