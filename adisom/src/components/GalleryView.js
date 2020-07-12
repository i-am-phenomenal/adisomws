import React, {Component} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Container,
    Row,
    ListGroup,
    Card,
    CardBody,
    ListGroupItem,
    Col,
    CarouselIndicators,
    CarouselCaption,
    UncontrolledCarousel 
}
from "reactstrap";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import VideoPlayer from './VideoPlayer';

import { 
    MDBCarousel, 
    MDBCarouselInner, 
    MDBCarouselItem, 
    MDBView, 
    MDBContainer 
  } from "mdbreact";

export default class GalleryView extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    original: "/assets/images/Adisom/w_1.jpg",
                    thumbnail: "/assets/images/Adisom/w_1.jpg"
                },
                {
                    original: "/assets/images/Adisom/w_2.jpg",
                    thumbnail: "/assets/images/Adisom/w_2.jpg"
                },
                {
                    original: "/assets/images/Adisom/w_3.jpg",
                    thumbnail: "/assets/images/Adisom/w_3.jpg"
                }              
            ],
          videosUrls: [
            'Adisom_video_1.mp4'
          ]
        }
    }

    renderVideos = () => {
        return(
          <div>
                {this.state.videosUrls.map(item => 
                    <VideoPlayer  
                      videoUrl = {'/videos/' + item}
                      />
                  )}
          </div> 
        ) 
    }

    renderVideoCarousel = () => {
      return(
        <div> 
           <MDBContainer style={{height: "30%", width: "60%"}}>
           <MDBCarousel
              activeItem={1}
              length={8}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
                <MDBCarouselInner> 
                    {this.renderVideos()}
                    </MDBCarouselInner>
              </MDBCarousel>
           </MDBContainer>
          </div>
      )
    }

    
    renderImageGallery = () => {
      return(
        <div class="section-top-border">
				<h3>Image Gallery</h3>
				<div class="row gallery-item">
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_1.jpg" class="img-pop-up">
              <div 
                class="single-gallery-image" 
                style={{background: "url(/assets/images/Adisom/w_1.jpg"}}
                >
                </div>
						</a>
					</div>
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_2.jpg" class="img-pop-up">
              <div 
                class="single-gallery-image" 
                style={{background: "url(/assets/images/Adisom/w_2.jpg)"}}
                >                  
                </div>
						</a>
					</div>
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_3.jpg" class="img-pop-up">
              <div 
                class="single-gallery-image" 
                style={{background: "url(/assets/images/Adisom/w_3.jpg)"}}
                >
                </div>
						</a>
					</div>
					<div class="col-md-6">
						<a href="/assets/images/Adisom/w_4.jpg" class="img-pop-up">
              <div 
                class="single-gallery-image" 
                style={{background: "url(/assets/images/Adisom/w_4.jpg)"}}
                >

                </div>
						</a>
					</div>
					<div class="col-md-6">
						<a href="/assets/images/Adisom/w_5.jpg" class="img-pop-up">
              <div 
                class="single-gallery-image" 
                style={{background: "url(/assets/images/Adisom/w_5.jpg)"}}
                >

                </div>
						</a>
					</div>
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_6.jpg" class="img-pop-up">
              <div 
              class="single-gallery-image" 
              style={{background: "url(/assets/images/Adisom/w_6.jpg)"}}
              >

              </div>
						</a>
					</div>
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_7.jpg" class="img-pop-up">
              <div 
              class="single-gallery-image" 
              style={{background: "url(/assets/images/Adisom/w_7.jpg)"}}
              >

              </div>
						</a>
					</div>
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_8.jpg" class="img-pop-up">
              <div 
              class="single-gallery-image" 
              style={{background: "url(/assets/images/Adisom/w_8.jpg)"}}
              >
              </div>
						</a>
					</div>
          <div class="col-md-4">
						<a href="/assets/images/Adisom/w_9.jpg" class="img-pop-up">
              <div 
                class="single-gallery-image" 
                style={{background: "url(/assets/images/Adisom/w_9.jpg"}}
                >
                </div>
						</a>
					</div>
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_10.jpg" class="img-pop-up">
              <div 
                class="single-gallery-image" 
                style={{background: "url(/assets/images/Adisom/w_10.jpg)"}}
                >                  
                </div>
						</a>
					</div>
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_11.jpg" class="img-pop-up">
              <div 
                class="single-gallery-image" 
                style={{background: "url(/assets/images/Adisom/w_11.jpg)"}}
                >
                </div>
						</a>
					</div>
					<div class="col-md-6">
						<a href="/assets/images/Adisom/w_12.jpg" class="img-pop-up">
              <div 
                class="single-gallery-image" 
                style={{background: "url(/assets/images/Adisom/w_12.jpg)"}}
                >

                </div>
						</a>
					</div>
					<div class="col-md-6">
						<a href="/assets/images/Adisom/w_13.jpg" class="img-pop-up">
              <div 
                class="single-gallery-image" 
                style={{background: "url(/assets/images/Adisom/w_13.jpg)"}}
                >

                </div>
						</a>
					</div>
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_14.jpg" class="img-pop-up">
              <div 
              class="single-gallery-image" 
              style={{background: "url(/assets/images/Adisom/w_14.jpg)"}}
              >

              </div>
						</a>
					</div>
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_15.jpg" class="img-pop-up">
              <div 
              class="single-gallery-image" 
              style={{background: "url(/assets/images/Adisom/w_15.jpg)"}}
              >

              </div>
						</a>
					</div>
					<div class="col-md-4">
						<a href="/assets/images/Adisom/w_16.jpg" class="img-pop-up">
              <div 
              class="single-gallery-image" 
              style={{background: "url(/assets/images/Adisom/w_16.jpg)"}}
              >
              </div>
						</a>
					</div>
				</div>
			</div>
      )
    }

    renderGalleryTextBelow = () => {
      return(
        <section class="sample-text-area">
		<div class="container box_1170">
			<h3 class="text-heading">Text Sample</h3>
			<p class="sample-text">
				Every avid independent filmmaker has <b>Bold</b> about making that <i>Italic</i> interest documentary,
				or short
				film to show off their creative prowess. Many have great ideas and want to “wow”
				the<sup>Superscript</sup> scene,
				or video renters with their big project. But once you have the<sub>Subscript</sub> “in the can” (no easy
				feat), how
				do you move from a <del>Strike</del> through of master DVDs with the <u>“Underline”</u> marked
				hand-written title
				inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC
				barcodes
				and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project
				replicated.
				Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is
				certainly a
				helpful option to ensure a professional end result, but to help with your DVD replication project, here
				are 4 easy
				steps to follow for good DVD replication results:

			</p>
		</div>
	</section>
      )
    }

    renderImageTextAbove = () => {
      return(
        <section class="sample-text-area">
		<div class="container box_1170">
			<h3 ><FaQuoteLeft /> Pictures speak a thousand words. <FaQuoteRight /> </h3>
			<p class="sample-text">
        <br />
        In the image collection curated below, we have tried to document all of our major activities and achievements as we helped one another. < br />
        A beautiful handiraft  collection of self-help groups we assisted also find their way here. 
			</p>
		</div>
	</section>
      )
    }

    render () {
        return(
          <div>
            {this.renderImageTextAbove()} 
            {this.renderImageGallery()}
            {/* {this.renderGalleryTextBelow()} */}
            {/* {this.renderVideos()} */}
          </div> 
        )
    }
}