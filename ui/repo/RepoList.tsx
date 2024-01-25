
import { useRouter } from "next/navigation";
import React from 'react'
import NotFound from "../NotFound";


const RepoList = ({repos, searchRepo, repoList,  username} : any) => {
    const router = useRouter();


    const handleOnClick = (selectedRepoName:string) => {
        router.push(`/${username}/${selectedRepoName}`) 
      };
    
      if (repos.length === 0) {
        return (
         <NotFound title={searchRepo} linkName="Repos" url={username}/>
        );
      }

    return <div className="w-full flex items-center justify-center flex-col">
      {repos.length > 1 ? <h1 className="text-2xl my-2">Total Repos: ({repoList.length ? repoList.length : 0})</h1> :  null}
        {repos.map((userInfo : any) => (
      <div key={userInfo.id} className="flex w-2/4 mb-2 border-b gap-4 p-4">
        <img
          src={userInfo?.owner?.avatar_url}
          alt="user-avtar"
          width="60"
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <h1 className="underline font-semibold">
            {userInfo?.owner?.login}
          </h1>
          <h2
            className="text-2xl cursor-pointer hover:text-blue-800"
            onClick={() => handleOnClick(userInfo?.name)}>
            {userInfo?.name}
          </h2>
        </div>
      </div>
    ))}
      
    </div>
}

export default React.memo(RepoList);