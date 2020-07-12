import React, {Component} from 'react';

export default class CanYouSeeMeBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderBlogContent = () => {
        return(
            <section class="blog_area single-post-area section-padding">
            <div class="container">
               <div class="row">
                     <div class="single-post">
                        <div class="feature-img">
                           <img class="img-fluid" src="img/blog/single_blog_1.png" alt="" />
                        </div>
                        <div class="blog_details">
                           <h1>Can you see me?
                           </h1>
                           <br /> 
                           <p>
                           Greetings, fellow internet zombies.
                           </p>
                           <p>I’m just another irrelevant human being residing on this planet of rock and gas, for an extremely short mortal time. But until I perish, like all, I must strive to prove my point and work towards my purpose. Now isn’t that what life is all about?</p>
                           <p>
                           Just like every unnecessary social gathering, we can’t really begin without a complimentary introduction. So this article will feature me trying to balance “providing the adequate amount of information about myself” and “trying to sound clever in doing so.”
                           </p>
                           <p>I am a High School student, currently in my final year. I adore cats and have strong reasons to believe I am one. I love watching TV shows, movies, listening to music. Reading and writing have definitely been my strong areas of interest since childhood. Drawing, dancing, and participating in oratory events: all come a close second.</p>
                           <p>My writing style definitely went through a puberty of its own as seasons changed and so did twitter trending topics. From writing poems about how trees are green and happy, to articles about how deforestation is real and sappy; the years went by.</p>
                           <p>On one hand, I bring with me informative snippy little bits of data on stirring issues that actually matter. And on the other hand, I pen down swirling vortexes of indecipherable emotions that I like to call “poetry”. Mostly I work with merry verses that light up my mind, but the few times I access the not-so-cheery tempers, the results are powerful. And baffling.</p>
                           <p>On this blog, I leave behind the truest pieces of my soul, via the most veracious way I know of representing them. Writing seldom makes me feel like an artsy architect that created a paradoxical staircase: one that neither descends or ascends, when I force myself to make sense of a string of letters, never meant to be stringed together. But penning these thoughts down mostly makes me float, being gifted with the ability to make the clouds below me drain, without anybody getting wet.</p>
                           <p>Okay, I’m out of my word labyrinth. Don’t look for the point: there isn’t any. There is no need for one. Albeit I am super excited to be able to blog my ideas and get mass attention on them. I look forward to you looking forward to my works (see what I did there?) and hope to showcase my best.</p> 
                           <p> Welcome to the castle of make-believe content, and fancy metaphors. Here the only princess you need to save is yourself. Can you outrun the riddling maze, or should I ask, do you even want to?</p> 
                        </div>
                     </div>
                     <div class="navigation-top">
                        <div class="d-sm-flex justify-content-between text-center">
                           <ul class="social-icons">
                              <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                              <li><a href="#"><i class="fa fa-behance"></i></a></li>
                           </ul>
                        </div>
                        <div class="navigation-area">
                           <div class="row">
                              <div
                                 class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                 <div class="thumb">
                                    <a href="#">
                                       <img class="img-fluid" src="img/post/preview.png" alt="" />
                                    </a>
                                 </div>
                                 <div class="arrow">
                                    <a href="#">
                              
                                    </a>
                                 </div>
                              </div>
                              
                           </div>
                        </div>
                     </div>
                     <div class="blog-author">
                        <div class="media align-items-center">
                           <img src="/assets/images/shola.png" alt="" />
                           <div class="media-body">
                              <a href="#">
                                 <h4>Saumya Chaturvedi</h4>
                              </a>
                              <p>A socially distraught feline creature, just writing the gloom away. You want in on the action?</p>
                           </div>
                        </div>
                     </div>                     
               </div>
            </div>
         </section>
        )
    }

    render () {
        return(
            <div> 
                {this.renderBlogContent()}
                </div>
        )
    }
}