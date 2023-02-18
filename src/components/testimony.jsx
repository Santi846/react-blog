import React from 'react';
import '../styles/components-styles/testimonials.css';

export class Testimony extends React.Component{
  render(){
    if (this.props.professional_name) {
      return (
        <div className="testimony_container">
          <img className="testimony_image" src={require(`../images/${this.props.image}.jpg`)} alt={require(`../images/${this.props.image}.jpg`)} />
    
          <div className="testimony_text_container">
            <p className="testimony_name">
              <strong>{this.props.name}</strong> of
              <b> {this.props.country}</b></p>
            <p className="testimony_job">
              <strong>{this.props.job}</strong> at 
              <b> {this.props.company}</b></p>
              <p className="testimony_text_description"><strong>{this.props.name}</strong>{this.props.description}<strong>{this.props.professional_name}</strong></p>
              
          </div>
        </div>
      );
     }
     return (
      <div className="testimony_container">
        <img className="testimony_image" src={require(`../images/${this.props.image}.jpg`)} alt={require(`../images/${this.props.image}.jpg`)} />
    
        <div className="testimony_text_container">
          <p className="testimony_name">
            <strong>{this.props.name}</strong> of
            <b> {this.props.country}</b></p>
          <p className="testimony_job">
            <strong>{this.props.job}</strong> at 
            <b> {this.props.company}</b></p>
            <p className="testimony_text_description"><strong>{this.props.name}</strong>{this.props.description}</p>
            
        </div>
      </div>
    );
  }
}


