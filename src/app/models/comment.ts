import { Post } from "./post";
import { User } from "./user";

export interface Comment {
    cId?: number;
    body: string | null;
    created: Date;
    author: User | null;
    root: Post;
}
