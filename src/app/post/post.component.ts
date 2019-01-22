import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLike: number;
  @Input() postCreatedAt: date;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.postLike += 1
  }  

  onDislike() {
    this.postLike -= 1
  } 

  getColor() {
  	if(this.postLike > 0) {
  		return 'green';
  	} else if(this.postLike < 0) {
  		return 'red';
  	} 
  }
}
