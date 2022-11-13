import React, { useState } from "react";
import axios from "axios";
import Synonyms from "./Synonyms";


import Results from "./Results";

export default function Dictionary() {
  let [keyword, updateKeyword] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [results, updateResults] = useState({});
  let [synonyms, updateSynonyms] = useState(null);

  function showResults(response) {
    
    updateResults({
      word: response.data[0].word,
      partOfSpeech: response.data[0].meanings[0].partOfSpeech,
      definition_1: response.data[0].meanings[0].definitions[0].definition,
    });

    updateSynonyms(
      synonyms = response.data[0].meanings[0].synonyms
    )
    
  }

  function updateSearch(event) {
    updateKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    setLoaded(true);

    /// api documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResults);
  }

  let form = (
    
    <form onSubmit={search}>
      <input type="search" onChange={updateSearch} />
      <input type="submit" />
    </form>
    
  );

  if (loaded) {
    return (
      <div>
        <div>{form}</div>
        <Results results={results} />
        <Synonyms synonyms={synonyms}/>
      </div>
    );
  } else {
    return (
      <div> {form}</div>
      );
  }
}
  
