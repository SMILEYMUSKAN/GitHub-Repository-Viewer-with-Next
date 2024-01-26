"use client";
import React, { useState } from "react";
import { RepoDetailsInterface } from "@/types";
import RepoList from "./RepoList";
import SearchInput from "../SearchInput";

const ReposViewComponent = ({ repoList, username }: any) => {
  const [repoName, setRepoName] = useState("");
  const [searchRepo, setSearchRepo] = useState("");
  const [repos, setRepos] = useState(repoList);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (repoName) {
      const filterRepos = [];
      const repoObj = repoList?.find(
        (repo: RepoDetailsInterface) => repo.name === repoName
      );
      repoObj === undefined ? null : filterRepos.push(repoObj);
      setRepos(filterRepos);
      setSearchRepo(repoName);
    }
  };

  const handleOnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setRepoName(value);
  };

  return (
    <div className="w-full h-full mt-6 flex gap-4 flex-col items-center justify-center">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"></link>
      <SearchInput
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        valueName={repoName}
        placeholder="Find Repositories......."
      />
      <RepoList
        repos={repos}
        searchRepo={searchRepo}
        repoList={repoList}
        repoName={repoName}
        username={username}
      />
    </div>
  );
};

export default React.memo(ReposViewComponent);
