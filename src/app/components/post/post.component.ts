import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  user!: User;
  @Input() post!: Post;
  @Input() size!: string;
  comments!: Comment[];
  @Input() newComment: boolean = false;
  editPost: boolean = false;
  editComment: boolean = false;
  newTitle!: string | null;
  newDescription!: string | null;
  id!: number;
  newBody!: string;

  constructor(
    private postService : PostService,
    private commentService : CommentService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.getComments();
  }

  ngOnChanges(): void {
    this.getComments();
  }

  getComments() {
    this.postService.findCommentsByPost(this.post.pId).subscribe(
      (c : Comment[]) => {
        this.comments = c;
      }
    );
  }

  editMyPost() {
    this.newTitle = this.post.title;
    this.newDescription = this.post.description;
    this.editPost = true;
    this.size = '47vh';
  }

  updatePost() {
    this.post.title = this.newTitle;
    this.post.description = this.newDescription;
    this.postService.updatePost(this.post.pId, this.post).subscribe(
      () => {
        this.postService.findPostById(this.post.pId);
      }
    );
    this.editPost = false;
    this.size = '52vh';
  }

  deletePost() {
    for(var element of this.comments) {
      var id = element.cId;
      this.commentService.deleteComment(id);
    }
    this.postService.deletePost(this.post.pId);
    this.route.navigate(['/']).then( () => this.route.navigate(['/forum']));
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(
      () => {
        this.getComments();
      }
    );
  }

  editMyComment(id: number, text: string) {
    this.editComment = true;
    this.id = id;
    this.newBody = text;
  }

  updateComment(comment: Comment) {
    comment.body = this.newBody;
    this.commentService.updateComment(this.id, comment).subscribe(
      () => {
        this.getComments();
      }
    );
    this.editComment = false;
  }

  back() {
    this.editComment = false;
    this.editPost = false;
    this.size = '52vh';
  }

}
