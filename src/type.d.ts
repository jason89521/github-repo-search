export type Repo = {
  id: number;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
};

export type File = {
  name: string;
  type: string;
};
