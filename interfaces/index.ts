export interface IPost {
  body: string;
  title: string;
  id: string | number;
}

export interface IComment {
  postId: number | string;
  body: string;
  id: number | string;
}

export interface IPostWithComment extends IPost {
  comments: IComment[];
}
