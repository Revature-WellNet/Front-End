import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string = 'http://localhost:8082/post';

  constructor(private http : HttpClient) { }

  findAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  findPostById(id: number): Observable<Post> {
    return this.http.get<Post>(this.url + '/' + id);
  }

  findCommentsByPost(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://localhost:8082/comments/' + id);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url + '/add', post);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(this.url + '/' + id, post);
  }

  deletPost(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }
}
