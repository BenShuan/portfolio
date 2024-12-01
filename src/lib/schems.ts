export interface menuScheme {
  text:string;
  link:string;
}

export interface projectScheme{
  Id: number;
  Name: string ;
  Link:string ;
  ImageLink:string ;
  githubLink:string;
  Technologies:string[] ;
  Description:string ;
}

export interface formScheme {
  name: string;
  email: string;
  message: string;
}