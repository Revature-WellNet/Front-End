import { Comment } from "./comment";
import { User } from "./user";

export interface Usercomment extends Comment {
    author: User
}
