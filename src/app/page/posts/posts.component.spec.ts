import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Post } from '../../model/post.model';
import { provideRouter } from '@angular/router';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    })
      .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('コンポーネント作成できるか', () => {
    expect(component).toBeTruthy();
  });

  it('初期段階で 読込中…… が表示されるか', () => {
    const { nativeElement }: { nativeElement: HTMLElement } = fixture;
    expect(nativeElement.textContent).toContain('読込中……');
  });

  it('PostsService で取得した配列データが空の際の表示考慮ができているか', () => {
    const posts: Post[] = [];

    // Httpリクエストの期待値を設定
    const request = httpTestingController.expectOne({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts' })
    request.flush(posts);
    fixture.detectChanges();

    const { nativeElement }: { nativeElement: HTMLElement } = fixture;
    expect(nativeElement.querySelector('li')?.textContent).toEqual('データがありません');

    httpTestingController.verify();
  });

  it('PostsService で取得した値を表示できているか', () => {
    const posts: Post[] = [
      {
        id: 1,
        userId: 1,
        title: 'タイトル',
        body: '本文',
      },
    ];

    // Httpリクエストの期待値を設定
    const request = httpTestingController.expectOne({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts' });
    request.flush(posts);
    fixture.detectChanges();

    const { nativeElement }: { nativeElement: HTMLElement } = fixture;
    expect(nativeElement.textContent).toContain('1: タイトル');
    expect(nativeElement.querySelector('a')?.getAttribute('href')).toEqual('/posts/1');

    httpTestingController.verify();
  });
});
