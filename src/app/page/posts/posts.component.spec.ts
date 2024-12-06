import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
