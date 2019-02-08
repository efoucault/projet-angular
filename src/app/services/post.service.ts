import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PostService {
  posts = [
    {
      id: 1,
      title: "Post 1",
	  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
	  loveIts: 0,
	  created_at: "2019/01/22"
    },
    {
	  id: 2,
	  title: "Post 2",
	  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
	  loveIts: 5,
	  created_at: "2019/01/22"
	},
    {
      id: 3,
      title: "Post 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
	  loveIts: -2,
	  created_at: "2019/01/22"
    }
  ];

  constructor(private httpClient: HttpClient) {}

  addPost(title: string, content: string) {
    const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: "2019/01/22"
    };
    postObject.title = title;
    postObject.content = content;
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;
    this.posts.push(postObject);
  }

  savePosts() {
    this.httpClient
      .put('https://angular-un.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  fetchPosts() {
    this.httpClient
      .get<any[]>('https://angular-un.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );  
  }
}