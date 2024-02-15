import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  constructor () {
    super();
    document.title = "Daily New's Home Page"
  }
  render() {
    return (
      <div className="home d_flex">
            <div className="home_heading"><h1>Find out what's happening in the world all for free!</h1></div>
            <div className="home_para">
                <p>
                    We are a team of passionate developers and designers who have come together to create an easy-to-use news aggregator. Our goal is to provide you with the most relevant information on a wide range of topics. Whether it’s sports, politics, or entertainment – we’ve got you covered. Click on the New's section to  discovering the latest news today!
                </p>
            </div>
            <div className="home_link_container d_flex">
                <Link className="home_link" to="/news">Explore New's</Link>
                <Link className="home_link" to="/contact">Contact Us</Link>
            </div>
      </div>
    )
  }
}
