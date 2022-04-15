import { Component, OnInit } from '@angular/core';
import { POSTS } from 'src/app/EXAMPLEPOSTS';
import { Post } from 'src/app/models/post';

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
  comment?: string;
  newPost?: string;
  
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
    this.newPost = '';
    this.comment = '';
  }

  addComment() {
    this.postSize = '38vh';
    this.showComment = true;
  }

  submitComment() {
    this.showComment = false;
    this.postSize = '52vh';
  }

  addPost() {
    this.showNewPost = true;
    this.newPostSize = '55vh';
  }

  submitPost() {
    this.showNewPost = false;
    this.newPostSize = '70vh';
  }

}
