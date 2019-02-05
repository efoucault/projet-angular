export class PostService {
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

  addPost(title: string, content: string) {
    const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0
    };
    postObject.title = title;
    postObject.content = content;
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;
    this.posts.push(postObject);
  }
}