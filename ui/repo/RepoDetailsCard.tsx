"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const RepoDetailsCard = ({ repoDetails }: any) => {
  const {
    name,
    visibility,
    html_url,
    created_at,
    default_branch,
    owner,
    language,
  }: any = repoDetails;

  const dateObject = new Date(created_at);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");
  const createdAt = `${year}-${month}-${day}`;

  return (
    <Card
      className="w-96 rounded shadow-2xl flex-col items-center justify-center card-ui"
      placeholder={undefined}>
      <CardBody
        className="rounded flex flex-col gap-2 flex-wrap justify-center items-center"
        placeholder={undefined}>
        <CardHeader className="w-96" placeholder={undefined}>
          <img
            src={owner?.avatar_url}
            className="rounded mx-auto"
            alt=""
            width="250"
          />
        </CardHeader>

        <Typography variant="h4" color="blue-gray" placeholder={undefined}>
          {owner?.login}
        </Typography>
        <div className="flex flex-col gap-3 mt-2 card-body-ui">
          <Typography
            color="blue-gray"
            className="font-medium"
            textGradient
            placeholder={undefined}>
            Project Name : {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium"
            textGradient
            placeholder={undefined}>
            CreatedAt : {createdAt}
          </Typography>
          <Typography
            className="font-medium"
            textGradient
            placeholder={undefined}>
            Visibility : {visibility}
          </Typography>
          <Typography
            className="font-medium"
            textGradient
            placeholder={undefined}>
            Language : {language || "none"}
          </Typography>
          <Typography
            className="font-medium"
            textGradient
            placeholder={undefined}>
            default_branch : {default_branch}
          </Typography>
          <Typography
            color="blue"
            className="font-medium cursor-pointer hover:text-blue-500 hover:transition"
            textGradient
            placeholder={undefined}>
            <a target="_blank" href={html_url}>
              Know More About this project
            </a>
          </Typography>
          <Typography
            color="blue"
            className="font-medium cursor-pointer hover:text-blue-500 pb-2 hover:transition"
            textGradient
            placeholder={undefined}>
            <a href={`/${owner?.login}`}>Back to {owner?.login}'s Repos</a>
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default React.memo(RepoDetailsCard);
