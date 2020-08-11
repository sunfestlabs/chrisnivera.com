import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Project.css'



class Project extends Component {

  render(){
    return(

      <div className="projectile" id={this.props.id} data-aos="zoom-in" >
        <img src={this.props.img} alt="" className="image" id={this.props.imgid} />
        <Link to={this.props.url}>
        <div className="overlay">
          <div className="text">
            <div className="name">{this.props.name}</div>
            <div className="subtitle">{this.props.subtitle}</div>
          </div>
        </div>
        </Link>
      </div>

    );
  }

}


export default Project;
