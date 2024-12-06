import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  http = inject(HttpClient);

  getAll() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getById(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
