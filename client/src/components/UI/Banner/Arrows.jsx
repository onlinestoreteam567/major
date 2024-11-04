import cl from './index.module.scss';
import leftArrow from '@svg/banners/arrowLeft.svg';
import rightArrow from '@svg/banners/arrowRight.svg';

const Arrows = ({ arrow, sliderRef }) => {
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      {arrow === 'previous' && (
        <button className={`button ${cl.arrow} ${cl.previousArrow}`} onClick={previous}>
          <img src={leftArrow} alt="Button for previous slide" />
        </button>
      )}

      {arrow === 'next' && (
        <button className={`button ${cl.arrow} ${cl.nextArrow}`} onClick={next}>
          <img src={rightArrow} alt="Button for next slide" />
        </button>
      )}
    </>
  );
};

export default Arrows;
