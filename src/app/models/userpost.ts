import { Post } from "./post";
import { User } from "./user";

export interface Userpost extends Post {
    author: User;
}
