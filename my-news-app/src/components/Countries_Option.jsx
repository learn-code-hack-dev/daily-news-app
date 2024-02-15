import React, { Component } from 'react'

export default class Countries_Option extends Component {
  render() {
    const countryCodes = ['au', 'br', 'ca', 'cn', 'eg', 'fr', 'de', 'gr', 'hk', 'in', 'ie', 'il', 'it', 'jp', 'nl', 'no', 'pk', 'pe', 'ph', 'pt', 'ro', 'ru', 'sg', 'es', 'se', 'ch', 'tw', 'ua', 'gb', 'us'];
    const countryNames = ['Australia', 'Brazil', 'Canada', 'China', 'Egypt', 'France', 'Germany', 'Greece', 'Hong Kong', 'India', 'Ireland', 'Israel', 'Italy', 'Japan', 'Netherlands', 'Norway', 'Pakistan', 'Peru', 'Philippines', 'Portugal', 'Romania', 'Russian Federation', 'Singapore', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Ukraine', 'United Kingdom', 'United States'];
    return (
      <div className="countries_option">
        <select name="user_select" id="user_select">
          {countryCodes.map((code, index) => (
            <option key={index} value={code}>
              {countryNames[index]}
            </option>
          ))}
        </select>
      </div>
    )
  }
}
