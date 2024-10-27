export interface CounterState {
  value: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}
export interface User {
  _id: string;
  email: string;
  username: string;
  photo: string;
  fullName: string;
  followers: any;
}
export interface Profil {
  _id: string;
  email: string;
  username: string;
  photo: string;
  fullName: string;
  followers: any;
}

export interface RootInterface {
  _id: string;
  owner: { _id: string; username: string; photo: string; fullName: string };
  content: { url: string; type: "VIDEO" | "IMAGE" | "AUDIO" }[];
  content_alt: string;
  caption: string;
  private: boolean;
  deleted: boolean;
  published: boolean;
  show_likes: boolean;
  comments_enabled: boolean;
  likes_count: number;
  comments_count: number;
  shares_count: number;
  views_count: number;
  reels: boolean;
  location: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
