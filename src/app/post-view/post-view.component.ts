import { Component, OnInit } from '@angular/core';
import {PostService} from '../../app/services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  posts: any[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.posts;
  }
  onSave() {
    this.postService.savePosts();
  }
  onFetch() {
    this.postService.fetchPosts();
  }
  
}
