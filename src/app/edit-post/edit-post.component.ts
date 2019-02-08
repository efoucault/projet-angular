import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../../app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  constructor(private postService: PostService,
  			  private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const content = form.value['content'];
    this.postService.addPost(title, content);
    this.router.navigate(['/posts']);
  }

}
