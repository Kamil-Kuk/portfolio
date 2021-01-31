import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/post.model';
import {PostsService} from '../../service/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
