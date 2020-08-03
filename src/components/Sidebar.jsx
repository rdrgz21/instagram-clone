import React, { Component } from "react";
import "./Sidebar.css";
import avatar from "../images/avatar.png";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="profile">
          <img className="profile-img" src={avatar} alt="avatar" />
          <div className="profile-info">
            <span className="profile-name"> profile name </span>
            <span className="profile-bio"> Bio here</span>
          </div>
        </div>
        <div className="flex-section">
          <div className="suggest-title">
            <span className="left-flex" id="title">
              {" "}
              Suggestions For You{" "}
            </span>
            <span className="right-flex" id="titleBtn">
              {" "}
              See All{" "}
            </span>
          </div>
          <div className="suggestion-profile">
            <img
              className="suggest-img"
              src="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-19/s150x150/103631200_681984755712547_4907841402607376636_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_ohc=6UA-AvU1dCQAX8BA29U&oh=755bdd3b09f5a75fa282048fb29ba85a&oe=5F14699F"
              alt="avatar"
            />
            <div className="suggest-info">
              <span className="suggest-name"> arimormusic </span>
              <span className="suggest-follow"> Follows you</span>
            </div>
            <span className="right-flex" id="follow">
              Follow
            </span>
          </div>
          <div className="suggestion-profile">
            <img
              className="suggest-img"
              src="https://i.pinimg.com/736x/ec/4d/b2/ec4db2fbe87da6c7c9486b73bc230d64.jpg"
              alt="avatar"
            />
            <div className="suggest-info">
              <span className="suggest-name"> kristie.porters.art</span>
              <span className="suggest-follow"> Follows you</span>
            </div>
            <span className="right-flex" id="follow">
              Follow
            </span>
          </div>
          <div className="suggestion-profile">
            <img
              className="suggest-img"
              src="https://yt3.ggpht.com/a/AATXAJzgXeE9Qg991VBIN7sr3PA-Govwp76T6ydj9w=s900-c-k-c0xffffffff-no-rj-mo"
              alt="avatar"
            />
            <div className="suggest-info">
              <span className="suggest-name"> mobkitchen </span>
              <span className="suggest-follow">
                {" "}
                Followed by WoodyCarter +2 more
              </span>
            </div>
            <span className="right-flex" id="follow">
              Follow
            </span>
          </div>
          <div className="suggestion-profile">
            <img
              className="suggest-img"
              src="https://ballpitmag.files.wordpress.com/2017/05/ballpit-mag-featured-artist-906-01.jpg"
              alt="avatar"
            />
            <div className="suggest-info">
              <span className="suggest-name"> nibyniebo_ </span>
              <span className="suggest-follow"> Follows you</span>
            </div>
            <span className="right-flex" id="follow">
              Follow
            </span>
          </div>
        </div>
        <div className="insta-links">
          <span className="greyLinks">
            About・Help・Press・API・Jobs・Privacy・Terms・Locations・Top
            Accounts・Hashtags・Language
          </span>
          <span className="trademark"> © 2020 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </div>
    );
  }
}
