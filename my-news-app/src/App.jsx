import "./App.css"
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News_Page from './components/News_Page';
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";


export default class App extends Component {
  state = ({
      countryValue: "pk"
    })

    handleOnChangeValue = (e) => {
      const value = e.target.value;
      this.setState({
        countryValue: value
      });
    };


 render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" Component={()=> <Home/>} />
            <Route exact path="/news" Component={() => <News_Page  handleOnChangeValue={this.handleOnChangeValue} countryValue={this.state.countryValue}  category={"general"}/>} />
            <Route exact path="/news/general" Component={() => <News_Page  handleOnChangeValue={this.handleOnChangeValue} countryValue={this.state.countryValue}  category={"general"}/>} />
            <Route exact path="/news/world" Component={() => <News_Page  handleOnChangeValue={this.handleOnChangeValue} countryValue={this.state.countryValue}  category={"world"}/>} />
            <Route exact path="/news/nation" Component={() => <News_Page  handleOnChangeValue={this.handleOnChangeValue} countryValue={this.state.countryValue}  category={"nation"}/>}/>
            <Route exact path="/news/business" Component={() => <News_Page  handleOnChangeValue={this.handleOnChangeValue} countryValue={this.state.countryValue}  category={"business"}/>}/>
            <Route exact path="/news/technology" Component={() => <News_Page  handleOnChangeValue={this.handleOnChangeValue} countryValue={this.state.countryValue}  category={"technology"}/>}/>
            <Route exact path="/news/entertainment" Component={() => <News_Page  handleOnChangeValue={this.handleOnChangeValue} countryValue={this.state.countryValue}  category={"entertainment"}/>}/>
            <Route exact path="/news/sports" Component={() => <News_Page  handleOnChangeValue={this.handleOnChangeValue} countryValue={this.state.countryValue}  category={"sports"}/>}/>
            <Route exact path="/news/science" Component={() => <News_Page  handleOnChangeValue={this.handleOnChangeValue} countryValue={this.state.countryValue}  category={"science"}/>}/>
            <Route exact path="/news/health" Component={() => <News_Page  handleOnChangeValue={this.handleOnChangeValue} countryValue={this.state.countryValue}  category={"health"}/>}/>
            <Route exact path="/contact" Component={() => <Contact/>} />
            <Route path="/about" Component={() => <About/>} />
          </Routes>
          <Footer/>
          </div>
      </Router>
    );
 }
}