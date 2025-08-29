import Heading from '@components/UI/Texts/Heading/Heading';
import keyBenefitsArray from '../keyBenefitsArray';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { useState } from 'react';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel/ButtonAriaLabel';
import ArrowRight from '@assets/svg/ArrowRight';

const PaginatedBenefits = () => {
  const [currentOption, setCurrentOption] = useState('option2');

  const option1Indices = [0, 3, 4];
  const option2Indices = [1, 2, 5];

  const toggleOption = () => {
    setCurrentOption((prevOption) => (prevOption === 'option1' ? 'option2' : 'option1'));
  };

  const firstColumn = [keyBenefitsArray[0], keyBenefitsArray[2], keyBenefitsArray[4]];
  const secondColumn = [keyBenefitsArray[1], keyBenefitsArray[3], keyBenefitsArray[5]];

  return (
    <div className={cl.paginatedBenefits}>
      <div>
        {firstColumn.map((benefit) => {
          const showParagraph =
            currentOption === 'option1'
              ? option1Indices.includes(benefit.index)
              : option2Indices.includes(benefit.index);

          return (
            <div key={benefit.index} className={showParagraph ? cl.showParagraph : ''}>
              <Heading type="h2">{benefit.title}</Heading>
              {showParagraph ? (
                <Paragraph type="body1">{benefit.description}</Paragraph>
              ) : (
                <ButtonAriaLabel al={'nextProducts'} onClick={toggleOption}>
                  <ArrowRight />
                </ButtonAriaLabel>
              )}
            </div>
          );
        })}
      </div>
      <div>
        {secondColumn.map((benefit) => {
          const showParagraph =
            currentOption === 'option1'
              ? option1Indices.includes(benefit.index)
              : option2Indices.includes(benefit.index);

          return (
            <div key={benefit.index} className={showParagraph ? cl.showParagraph : ''}>
              <Heading type="h2">{benefit.title}</Heading>
              {showParagraph ? (
                <Paragraph type="body1">{benefit.description}</Paragraph>
              ) : (
                <ButtonAriaLabel al={'nextProducts'} onClick={toggleOption}>
                  <ArrowRight />
                </ButtonAriaLabel>
              )}
            </div>
          );
        })}
      </div>

      {/* {keyBenefitsArray.map((benefit, index) => {
        const showParagraph =
          currentOption === 'option1' ? option1Indices.includes(index) : option2Indices.includes(index);

        return (
          <div key={index} className={showParagraph ? cl.showParagraph : ''}>
            <Heading type="h2">{benefit.title}</Heading>
            {showParagraph ? (
              <Paragraph type="body1">{benefit.description}</Paragraph>
            ) : (
              <ButtonAriaLabel al={'nextProducts'} onClick={toggleOption}>
                <ArrowRight />
              </ButtonAriaLabel>
            )}
          </div>
        );
      })} */}
    </div>
  );
};
export default PaginatedBenefits;
