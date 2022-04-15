import { Component, OnInit } from '@angular/core';
import { COMMENTS } from 'src/app/EXAMPLECOMMENTS';
import { POSTS } from 'src/app/EXAMPLEPOSTS';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  posts = POSTS;
  showPost: boolean = false;
  showComment: boolean = false;
  showNewPost: boolean = false;
  post!: Post;
  postSize: string = '52vh';
  newPostSize: string = '70vh';
  commentBody!: string | null;
  postBody!: string | null;
  postTitle!: string | null;

  constructor() { }

  ngOnInit(): void {

  }

  onClick(post: Post) {
    this.showPost = true;
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
      cId: 101,
      body: this.commentBody,
      created: new Date,
      author: 'user',
      root: this.post.pId
    }
    COMMENTS.push(comment);
    this.showComment = false;
    this.postSize = '52vh';
  }

  addPost() {
    this.showNewPost = true;
    this.newPostSize = '45vh';
  }

  submitPost() {
    var post: Post = {
      pId: 100,
      title: this.postTitle,
      posted: new Date,
      description: this.postBody,
      author: 'user'
    }
    POSTS.push(post);
    window.alert('Successfully posted');
    this.showNewPost = false;
    this.newPostSize = '70vh';
  }

}
