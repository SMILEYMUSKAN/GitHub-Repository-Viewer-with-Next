'use client'

import { getUserRepos } from "@/utils";
import { useEffect, useState } from "react";
import SearchBar from "../../ui/RepoListView";
import Loading from "../../ui/LoadingSpinner";
import { RepoProps } from "@/types";
import NotFound from "@/ui/NotFound";

 const ReposComponent =  ({ params:{ username  }} : RepoProps) => {
    
    const [repoList, setRepoList] = useState(null);
    const [loading, setLoading] = useState(true);
      useEffect(() => {
        getUserRepos(username).then((res) => {
            setRepoList(res)
            setLoading(false)
        })
      }, [])

   

      if (repoList?.length === 0) {
        return (
          <NotFound title={username} linkName="Home Page"/>
        );
      }
      
    return  <div className="w-full flex justify-center items-center flex-col gap-4">
      {loading ? <Loading /> : 
      <SearchBar repoList={repoList} username={username}/>
      }
       
  </div>
}

export default ReposComponent;