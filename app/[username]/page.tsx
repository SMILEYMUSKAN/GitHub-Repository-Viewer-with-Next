"use client";

import { getUserRepos } from "@/utils";
import { useEffect, useState } from "react";
import SearchBar from "../../ui/repo/ReposView";
import Loading from "../LoadingSpinner";
import { RepoProps } from "@/types";
import NotFound from "@/ui/NotFound";

const ReposComponent = ({ params: { username } }: RepoProps) => {
  const [repoList, setRepoList] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUserRepos(username).then((res) => {
      setRepoList(res);
      setLoading(false);
    });
  }, []);

  if (repoList||[]?.length === 0) {
    return (
      <div className="w-full mt-12 h-full flex items-center justify-center">
        <NotFound title={username} linkName="Home Page" />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center flex-col gap-4">
      {loading ? (
        <Loading />
      ) : (
        <SearchBar repoList={repoList} username={username} />
      )}
    </div>
  );
};

export default ReposComponent;
