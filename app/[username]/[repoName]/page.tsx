"use client";

import { getRepoDetails } from "@/utils";
import { useEffect, useState } from "react";
import { RepoProps } from "@/types";
import Loading from "@/ui/LoadingSpinner";
import RepoDetailsCard from "@/ui/repo/RepoDetailsCard";

const RepoDetails = ({ params: { username, repoName } }: RepoProps) => {
  const [repoDetails, setRepoDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRepoDetails(username, repoName).then((res) => {
      setRepoDetails(res);
      setLoading(false);
    });
  }, []);

  if (repoDetails === undefined) {
    return (
      <div className="flex justify-center w-full mt-20 items-center flex-col">
        <section className="flex justify-center flex-col gap-4 items-center">
          <p className="text-2xl">
            404, <strong>{repoName}</strong> Not Found
          </p>
          <a
            href={`/${username}`}
            className="text-xl text-bold  hover:text-blue-500">
            Back to Repos
          </a>
        </section>
        <img
          src="https://img.freepik.com/premium-vector/search-result-find-illustration_585024-17.jpg"
          alt="gif"
          width="400"
        />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center mt-8">
      {loading ? <Loading /> : <RepoDetailsCard repoDetails={repoDetails} />}
    </div>
  );
};

export default RepoDetails;
