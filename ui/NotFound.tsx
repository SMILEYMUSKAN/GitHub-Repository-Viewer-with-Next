import React from "react";

const NotFound = ({ title = "", linkName = "", url = "" }) => {
  return (
    <div className="flex justify-center w-full items-center flex-col not-found-ui">
      <section className="flex justify-center flex-col gap-4 items-center">
        <p className="text-2xl">
          <strong>{title}</strong> Not Found, Search Again
        </p>
        <a href={`/${url}`} className="text-xl text-bold  hover:text-blue-500">
          Back to {linkName}
        </a>
      </section>
      <img
        src="https://img.freepik.com/premium-vector/search-result-find-illustration_585024-17.jpg"
        alt="gif"
        width="400"
      />
    </div>
  );
};

export default React.memo(NotFound);
