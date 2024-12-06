import { Component, inject, Input, input, OnInit } from '@angular/core';
import { PostsService } from '../../../service/posts.service';
import { Post } from '../../../model/post.model';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  #id?: number;
  post?: Post;
  loading = true;

  postsService = inject(PostsService);

  @Input({ required: true })
  set id(id: number | undefined) {
    this.#id = id;
    if (!id) return;
    this.postsService.getById(id).subscribe({
      next: (post) => {
        this.post = post;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  get id() {
    return this.#id;
  }
}
