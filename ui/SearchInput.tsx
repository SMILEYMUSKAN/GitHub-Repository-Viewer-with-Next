import React from "react";

const SearchInput = ({ handleSubmit, valueName, handleOnChange, placeholder } : any) => {
    return <form
    onSubmit={handleSubmit}
    className="w-full flex items-center justify-center gap-4">
    <div className="w-2/4 bg-white rounded-full flex items-center justify-center border">
      <input
        className="flex-1 p-2 pl-12 rounded-full outline-none"
        type="text"
        placeholder={placeholder}
        value={valueName}
        onChange={handleOnChange}
      />
      <button
        className="w-16 rounded-full p-2 hover:bg-gray-200 hover:transition"
        type="submit">
        <i className="bx bx-search-alt text-2xl"></i>
      </button>
    </div>
  </form>
}

export default React.memo(SearchInput);