import React from 'react';
import '../styles/Card.css';
import {useResponsive} from 'ahooks';
// import stars from '../images/stars.svg';//
import ReactStarsRating from 'react-awesome-stars-rating';
import LinesEllipsis from 'react-lines-ellipsis';



const Card = ({ subtext, title, image, voteAverage, voteCount }, ref) => {
  const responsive = useResponsive();
  let starSize;
    if (responsive.xl) {
      starSize = 20
    }else if (responsive.lg) {
      starSize = 18
    }else if (responsive.md) {
      starSize = 14
    }else if (responsive.sm) {
      starSize = 12
    }else {
      starSize = 8
    }

  return (
      <div className="card" ref={ref}>
        <div className="card__image">
          <img src={image} alt="movie" className="img" />
        </div>
        <div className="card__texts">
          <h3 className="card__text">{title}</h3>
          <LinesEllipsis
            text={subtext}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="words"
          />
        {/* <p className="card__subtext">{subtext}</p> */}
        </div>
        <div className="ratings">
          <ReactStarsRating
            isEdit={false}
            size={starSize}
            starGap={4}
            className="rating"
            value={voteAverage / 2}
            primaryColor="#ED8A19"
          />
          <span className="reviews">{voteCount} Votes</span>
        </div>
      </div>
    );
}

export default React.forwardRef(Card);