import React from "react";

import "./Images.css";

export default function Images(props) {

    if (props.images) {
      return (
        <div>
          <section className="photos">
            <div className="row">
              {props.images.map(function (image, index) {
                return <div className="col-4"> <img src={image.src.tiny} alt=""/> </div>;
              })}
            </div>
          </section>
        </div>
      );
    } else {
      return null;
    }
}