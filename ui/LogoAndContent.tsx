import React from "react";

const LogoAndContent = () => {
    return (
      <div className="flex flex-col mt-28  justify-center items-center gap-2">
        <img
          src="https://rapidapi.com/blog/wp-content/uploads/2017/01/octocat.gif"
          alt="gig-img"
          width="200"
        />
        <h1 className="text-3xl">GitHub Online Repo's Viewer</h1>
      </div>
    );
  };
  
  export default React.memo(LogoAndContent);
  