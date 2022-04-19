import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Input() size!: string;
  comments!: Comment[];

  constructor(
    private postService : PostService,
    private commentService : CommentService
  ) { }

  ngOnInit(): void {
    this.postService.findCommentsByPost(this.post.pId).subscribe(
      (c : Comment[]) => {
        this.comments = c;
      }
    );
  }

}
