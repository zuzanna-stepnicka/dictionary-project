import React, { useState } from "react";

export default function Dictionary() {

    let [keyword, updateKeyword] = useState("");

    function updateSearch(event) {
        updateKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();
    }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
              <input type="search" onChange={updateSearch}/>
              <input type="submit"/>
          </form>
    </div>
  );
}
