import React, {Component} from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutUsView from "./components/Aboutus";
import ContactUsView from "./components/ContactUs";
import OurWorkView from "./components/OurWork";

import GalleryView from './components/GalleryView';
import {
  GiHamburger,
  GiMedicines,
  GiBookshelf
} from 'react-icons/gi';

import './components/scss/_about.scss';
import './components/scss/_blog.scss';
import './components/scss/_blog_part.scss';
import './components/scss/_bradcam.scss';
import './components/scss/_btn.scss';
import './components/scss/_causes.scss';
import './components/scss/_contact.scss';
import './components/scss/_elements.scss';
import './components/scss/_extend.scss';
import './components/scss/_footer.scss';
import './components/scss/_header.scss';
import './components/scss/_mixins.scss';
import './components/scss/_responsive.scss';
import './components/scss/_section_title.scss';
import './components/scss/_slick-nav.scss';
import './components/scss/_slider.scss';
import './components/scss/_varriable.scss';
import './components/scss/style.scss';
import './components/scss/theme-default.scss';


export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {}
      }

      componentDidMount() {
        window.addEventListener('scroll', this.handlePageScroll);
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.handlePageScroll);
      }

      renderNavBar = () => {
        return( <NavigationBar /> )
      }

      renderSwitch = () => {
        return(
          <Router>
            <Switch>
              <Route path="/about_us/">
                <AboutUsView />
              </Route>
              <Route path="/our_work/"> 
                <OurWorkView /> 
              </Route>  
              <Route path="/contact_us/"> 
                <ContactUsView /> 
                </Route> 
                <Route path="/gallery/">
                    <GalleryView />   
                  </Route> 
            </Switch>
          </Router>
        )
      }

      renderBanner = () => {
        return(
          <div class="slider_area slider_bg_1 d-flex align-items-center">
          <div class="container">
              <div class="row">
                  <div class="col-xl-12">
                      <div class="single_slider">
                          <div class="slider_text">
                              <h3>Support the Causes <br />
                                  You Care About</h3>
                              <p>At Adisom Welfare Foundation we believe that everyone has the right to be <br />
                                  cared for and the right to be protected </p>
      
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        )
      }

      renderAboutUsInfo = () => {
        return(
          <div class="about_area gray-bg">
              <div class="container">
                  <div class="row align-items-center">
                      <div class="col-xl-6 col-md-6">
                          <div class="about_thumb">
                              <img src="/assets/images/about.png" alt="" />
                              <div class="served_over">
                                  <span>Served Over</span>
                                  <h3>1000+ </h3>
                                  <p>people over more than 50 locations</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-6 col-md-6">
                          <div class="about_right">
                              <div class="section_title">
                                  <span>About Us</span>
                                  <h3>
                                      We’ve helped 1000+ people <br/>
                                      with food and basic amenities <br/>
                                      across various locations  <br/>
                                      in New Delhi during Covid-19 pandemic
                                  </h3>
                              </div>
                              <p>  
                                During the Covid-19 pandemic, we at Adisom Welfare Foundation supplied basic amenities <br /> 
                                like food and medicines to people who worked for daily wages but were not able to do so  <br /> 
                                because of the lockdown measures taken by our government. <br /> 
                                We do this to inspire other people and spread a message across various communities that together < br/> 
                                we can make a difference 
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
      }

      renderServiceArea = () => {
        return(
          <div class="servce_area">
              <div class="container">
                  <div class="row">
                      <div class="col-xl-12">
                          <div class="section_title text-center mb-60">
                              <span>We Work For</span>
                              <h3>
                                  We Serve For Peoples
                              </h3>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-xl-4 col-md-4">
                          <div class="single_serve text-center">
                              <div class="serve_icon">                        
                                  <GiHamburger />
                              </div>
                              <h3>Pure Food & Water</h3>
                              <p>Inspires employees and organizations to support causes they care about. We do this to bring
                                  more resources to the nonprofits that are </p>
                          </div>
                      </div>
                      <div class="col-xl-4 col-md-4">
                          <div class="single_serve text-center">
                              <div class="serve_icon">
                                  <GiMedicines />
                              </div>
                              <h3>Medicine</h3>
                              <p>Inspires employees and organizations to support causes they care about. We do this to bring
                                  more resources to the nonprofits that are </p>
                          </div>
                      </div>
                      <div class="col-xl-4 col-md-4">
                          <div class="single_serve text-center">
                              <div class="serve_icon">
                                  <GiBookshelf />
                              </div>
                              <h3>Education</h3>
                              <p>Inspires employees and organizations to support causes they care about. We do this to bring
                                  more resources to the nonprofits that are </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>      
        )
      }

      renderHeader = () => {
        return(
          <header>
          <div class="header-area ">
              <div id="sticky-header" class="main-header-area">
                  <div class="container-fluid p-0">
                      <div class="row align-items-center justify-content-between no-gutters">
                          <div class="col-xl-2 col-lg-2">
                              <div class="logo-img">
                                  <a href="index.html">
                                      <img src="/assets/images/Adisom/NGO logo.jpg" alt="" />
                                  </a>
                              </div>
                          </div>
                          <div class="col-xl-7 col-lg-7">
                              <div class="main-menu  d-none d-lg-block">
                                  <nav>
                                      <ul id="navigation">
                                          <li><a class="active" href="index.html">home</a></li>
                                          <li><a href="about.html">About</a></li>
                                          <li><a href="causes.html">causes</a></li>
                                          <li><a href="impact.html">impact</a></li>
  
                                          <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                              <ul class="submenu">
                                                  <li><a href="blog.html">blog</a></li>
                                                  <li><a href="single-blog.html">single-blog</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="#">pages <i class="ti-angle-down"></i></a>
                                              <ul class="submenu">
                                                  <li><a href="causes-details.html">causes-details</a></li>
                                                  <li><a href="elements.html">elements</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="contact.html">Contact</a></li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                              {/* <div class="donate_now">
                                  <a href="#" class="boxed-btn">Donate Now</a>
                              </div> */}
                          </div>
                          <div class="col-12">
                              <div class="mobile_menu d-block d-lg-none"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
        )
      }

      handlePageScroll = (event) => {
          let element = document.getElementById("sticky-header");
          var sticky = window.pageYOffset;
          if (sticky < 400) {  
            element.classList.remove("sticky");
          } else {
            element.classList.add("sticky");
          }
        }
      
      render() {
        return(
          <div onScroll={(e) => this.handlePageScroll(e)}>
            {/* {this.renderNavBar()} */}
            {this.renderHeader()}
            {this.renderBanner()}
            <br /> 
            <br /> 
            {this.renderAboutUsInfo()}
            <br /> 
            <br /> 
            {this.renderServiceArea()}
            {this.renderSwitch()}
          </div>
        )
      }
}
