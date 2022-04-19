import { User } from "./user";

export interface Post {
    pId: number;
    title: string | null;
    description: string | null;
    posted: Date;
    author: User;
}
