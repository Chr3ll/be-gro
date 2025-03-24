import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  review3:
    'I recommend this beard serum to all my clients. It not only promotes beard growth but also helps in maintaining a well-groomed look.',
  author4Alt: 'Image of Sarah Williams',
  author3Src:
    'https://images.unsplash.com/photo-1571249104671-f5537fb3e137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: 'Read what our customers have to say about our beard serum.',
  author2Alt: 'Image of Jane Smith',
  author1Position: 'Beard Enthusiast',
  review1:
    "I've tried many beard products, but this serum is by far the best. It has helped me achieve a fuller and softer beard in just a few weeks.",
  author4Name: 'Sarah Williams',
  author2Position: 'Beauty Blogger',
  review4:
    "I love how this serum keeps my husband's beard looking healthy and shiny. It's now a staple in his grooming routine.",
  author1Alt: 'Image of John Doe',
  author3Alt: 'Image of Mike Johnson',
  author4Src:
    'https://images.unsplash.com/photo-1527610276295-f4c1b38decc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: 'Barber',
  author3Name: 'Mike Johnson',
  heading1: 'Testimonials',
  author1Src:
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'John Doe',
  review2:
    'As a beauty blogger, I come across various grooming products. This beard serum stands out for its quality ingredients and noticeable results.',
  author4Position: 'Fashion Influencer',
  author2Name: 'Jane Smith',
}

Testimonial.propTypes = {
  review3: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author2Src: PropTypes.string,
  content1: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.string,
  review1: PropTypes.string,
  author4Name: PropTypes.string,
  author2Position: PropTypes.string,
  review4: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author3Position: PropTypes.string,
  author3Name: PropTypes.string,
  heading1: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.string,
  review2: PropTypes.string,
  author4Position: PropTypes.string,
  author2Name: PropTypes.string,
}

export default Testimonial
