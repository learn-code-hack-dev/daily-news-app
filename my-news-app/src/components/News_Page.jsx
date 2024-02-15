import React, { Component } from "react";
import News_Item from "./News_Item";
import PropTypes from "prop-types";
import News_Navbar_Code from "./News_Navbar_Code";
import Spiner from "./Spiner";
import _ from 'lodash';

export default class News_Page extends Component {
  static defaultProps = {
    category: "general",
    countryValue: "us"
  };

  static propTypes = {
    category: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      nonewsState: "nonews_display",
    };
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleNews = _.debounce(async () => {
    document.title = "Daily New's " + this.capitalizeFirstLetter(this.props.category);
    const apikey = "98e3751c7f6cb1a60e2f24d78d5a732b";
    const category = this.props.category;
    const url = 
      "https://gnews.io/api/v4/top-headlines?category=" +
      category +
      `&lang=en&country=${this.props.countryValue}&apikey=` +
      apikey;
    // console.log(url);
    this.setState({
      loading : true
    })
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      else {
       const data = await response.json();
       const articles = data.articles;
       if (articles.length === 0) { 
         this.setState({ articles, loading: false, nonewsState:"" });
        //  console.log(articles)       
       }
       else {
         this.setState({ articles, loading: false });
        //  console.log(articles);
       }
      }
    } catch (error) {
      // console.error('There has been a problem with your fetch operation:', error);
      this.setState({ loading: false, nonewsState:""});
    }
  }, 500);

  componentDidMount() {
    this.handleNews();
  }
  
  render() {
    const countryCodes = ['au', 'br', 'ca', 'cn', 'eg', 'fr', 'de', 'gr', 'hk', 'in', 'ie', 'il', 'it', 'jp', 'nl', 'no', 'pk', 'pe', 'ph', 'pt', 'ro', 'ru', 'sg', 'es', 'se', 'ch', 'tw', 'ua', 'gb', 'us']
    const countryNames = ['Australia', 'Brazil', 'Canada', 'China', 'Egypt', 'France', 'Germany', 'Greece', 'Hong Kong', 'India', 'Ireland', 'Israel', 'Italy', 'Japan', 'Netherlands', 'Norway', 'Pakistan', 'Peru', 'Philippines', 'Portugal', 'Romania', 'Russian Federation', 'Singapore', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Ukraine', 'United Kingdom', 'United States']
    return (
      <div>
        <News_Navbar_Code/>
        <div className="countries_option d_flex">
          <select
            name="user_select"
            id="user_select"
            value={this.props.countryValue}
            onChange={this.props.handleOnChangeValue}
          >
            {countryCodes.map((code, index) => (
              <option key={index} value={code}>
                {countryNames[index]}
              </option>
            ))}
          </select>
        </div>
        <div className="news_page">
          <div className="news_page_heading">
            <h1>
              Top Daily News {this.capitalizeFirstLetter(this.props.category)}{" "} Headlines!
            </h1>
          </div> 
        {this.state.loading && <Spiner/>}
        <div className={`nonews ${this.state.nonewsState} d_flex`}>
        <img src="https://www.eazyadsglobal.com/assets/images/5798614_2989873.jpg" alt="No articles found" /><p>No New's Found!</p></div>
          <div className="news_page_box d_flex">
            {this.state.articles.map((article, index) => (
              <News_Item
                key={index}
                imageUrl={article.image}
                title={article.title.slice(0, 50)+"..."}
                desc={article.description.slice(0, 90)+"..."}
                publishedAt={article.publishedAt}
                url={article.url}
              />
            ))}

          </div>
        </div>
      </div>
    );
  }
}