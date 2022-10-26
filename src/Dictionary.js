import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, updateKeyword] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [results, updateResults] = useState({});

  function showResults(response) {
    
    updateResults({
      word: response.data[0].word,
      partOfSpeech_1: response.data[0].meanings[0].partOfSpeech,
      definition_11: response.data[0].meanings[0].definitions[0].definition,
      definition_12: response.data[0].meanings[0].definitions[1].definition,
      partOfSpeech_2: response.data[0].meanings[1].partOfSpeech,
      definition_21: response.data[0].meanings[1].definitions[0].definition,
      definition_22: response.data[0].meanings[1].definitions[1].definition
    });

    console.log(response.data[0].word);

    console.log(response.data[0].meanings[0].partOfSpeech);
    console.log(response.data[0].meanings[0].antonyms);
    console.log(response.data[0].meanings[0].synonyms);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    console.log(response.data[0].meanings[0].definitions[1].definition);

    console.log(response.data[0].meanings[1].partOfSpeech);
    console.log(response.data[0].meanings[1].antonyms);
    console.log(response.data[0].meanings[1].synonyms);
    console.log(response.data[0].meanings[1].definitions[0].definition);
    console.log(response.data[0].meanings[1].definitions[1].definition);
    
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
        <div>{results.word}</div>
        <div>{results.name}</div>
        <div>{results.partOfSpeech_1}</div>
        <div>{results.definition_11}</div>
        <div>{results.definition_12}</div>
      </div>
    );
  } else {
    return (
      <div> {form}</div>
      );
  }
}
  
