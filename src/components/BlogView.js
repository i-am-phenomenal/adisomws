import React, {Component} from 'react';

export default class BlogView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                                        <img src="img/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7">
                                <div class="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a href="index.html">home</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="causes.html">causes</a></li>
                                            <li><a href="impact.html">impact</a></li>
    
                                            <li><a class="active" href="#">blog <i class="ti-angle-down"></i></a>
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
                                <div class="donate_now">
                                    <a href="#" class="boxed-btn">Donate Now</a>
                                </div>
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

    renderBlogArea = () => {
        return(
            <section class="blog_area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mb-5 mb-lg-0">
                        <div class="blog_left_sidebar">
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img 
                                        class="card-img rounded-0" 
                                        src="/assets/images/blog/corona.png" 
                                        alt="" 
                                        />
                                    <a href="#" class="blog_item_date">
                                        <h3>2</h3>
                                        <p>May</p>
                                    </a>
                                </div>
    
                                <div class="blog_details">
                                    <a class="d-inline-block" href="/blogs/corona_extension_hypothesis/">
                                        <h2>The Corona Extension Hypothesis</h2>
                                    </a>
                                    <p>
                                    A gutsy take on the ongoing COVID-19 pandemic because the best way to escape disaster, is to embrace it. I envisage this is how events might take a turn if the catastrophic activities do not begin to cease in a month or two. Here’s to hoping for a better future for everyone, but for now, let’s read what will happen if that doesn’t occur.
                                        </p> 
                                        <ul class="blog-info-link">
                                        <li><a href="#"><i class="fa fa-user"></i> CoronaVirus, Articles, Hypothesis, Creative Writing, Fiction</a></li>
                                    </ul>                                    
                                </div>
                            </article>
    
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img 
                                        class="card-img rounded-0" 
                                        src="/assets/images/blog/perception.png" 
                                        alt="" 
                                        />
                                    <a href="/blogs/perception_of_memory/" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>
    
                                <div class="blog_details">
                                    <a class="d-inline-block" href="/blogs/perception_of_memory/">
                                        <h2>The perception of Memory</h2>
                                    </a>
                                    <p>That’s the first thing you notice as your eyes flutter awake and roam to the open window right in front of them. The plain ivory curtains made to match the carpet, are flitting away slightly, so it must be windy, but you can’t feel it.</p>
                                    <ul class="blog-info-link">
                                        <li><a href="#"><i class="fa fa-user"></i> Storytelling, Stories, Time, Painting, Quarantine</a></li>
                                    </ul>
                                </div>
                            </article>
    
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src="/assets/images/blog/ode.png"  alt="" />
                                    <a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>
    
                                <div class="blog_details">
                                    <a class="d-inline-block" href="/blogs/ode_to_murakami/">
                                        <h2>An Ode to Murakami: Author Review!</h2>
                                    </a>
                                    <p>An elegant upside down painting, with a flawless proportion of colors to spotless voids, of chaos to a peaceful quite. A suave piano record, crafted with the utmost patience, with the high pitched noises coming into a convalescent equilibrium with their low pitched counterparts. The angry clouds, indecisive between a bold black or an unimpressive grey hue.</p>
                                    <ul class="blog-info-link">
                                        <li><a href="#"><i class="fa fa-user"></i> Literature, Books and Authors, Haruki Murakami, Book Review, Review</a></li>
                                    </ul>
                                </div>
                            </article>
    
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src="/assets/images/blog/see_me.png"  alt="" />
                                    <a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>
    
                                <div class="blog_details">
                                    <a class="d-inline-block" href="/blogs/can_you_see_me/">
                                        <h2>Can you see me?</h2>
                                    </a>
                                    <p>I’m just another irrelevant human being residing on this planet of rock and gas, for an extremely short mortal time. But until I perish, like all, I must strive to prove my point and work towards my purpose. Now isn’t that what life is all about?</p>
                                    <ul class="blog-info-link">
                                        <li><a href="#"><i class="fa fa-user"></i> Introduction, Creative Writing, Poetry, Imagination </a></li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
    render() {
        return(
            <div>
            {/* {this.renderHeader()} */}
            {this.renderBlogArea()}
            </div> 
        )
    }
}