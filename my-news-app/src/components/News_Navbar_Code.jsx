import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class News_Navbar_Code extends Component {

  render() {
    return (
      <div className="news_navbar d_flex">
          <Link  className="news_navbar_link" to="/news/general">General</Link>
          <Link  className="news_navbar_link" to="/news/world">World</Link>
          <Link  className="news_navbar_link" to="/news/nation">Nation</Link>
          <Link  className="news_navbar_link" to="/news/business">Business</Link>
          <Link  className="news_navbar_link" to="/news/technology">Technology</Link>
          <Link  className="news_navbar_link" to="/news/entertainment">Entertainment</Link>
          <Link  className="news_navbar_link" to="/news/sports">Sports</Link>
          <Link  className="news_navbar_link" to="/news/science">Science</Link>
          <Link  className="news_navbar_link" to="/news/health">Health</Link>
      </div>
    )
  }
}
