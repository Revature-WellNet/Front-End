import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Userpost } from 'src/app/models/userpost';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  user!: User;
  posts: Userpost[] = [];
  post!: Userpost;
  newComment: boolean = false;
  showPost: boolean = false;
  showComment: boolean = false;
  showNewPost: boolean = false;
  postSize: string = '52vh';
  newPostSize: string = '70vh';
  postTitle!: string | null;
  postBody!: string | null;
  commentBody!: string | null;

  constructor(
    private postService : PostService,
    private commentService : CommentService,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.getPosts();

    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    this.userService.getUser(userData.id).subscribe(
      (response : User) => {
        this.user = response;
      }
    );
  }

  getPosts() {
    this.posts = [];
    this.postService.findAllPost().subscribe(
      (p : Post[]) => {
        p.forEach(
          (i: Post) => {
            this.userService.getUser(i.authorId).subscribe(
              (u: User) => {
                var userpost: Userpost = {
                  pId: i.pId,
                  title: i.title,
                  description: i.description,
                  posted: i.posted,
                  authorId: i.authorId,
                  author: u
                }
                this.posts.unshift(userpost);
              }
            );
          }
        );
      }
    );
  }

  onClick(post: Userpost) {
    this.showPost = true;
    this.showNewPost = false;
    this.post = post;
  }

  back() {
    this.showPost = false;
    this.showComment = false;
    this.showNewPost = false;
    this.postSize = '52vh';
    this.newPostSize = '70vh';
    this.postBody = null;
    this.postTitle = null;
    this.commentBody = null;
  }

  addComment() {
    this.postSize = '36vh';
    this.showComment = true;
  }

  submitComment() {
    var comment: Comment = {
      cId: 0,
      body: this.commentBody,
      created: new Date(),
      authorId: this.user.id,
      root: this.post
    }

    this.commentService.addComment(comment).subscribe(
      () => {
        this.newComment = true;
      }
    );
    this.newComment = false;
    this.commentBody = null;
    this.showComment = false;
    this.postSize = '52vh';
  }

  addPost() {
    this.showNewPost = true;
    this.newPostSize = '45vh';
  }

  submitPost() {
    var post: Post = {
      pId: 0,
      title: this.postTitle,
      posted: new Date(),
      description: this.postBody,
      authorId: this.user.id
    }

    this.postService.addPost(post).subscribe(
      () => {
        this.getPosts();
      }
    );
    this.postBody = null;
    this.postTitle = null;
    this.showNewPost = false;
    this.newPostSize = '70vh';
  }

}
