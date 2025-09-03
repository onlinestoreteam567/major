import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import BannerBenefits from './BannerBenefits/BannerBenefits';
import PaginatedBenefits from './PaginatedBenefits/PaginatedBenefits';

const KeyBenefits = () => {
  const { tablet, deskmin, deskmax } = useScreenSizes();

  const isNotShowBanner = tablet || deskmin || deskmax;

  return (
    <div className={cl.keyBenefits}>
      <Heading type="h2">Що робить Major особливим?</Heading>
      <Paragraph type="body1">
        Ми не хочемо бути просто ще одним брендом косметики для волосся. Наша мета — створювати продукти, які дійсно
        вирішують проблеми волосся, а не маскують їх. Тому ми ставимо перед собою кілька важливих принципів:
      </Paragraph>
      {!isNotShowBanner ? <BannerBenefits /> : <PaginatedBenefits />}
    </div>
  );
};
export default KeyBenefits;
