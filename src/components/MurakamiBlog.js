import React, {Component} from 'react';

export default class MurakamiBlog extends Component {
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
                           <h1>An Ode to Murakami: Author Review! 
                           </h1>
                           <br /> 
                           <p>
                           An elegant upside down painting, with a flawless proportion of colors to spotless voids, of chaos to a peaceful quite. A suave piano record, crafted with the utmost patience, with the high pitched noises coming into a convalescent equilibrium with their low pitched counterparts. The angry clouds, indecisive between a bold black or an unimpressive grey hue.
                           </p>
                           <p>Many imageries come to my mind at the sight of a Haruki Murakami written piece. The smoothest transition from spontaneity to tranquility and back, is visible in everything he writes. Creating a parallel world through his pen and allowing us to visit it, his novels have always fascinated me. Although perceptibly impossible, here is my attempt at honoring and maybe, adorning the works of the legend himself.</p>
                           <p>
                           Experiencing delusion, an elaborate shift in perception, an unusual attraction to unusuality: are key evidences that you are reading a Haruki Murakami book. Not your daily mystery fiction storywriter, Murakami brings elements to life in whatever he writes. I used to feel like the best way to appreciate Murakami was to have no words to appreciate him. But I tried to write a review. Because as we move along, the words start to make sense, don’t they?
                           </p>
                           <p>All except one (The Norwegian Woods) of his novels are characteristic of a dream-like fantasy realm, an imaginary reality full of artistic elements and magical characters. This new domain is furnished so well that one can confuse it with actual life. After all, what is “the actual life”, if not a majority-driven simulation of what is correct, but not necessarily right?</p>
                           <p>Like a solemn classical piano piece, Murakami’s stories emerge gracefully, with a tinge of indecision, but enticing from the moment you step into his world. The experience is anew, bewildering and addicting, like a drug. Nothing seems to make any sense. But then the right chords struck in, emotions reaching a pinnacle, the story reaches a new high and so do you. Slowly the delirium dies down and you are left with yourself, your thoughts and the wonderful feeling of being able to experience this sensation. The melody has died down, but you get to live with the memory of it.</p>
                           <p>“Kafka on the Shore” features secluded stories, different lives with their different scenarios, longings, ecstasies and sorrows. Nakata, the “gifted” old man isolated from society, and Kafka Tamura, a young boy of 15, running away from home seeking secrets and operating on the prophecies of a cursed myth; are like two parallel lines, never bound to touch. But if only you are patient enough, you can witness the moment they intertwine and become one. The smallest incident seems to feel significant in the turn out of the story. The virtual personalities have real struggles. The unconventional developments in the story begin to feel normal.</p>
                           <p> The story is like child’s play game, with talking cats and raining bugs, powerful wish-granting stones and a magically recursive indelible song. But don’t let the fun and games distract you, it is only when you are not looking that the demons come out of hiding.</p>
                           <p>Another one of his brilliant novels “Colorless Tsukuru Tazaki and his Years of Pilgrimage” poses a different outlook. This one proceeds on a not-so-high overtone, and has not as many wild facets as its ‘Kafka’ counterpart. In fact, it is dull. Mediocre. Sombre. Tsukuru is an average railway office worker, with no special interests and no striking features. Colorless indeed. But as incidents from his childhood again begin to levitate towards the surface, this tasteless individual is strangely attractive. Always made to feel like the odd one out, sticking like a sore thumb, Tsukuru decides to risk losing his soulless personality for a gamble. A gamble to win back the people he lost, the memories he missed. A gamble at the life he fell short of.</p> 
                           <p> Murakami’s stories are distinctive of the surprise element, that brings solace, but also curiosity. The oneness of the natural forces is a key factor. A multitude of personas fuse into one and just when you decide to merge forces with them, Ah! The story is over.</p> 
                           <p>Well at least, you can dream your own now.</p> 
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