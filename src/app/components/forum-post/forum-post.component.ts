import { Component, OnInit } from '@angular/core';
import { COMMENTS } from 'src/app/EXAMPLECOMMENTS';
import { POSTS } from 'src/app/EXAMPLEPOSTS';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  // posts = POSTS;
  posts!: Post[];
  showPost: boolean = false;
  showComment: boolean = false;
  showNewPost: boolean = false;
  post!: Post;
  user!: User;
  postSize: string = '52vh';
  newPostSize: string = '70vh';
  commentBody!: string | null;
  postBody!: string | null;
  postTitle!: string | null;

  constructor(
    private postService : PostService,
    private commentService : CommentService
  ) { }

  ngOnInit(): void {
    this.postService.findAllPost().subscribe(
      (p : Post[]) => {
        this.posts = p;
      }
    );
  }

  onClick(post: Post) {
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
      author: 'user',
      root: this.post.pId
    }
    // COMMENTS.push(comment);

    this.commentService.addComment(comment);
    this.commentBody = null;
    this.showComment = false;
    this.postSize = '52vh';
  }

  addPost() {
    this.showNewPost = true;
    this.newPostSize = '45vh';
  }

  submitPost() {
    this.user = {
      id: '1',
      firstname: 'Jane',
      lastname: 'Doe',
      email: 'test@mail.com',
      role: {
        roleId: 1,
        role: 'nurse'
      }
    }
    var post: Post = {
      pId: 0,
      title: this.postTitle,
      posted: new Date(),
      description: this.postBody,
      author: this.user
    }
    // POSTS.push(post);

    this.postService.addPost(post).subscribe(
      (p: Post) => {
        this.posts.push(p);
      }
    );
    window.alert('Successfully posted');
    this.postBody = null;
    this.postTitle = null;
    this.showNewPost = false;
    this.newPostSize = '70vh';
  }

}