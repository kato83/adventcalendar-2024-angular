import { Component, inject } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import { Post } from '../../model/post.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: Post[] = [];
  loading = true;

  postsService = inject(PostsService);

  constructor() {
    this.postsService.getAll().subscribe({
      next: (posts) => {
        this.posts = posts
      },
      error: (err) => {
        console.error(err)
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
