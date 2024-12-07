import { ObjectId } from "mongodb";

export interface menuScheme {
  text:string;
  link:string;
}

export interface projectScheme {
  _id: ObjectId  ,
  Name: string,
  Slug:string ,
  Link:string,
  ImageLink:string ,
  githubLink:string,
  Technologies:string[],
  Summary:string
  Description:string,
}


export interface formScheme {
  name: string;
  email: string;
  message: string;
}