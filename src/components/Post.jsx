import React, { Component } from "react";
import "./Post.css";
import EmptyHeart from '../images/svg0.svg';
import CommentIcon from '../images/svg1.svg';
import SendIcon from '../images/svg7.svg';
import EmptyBookmark from '../images/svg3.svg';
import FilledBookmark from '../images/Instagram-6.svg';
import FilledHeart from '../images/Instagram-5.svg'


class Post extends Component {
  state = {
    comments: [],
    newComment: "",
    username: "username",
    postLiked: false,
    likeImgSrc: EmptyHeart,
    bookmarked: false,
    bookmarkImgSrc: EmptyBookmark,
    likeCount: 0,
    mobileComment: false,
    mobileCommentShow: "Post-comments-input Post-button",
    Likes: 0
  };
  postCommentMobile = () => {
    if (!this.state.mobileComment) {
      this.setState({
        mobileCommentShow: "Post-comments-input-mobile Post-button",
        mobileComment: true
      });
    } else if (this.state.mobileComment) {
      this.setState({
        mobileCommentShow: "Post-comments-input Post-button",
        mobileComment: false
      });
    }
  };
  likeUnlikePost = () => {
    if (!this.state.postLiked) {
      this.setState({
        likeImgSrc: FilledHeart,
        postLiked: true,
        Likes: this.state.Likes + 1
      });
    } else if (this.state.postLiked) {
      this.setState({
        likeImgSrc: EmptyHeart,
        postLiked: false,
        Likes: this.state.Likes - 1
      });
    }
  };
  bookmarkPost = () => {
    if (!this.state.bookmarked) {
      this.setState({
        bookmarkImgSrc: FilledBookmark,
        bookmarked: true
      });
    } else if (this.state.bookmarked) {
      this.setState({
        bookmarkImgSrc: EmptyBookmark,
        bookmarked: false
      });
    }
  };
  recordCommentHandler = event => {
    let comment = event.target.value;
    this.setState({
      newComment: comment
    });
  };
  addCommentHandler = () => {
    this.setState({
      comments: [...this.state.comments, this.state.newComment],
      newComment: ""
    });
  };
  render() {
    let eachComment = this.state.comments.map((comment, index) => {
      return (
        <li className="Post-individual-comment" key={index}>
          <span className="Post-commenter">{this.state.username}</span>{" "}
          {comment}
        </li>
      );
    });
    return (
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img alt={this.props.avatarAlt} src={this.props.avatar} />
            </div>
            <div className="Post-user-nickname">
              <span>{this.props.username}</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt={this.props.postAlt} src={this.props.post} />
          </div>
        </div>
        {/* Buttons section */}
        <div className="Post-button-div">
          <ul className="Post-buttons-list">
            <li className="Post-button-li">
              <img
                className="Post-dont-like Post-button"
                src={this.state.likeImgSrc}
                alt="like"
                onClick={this.likeUnlikePost}
              />
            </li>
            <li className="Post-button-li">
              <img
                className="Post-button"
                src={CommentIcon}
                alt="comment"
                onClick={this.postCommentMobile}
              />
            </li>
            <li className="Post-button-li">
              <img
                className="Post-send-button Post-button"
                src={SendIcon}
                alt="send"
              />
            </li>
            <li className="Post-button-li">
              <img
                className="Post-bookmark-button Post-button"
                src={this.state.bookmarkImgSrc}
                alt="bookmark"
                onClick={this.bookmarkPost}
              />
            </li>
          </ul>
        </div>
        {/* Like counter */}
        <div className="Likes" >{this.state.Likes} likes</div>
        {/* Caption section */}
        <div className="Post-caption">
          <strong>{this.props.username}</strong>
          {this.props.caption}
        </div>
        {/* Comments feature */}
        <div className="Post-comments">
          <ul className="Post-comments-list">{eachComment}</ul>
          <hr />
          <div className="Post-comments-input">
            <input
              className="Post-text-input"
              type="text"
              onChange={this.recordCommentHandler}
              placeholder="Add a comment..."
              value={this.state.newComment}
            />
            <button
              className="Post-post-button"
              onClick={this.addCommentHandler}
            >
              Post
            </button>
          </div>
        </div>
      </article>
    );
  }
}
export default Post;
