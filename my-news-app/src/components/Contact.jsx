import React, { Component } from 'react'

export default class Contact extends Component {
  constructor () {
    super();
    document.title = "Daily New's Contact Page"
  }
  render() {
    return (
      <div className="contact d_flex">
        <div className="contact_heading">
            <h1>Contact Us</h1>
        </div>
        <div className="contact_form">
        <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />
        <label htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" rows="4" cols="50" required ></textarea>
        <input type="submit" value="Submit" />
      </form>
        </div>
      </div>
    )
  }
}
