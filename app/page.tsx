"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchInput from "@/ui/SearchInput";

export default function SearchForm() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (username) {
      router.push(`/${username}`);
    }
  };
  const handleOnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setUsername(value);
  };
  return (
    <main className="w-full h-full mt-6 flex gap-4 flex-col items-center justify-center">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"></link>
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center justify-center gap-4">
        <div className="w-2/4 bg-white rounded-full flex items-center justify-center border">
          <input
            className="flex-1 p-2 pl-12 rounded-full outline-none"
            type="text"
            placeholder="Enter github username to view repos...."
            value={username}
            onChange={handleOnChange}
          />
          <button
            className="w-16 rounded-full p-2 hover:bg-gray-200 hover:transition"
            type="submit">
            <i className="bx bx-search-alt text-2xl"></i>
          </button>
        </div>
      </form>
      <div className="flex flex-col mt-28  justify-center items-center gap-2">
        <img
          src="https://rapidapi.com/blog/wp-content/uploads/2017/01/octocat.gif"
          alt="gig-img"
          width="200"
        />
        <h1 className="text-3xl">GitHub Online Repos Viewer</h1>
      </div>
    </main>
  );
}
