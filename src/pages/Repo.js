import { useParams } from 'react-router-dom';

import githubApi from 'githubApi';
import { useEffect, useState } from 'react';

const Repo = () => {
  const { username, reponame } = useParams();
  const [repoData, setRepoData] = useState({});

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const { data } = await githubApi.get(`repos/${username}/${reponame}`);
        console.log(data);
        setRepoData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepo();
  }, [username, reponame]);

  const {full_name, description, stargazers_count} = repoData;

  return (
    <div>
      {full_name && <h1>{full_name}</h1>}
    </div>
  );
};

export default Repo;
