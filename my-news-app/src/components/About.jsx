import React, { Component } from 'react'

export default class About extends Component {
  constructor () {
    super();
    document.title = "Daily New's About Page"
  }
  render() {
    return (
      <div className="about">
        <div className="about_heading">
          <h1>About Daily New's</h1>
        </div>
        <div className="about_info">
          <div className="box">
          <span className="box_span_heading">Welcome to Daily New's </span>
          <span> your go-to source for news from all over the world. Our website is dedicated to bringing you the latest news and updates from various sections including General, World, Nation, Business, Technology, Entertainment, Sports, Science, and Health.</span>
            </div>
            <div className="box">
              <h2>Daily New's Updates</h2>
          <p>
            At Daily News, we believe in providing unbiased and accurate news to our readers. Our team of experienced journalists and writers work tirelessly to ensure that every story is researched and presented in a clear and concise manner.
          </p>
          </div>
          <div className="box">
            <h2>General New's</h2>
          <p>
            Our General section covers a wide range of topics, from politics and current affairs to lifestyle and culture. We strive to provide a balanced view on every issue, giving our readers the opportunity to form their own opinions.
          </p>
          </div>
          <div className="box">
            <h2>World New's</h2>
          <p>
            The World section brings you news from every corner of the globe. From breaking news to in-depth analysis, we cover it all. Our team of international correspondents provide on-the-ground reporting, ensuring that our readers get the most accurate and up-to-date information.
          </p>
          </div>
          <div className="box">
            <h2>Nation New's</h2>
          <p>
            The Nation section focuses on news and events from our own backyard. We cover politics, business, and culture, providing our readers with a comprehensive view of what's happening in the country.
          </p>
          </div>
          <div className="box">
            <h2>Business New's</h2>
          <p>
            Our Business section covers the latest developments in the world of finance and economics. From stock market updates to in-depth analysis of company performance, we provide our readers with the information they need to make informed decisions.
          </p>
          </div>
          <div className="box">
            <h2>Technology New's</h2>
          <p>
            The Technology section covers the latest developments in the world of technology. From new gadgets and software to in-depth analysis of industry trends, we provide our readers with the information they need to stay ahead of the curve.
          </p>
          </div>
          <div className="box">
            <h2>Entertainment New's</h2>
          <p>
            The Entertainment section covers the latest happenings in the world of entertainment. From movie and music reviews to celebrity news, we provide our readers with a behind-the-scenes look at the entertainment industry.
          </p>
          </div>
          <div className="box">
            <h2>Sports New's</h2>
          <p>
            The Sports section covers the latest news and updates from the world of sports. From live scores to in-depth analysis, we provide our readers with the information they need to stay informed.
          </p>
          </div>
          <div className="box">
            <h2>Science New's</h2>
          <p>
            The Science and Health sections cover the latest developments in these fields. From new discoveries and breakthroughs to in-depth analysis of industry trends, we provide our readers with the information they need to stay informed.
          </p>
          </div>
          <div className="box">
            <h2>Health New's</h2>
          <p>
            At Daily News, we are committed to providing our readers with the highest quality news and information. We believe that an informed public is essential to a healthy democracy, and we strive to provide our readers with the information they need to make informed decisions.
          </p>
          </div>
          <div className="box">
            <h2>Conclusion</h2>
          <p>
            Thank you for choosing Daily News as your source for news and information. We look forward to serving you in the future.</p>
            </div></div>
        </div>
    )
  }
}
