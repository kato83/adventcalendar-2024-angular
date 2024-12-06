import { Routes } from '@angular/router';
import { PostsComponent } from './page/posts/posts.component';
import { PostComponent } from './page/posts/post/post.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'posts',
        children: [
          {
            path: '',
            component: PostsComponent
          },
          {
            path: ':id',
            component: PostComponent,
          }
        ]
      }
    ]
  }
];
