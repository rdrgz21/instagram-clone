import React, { Component } from "react";
import "./Stories.css";
import Story from "./Story";
export default class Stories extends Component {
  render() {
    return (
      <div className="story-bar">
        <Story
          imgSrc="https://pbs.twimg.com/profile_images/1216175766406193152/mTPfkxyd_400x400.jpg"
          username="Chris_Whit..."
        />
        <Story
          imgSrc="https://www.momjunction.com/wp-content/uploads/2019/03/55-Romantic-Date-Ideas-For-Couples-1.jpg"
          username="DimitriSap..."
        />
        <Story
          imgSrc="https://i.pinimg.com/originals/4e/b7/73/4eb7730623e503cd289403189189c711.jpg"
          username="Kelsie_Wal..."
        />
        <Story
          imgSrc="https://yt3.ggpht.com/a/AATXAJy2cMODbm7W-yHSYjEXL9LfFas3cQ7GZZ9PFA=s900-c-k-c0xffffffff-no-rj-mo"
          username="buzzfeedta..."
        />
        <Story
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbl10Wpj4_ftwJVk-hFoDnCULXSu-U8uqiqg&usqp=CAU"
          username="Andy_MF_Ca..."
        />
        <Story
          imgSrc="https://i.pinimg.com/originals/96/3e/47/963e47ed890a031d25c766e25a24527a.jpg"
          username="Bonnie_Che..."
        />
      </div>
    );
  }
}
