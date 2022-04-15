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
  postID?: number;
  post!: Post;
  size: string = '52vh';
  comment?: string;
  showComment: boolean = false;

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
    this.size = '52vh';
  }

  makeComment() {
    this.size = '38vh';
    this.showComment = true;
  }

  submit() {
    this.showComment = false;
    this.size = '52vh';
  }

}
