import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url: string = 'http://localhost:8082/comments';

  constructor(private http : HttpClient) { }

  findAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url);
  }

  findCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>(this.url + '/' + id);
  }

  findCommentByUser(user: User): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://localhost:8082/user' + user);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.url + '/add', comment);
  }

  updateComment(id: number, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(this.url + '/' + id, comment);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }
}
