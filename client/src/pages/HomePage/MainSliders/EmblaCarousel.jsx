import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Card from '@pages/CatalogPage/Products/CardsContainer/Card/Card';
import Fade from 'embla-carousel-fade';
import useScreenSizes from '@hooks/useScreenSizes';

const EmblaCarousel = ({ slides, options }) => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  let plugins = [Fade()];
  if (tablet || deskmin || deskmax) plugins = [];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <Card key={index} card={slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi); */}
        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
