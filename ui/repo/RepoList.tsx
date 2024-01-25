import React from "react";
import NotFound from "../NotFound";
import Link from "next/link";

const RepoList = ({ repos, searchRepo, repoList, username }: any) => {
  if (repos.length === 0) {
    return <NotFound title={searchRepo} linkName="Repos" url={username} />;
  }

  return (
    <div className="w-full flex items-center justify-center gap-4 flex-col repo-list-ui">
      {repos.length > 1 ? (
        <div className="flex items-center justify-center nav-div-ui">
          <h1 className="text-2xl total-repo-count-ui">
            Total Repos: ({repoList.length ? repoList.length : 0})
          </h1>
          <Link href="/" className="text-lg hover:text-blue-500">
            Back To Home
          </Link>
        </div>
      ) : null}
      {repos.map((userInfo: any) => (
        <div
          key={userInfo.id}
          className="flex  w-2/4 mb-2 border-b gap-4 p-4 repo-ui">
          <img
            src={userInfo?.owner?.avatar_url}
            alt="user-avtar"
            width="60"
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold github-username-ui">
              {userInfo?.owner?.login}
            </h1>
            <h2 className="text-2xl hover:text-blue-500 repo-link-ui">
              <Link href={`/${username}/${userInfo?.name}`}>
                {userInfo?.name}
              </Link>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(RepoList);
