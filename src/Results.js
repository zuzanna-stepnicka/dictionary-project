import React from "react";
import "./Results.css";

export default function Results(props) {
  return (
    <div className="container">
      <section>
        <div className="word">{props.results.word}</div>
        <div className="phonetics">{props.results.phonetics}</div>
        <div className="phoneticsAudio">
          <a
            href={props.results.phoneticsAudio}
            target="_blank"
            rel="noreferrer"
          >
            Listen here
          </a>
        </div>
      </section>
      <section>
        <div className="parfOfSpeech">{props.results.partOfSpeech}</div>
        <div className="definition_1">{props.results.definition_1}</div>
      </section>
    </div>
  );
}
