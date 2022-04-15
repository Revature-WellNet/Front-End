import { Comment } from "@angular/compiler";

export interface Post {
    pId: number;
    title: string;
    description: string;
    posted: Date;
    // comments: Comment[];
    author: string;
}
