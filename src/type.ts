export type Repo = {
  id: number;
  stargazers_count: number;
  forks_count: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
};

export type File = {
  name: string;
  type: string;
  html_url: string;
};
