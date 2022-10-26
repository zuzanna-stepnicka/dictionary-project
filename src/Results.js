import React from "react";
import "./Results.css";

export default function Results(props) {
  return (
    <div className="container">
      <div className="word">{props.results.word}</div>
      <div className="parfOfSpeech">{props.results.partOfSpeech}</div>
      <div className="definition_1">{props.results.definition_1}</div>
    </div>
  );
}
