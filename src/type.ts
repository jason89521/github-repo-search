export type RepoType = {
  id: number;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
};

export type FileType = {
  name: string;
  type: string;
  html_url: string;
};
