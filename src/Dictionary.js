import React, { useState } from "react";
import axios from "axios";
import Synonyms from "./Synonyms";
import Results from "./Results";
import Images from "./Images";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, updateKeyword] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [results, updateResults] = useState({});
  let [synonyms, updateSynonyms] = useState(null);
  let [images, updateImages] = useState(null);

  function showResults(response) {

    updateResults({
      word: response.data[0].word,
      partOfSpeech: response.data[0].meanings[0].partOfSpeech,
      definition_1: response.data[0].meanings[0].definitions[0].definition,
      phonetics: response.data[0].phonetics[0].text,
      phoneticsAudio: response.data[0].phonetics[0].audio,
    });

    updateSynonyms((synonyms = response.data[0].meanings[0].synonyms));
  }
  function showPictures(response) {
    
    updateImages((
      images=response.data.photos
    ))
   
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

    // pexels api key for images
    let pexelsApiKey =
      "563492ad6f91700001000001aa3d46d0067a473099d7af1ee05a5980";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(showPictures);
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
        <Synonyms synonyms={synonyms} />
        <Images images ={images}/>
      </div>
    );
  } else {
    return <div> {form}</div>;
  }
}
