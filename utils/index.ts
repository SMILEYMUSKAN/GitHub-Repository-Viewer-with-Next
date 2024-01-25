import { RepoDetailsInterface } from "@/types";

export const getUserRepos = async (username:string) => {
  if (username) {
    const responce = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await responce.json();

    return data;
  }
};
export const getRepoDetails = async (username : string, repoName:string) => {
  if(username && repoName){
    const responce = await fetchData(`https://api.github.com/users/${username}/repos`);
    const repoList = await responce.json();
     const repoDetails =  (repoList || []).find((repo:RepoDetailsInterface) => repo.name === repoName)
   return repoDetails
  } 
}
export const fetchData = async (url:string) => {
  const responce = await fetch(url);
  return responce;
};
