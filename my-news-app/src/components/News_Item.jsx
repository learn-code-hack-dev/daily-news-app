import React, { Component } from 'react'

export default class News_Item extends Component {
    
  render() {
    const { title, desc, imageUrl, url, publishedAt } = this.props;

    return (
      <div className="news_container d_flex">
          <div className="news_baj">New</div>
        <div className="news_img_box">
          <img  src={imageUrl}
          onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "https://cdn.vectorstock.com/i/preview-lt/82/99/no-image-available-like-missing-picture-vector-43938299.webp";
          }} alt="Image" />
        </div>
        <div className="news_content d_flex">
          <h2>{title ? title : "Unknown title here!"}</h2>
          <p>
            {desc ? desc : "Unknown description here!"}
          </p>
          <p>
            Date: {publishedAt ? new Date(publishedAt).toGMTString() : "Unknown date"}
          </p>
          <a target="_blank" href={url}>Read More</a>
        </div>
      </div>
    );
 }}
