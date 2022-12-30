import React from 'react';
import '../styles/components-styles/testimonials.css';

export function Testimony(props) {
  if (props.professional_name) {
  return (
    <div className="testimony_container">
      <img className="testimony_image" src={require(`../images/${props.image}.jpg`)} alt="Boruto" />

      <div className="testimony_text_container">
        <p className="testimony_name">
          <strong>{props.name}</strong> of
          <b> {props.country}</b></p>
        <p className="testimony_job">
          <strong>{props.job}</strong> at 
          <b> {props.company}</b></p>
          <p className="testimony_text_description"><strong>{props.name}</strong>{props.description}<strong>{props.professional_name}</strong></p>
          
      </div>
    </div>
  );
 }
 return (
  <div className="testimony_container">
    <img className="testimony_image" src={require(`../images/${props.image}.jpg`)} alt="Boruto" />

    <div className="testimony_text_container">
      <p className="testimony_name">
        <strong>{props.name}</strong> of
        <b> {props.country}</b></p>
      <p className="testimony_job">
        <strong>{props.job}</strong> at 
        <b> {props.company}</b></p>
        <p className="testimony_text_description"><strong>{props.name}</strong>{props.description}</p>
        
    </div>
  </div>
);
}

// export default Testimony;