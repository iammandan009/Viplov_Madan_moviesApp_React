import React from "react";

const SearchBox = (props: any) => {
  return (
    <div className="col col-sm-4, searchDiv">
      <input
        className="searchInput"
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
