import React, { Component } from "react";
import "./Stories.css";
import "./Story.css";
export default class Stories extends Component {
  render() {
    return (
            <div className="story-wrapper">
              <div className="img-wrapper">
                <img
                  className="storyImg"
                  src={this.props.imgSrc}
                  alt=""
                />
              </div>
              <span className="story-username">{this.props.username}</span>
            </div>
    );
  }
}
