import React from 'react';
import '../styles/components-styles/testimonials.css';

export function Testimony(props) {
  return (
    <div className="testimony_container">
      <img className="testimony_image" src={require(`../images/${props.image}.jpg`)} alt="Boruto" />

      <div className="testimony_text_container">
        <p className="testimony_name">{props.name} of {props.country}</p>
        <p className="testimony_job">{props.job} at {props.company}</p>
        <p className="testimony_text_description">{props.description}</p>
      </div>
    </div>
  );
}

// export default Testimony;