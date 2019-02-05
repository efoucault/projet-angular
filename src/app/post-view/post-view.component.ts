import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  ngOnInit() {
  }

  posts = [
    {
      title: "Post 1",
	  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
	  loveIts: 0,
	  created_at: "2019/01/22"
    },
    {
	  title: "Post 2",
	  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
	  loveIts: 5,
	  created_at: "2019/01/22"
	},
    {
      title: "Post 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
	  loveIts: -2,
	  created_at: "2019/01/22"
    }
  ];
}
